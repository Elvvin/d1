import React, { useState } from 'react'
import { useTodos } from './ToDoContext'
import './styles/Input.css'

const AddTodo = () => {
    const [inputValue, setInputValue] = useState('')
    const { addTodo } = useTodos()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim()) {
            addTodo(inputValue)
            setInputValue('')
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            className='input'
            value={inputValue}
            placeholder='Add Todo'
            onChange={(e) => setInputValue(e.target.value)}
            />
            <button type='submit' className='button add'>Add Todo</button>
        </form>
    )
}

export default AddTodo
