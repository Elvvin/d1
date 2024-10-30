import React from 'react'
import { ToDoProvider } from './ToDoContext'
import AddTodo from './AddTodo'
import ToDoList from './ToDoList'

const App = () => {
    return (
        <div style={{textAlign:'center'}}>
            <ToDoProvider>
                <h1 style={{textAlign:'center', margin: '50px 0'}}>
                    To-Do List
                </h1>
                <AddTodo />
                <ToDoList />
            </ToDoProvider>
        </div>
    )
}

export default App
