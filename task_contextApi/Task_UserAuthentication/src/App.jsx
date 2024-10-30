import React, { useContext } from 'react'
import { AuthContext, AuthProvider } from './AuthContext'
import Home from './Home'
import LoginPage from './LoginPage'

function App(){
    return (
        <AuthProvider>
            <Main />
        </AuthProvider>
    )
}

const Main = () => {
    const { isLoggedIn } = useContext(AuthContext)
    return isLoggedIn ? <Home /> : <LoginPage />
}

export default App