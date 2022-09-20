import React, {useRef} from 'react'
import moonIcon from './images/icon-moon.svg';
import sunIcon from './images/icon-sun.svg';

import Todo from './Todo';

import { useDispatch, useSelector } from 'react-redux';
import { selectDarkMode, toggleTheme } from './features/slices/themeSlice';

function Todos() {
const inputRef = useRef();

const darkMode = useSelector(selectDarkMode);
const dispatch = useDispatch();

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
            <form>
                <input 
                    type="text" ref={inputRef} 
                    placeholder="Crie uma nova tarefa..."
                    className={!darkMode ? "whiteBg" : ""}
                />
                <button type='submit' hidden></button>
            </form>
        </div>

        <div className={`todos_container ${!darkMode ? "whiteBg" : ""}`}>
            <Todo />

            <div className={`todos_footer ${!darkMode ? "whiteBg" : ""}`}>
                <p>0 items a esquerda</p>

                <div className="types">
                    <div className="types">
                        <p className='clear'>Todos</p>

                        <p className='clear'>Ativo</p>

                        <p className='clear'>Concluido</p>
                    </div>

                </div>
                <p className='clear'>Limpeza completada</p>
            </div>
        </div>
    </div>
  )
}

export default Todos