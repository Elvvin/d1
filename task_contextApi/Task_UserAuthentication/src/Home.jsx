import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'

function Home() {
    const { user, logout } = useContext(AuthContext)

    return (
        <div>
            <h2>Welcome, {user.firstName}!</h2>
            <p>Name: {user.firstName} {user.lastName}</p>
            <p>Email: {user.email}</p>
            <p>Gender: {user.gender}</p>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Home