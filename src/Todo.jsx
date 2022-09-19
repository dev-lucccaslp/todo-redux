import React from 'react'
import crossIcon from './images/icon-cross.svg'
import checkIcon from './images/icon-check.svg'


function Todo() {
  return (
    <div className='todo_container'>
        <div className="circle">
            <img src={checkIcon} alt="check icon" srcset="" />
        </div>

        <li className="todo">exemplo</li>

        <img src={crossIcon} className='delete-icon' alt="cross icon" />
    </div>
  )
}

export default Todo