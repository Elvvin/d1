import React, { createContext, useContext, useState } from 'react'

const ToDoContext = createContext()

export const ToDoProvider = ({ children }) => {
    const [todoList, setTodoList] = useState([])
    const [todo, setTodo] = useState({
        id: Date.now(),
        text: '',
        completed: false
    })

    const addTodo = (text) => {
        setTodoList((prevTodos) => [...prevTodos, { id: Date.now(), text, completed: false }])
    }

    const completeTodo = (id) => {
        setTodoList((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        )
    }

    const removeTodo = (id) => {
        setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
    }

    return (
        <ToDoContext.Provider value={{ addTodo, completeTodo, removeTodo, todoList, todo, setTodo }}>
            {children}
        </ToDoContext.Provider>
    )
}

export const useTodos = () => useContext(ToDoContext)