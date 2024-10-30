import React from 'react'
import { useTodos } from './ToDoContext'
import './styles/ToDoList.css'

const ToDoList = () => {
    const { todoList, completeTodo, removeTodo } = useTodos()

    return (
        <div className='todoList'>
            <ul>
                {todoList?.map((todo, index) => (
                    <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo?.text}
                        <button className='completeButton' onClick={() => completeTodo(todo.id)}>
                            {todo.completed ? 'Undo' : 'Complete'}
                        </button>
                        <button className='removeButton' onClick={() => removeTodo(todo.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList
