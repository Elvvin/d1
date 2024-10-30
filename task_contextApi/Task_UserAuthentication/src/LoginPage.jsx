import React, { useContext, useState } from 'react'
import { AuthContext } from './AuthContext'

function LoginPage(){
    const { login } = useContext(AuthContext)
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setUserData((prevData) => ({ ...prevData, [name]: value }))
    }

    const handleLogin = () => {
        login(userData)
    }

    return(
        <div>
            <h2>Login</h2>
            <input name='firstName' placeholder='First Name' onChange={handleInputChange} />
            <input name='lastName' placeholder='Last Name' onChange={handleInputChange} />
            <input name='email' placeholder='Email' onChange={handleInputChange} />
            <input name='gender' placeholder='Gender' onChange={handleInputChange} />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default LoginPage