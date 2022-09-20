import React, {useRef} from 'react'
import moonIcon from './images/icon-moon.svg';
import sunIcon from './images/icon-sun.svg';

import Todo from './Todo';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectDarkMode, toggleTheme } from './features/slices/themeSlice';

import {
   addTodo, 
   clearCompleted,
   selectActiveTodos,
   selectCompletedTodos,
   selectShowActiveTodos,
   selectShowCompletedTodos,
   selectShowTodos,
   selectTodos,
} from './features/slices/todosSlice';

import {showCompletedFunction} from './features/slices/todosSlice';
import {showAllFunction} from './features/slices/todosSlice';
import {showActiveFunction} from './features/slices/todosSlice';
 
function Todos() {
const inputRef = useRef();

const darkMode = useSelector(selectDarkMode);
const dispatch = useDispatch();

const todos = useSelector(selectTodos)
const completedTodos = useSelector(selectCompletedTodos)
const activeTodos =  useSelector(selectActiveTodos)

const showTodos =  useSelector(selectShowTodos)
const showActiveTodos =  useSelector(selectShowActiveTodos)
const showCompletedTodos =  useSelector(selectShowCompletedTodos)

let todosToRender;
let activeTodosNumber = 0;

const submitTodo = (e) => {
    e.preventDefault();

    if(inputRef.current.value.trim()) {
        dispatch(addTodo({
            id: Math.random() * 1000,
            content: inputRef.current.value,
        }))
    }

    inputRef.current.value = ""
}

const showCompletedHandler = () => {
    dispatch(showCompletedFunction())
}

const showAllHandler = () => {
    dispatch(showAllFunction())
}

const showActiveHandler = () => {
    dispatch(showActiveFunction())
}

const clearCompletedHandler = () => {
    dispatch(clearCompleted())
}

if (showActiveTodos) {
    todosToRender = activeTodos;
} else if(showCompletedTodos) {
    todosToRender = completedTodos;
} else { 
    todosToRender= todos;
}

todos?.forEach((todosToRender) =>{
    if(!todos.completed) {
        activeTodosNumber++;
    }
})

  return (
    <div className='todos'>
        <div className='todosHeader'>
            <h1>TO DOS</h1>
            {darkMode ? (
                <img src={sunIcon} alt=""  onClick={() => dispatch(toggleTheme())} />
            ): (
                <img src={moonIcon} alt="" onClick={() => dispatch(toggleTheme())} />
            )}
        </div>

        <div className="input_container">
            <div className="circle"></div>
            <form onSubmit={submitTodo}>
                <input 
                    type="text" ref={inputRef} 
                    placeholder="Crie uma nova tarefa..."
                    className={!darkMode ? "whiteBg" : ""}
                />
                <button type='submit' hidden></button>
            </form>
        </div>

        <div className={`todos_container ${!darkMode ? "whiteBg" : ""}`}>
            {todosToRender.map((todo) => (
                <Todo 
                    content={ todo.content }
                    key = { todo.id }
                    id= { todo.id }
                    completed= {todo.completed}
                />
            ))}

            <div className={`todos_footer ${!darkMode ? "whiteBg" : ""}`}>
                <p>{activeTodosNumber} items a esquerda</p>

                <div className="types">
                    <div className="types">
                        <p className={`clear ${showTodos ? "active" : ""}`} onClick={showAllHandler}>Todos</p>

                        <p className={`clear ${showActiveTodos ? "active" : ""}`} onClick={showActiveHandler}>Ativo(s)</p>

                        <p className={`clear ${showCompletedTodos ? "active" : ""}` } onClick={showCompletedHandler} >Concluido(s)</p>
                    </div>

                </div>
                <p className='clear' onClick={clearCompletedHandler}>Remover concluidos</p>
            </div>
        </div>
    </div>
  )
}

export default Todos