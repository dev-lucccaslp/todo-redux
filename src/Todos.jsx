import React, {useRef} from 'react'
import moonIcon from './images/icon-moon.svg';
import sunIcon from './images/icon-sun.svg';

import Todo from './Todo';

function Todos() {
const inputRef = useRef()

  return (
    <div className='todos'>
        <div className='todosHeader'>
            <h1>TO DOS</h1>
            <img src={moonIcon} alt="" srcset="" />
        </div>

        <div className="input_container">
            <div className="circle"></div>
            <form>
                <input type="text" ref={inputRef} placeholder="Crie uma nova tarefa..."/>
                <button type='submit' hidden></button>
            </form>
        </div>

        <div className="todos_container">
            <Todo />

            <div className="todos_footer">
                <p>0 items a esquerda</p>

                <div className="types">
                <div className="types">
                    <p className='clear'>
                        Todos
                    </p>

                    <p className='clear'>
                        Ativo
                    </p>

                    <p className='clear'>
                        Concluido
                    </p>
                    </div>

                    <p className='clear'>Limpeza completada</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Todos