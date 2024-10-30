import React, { createContext, useState } from 'react';

export const AuthContext = createContext()

export const AuthProvider =  ({ children }) => {
    const [user, setUser] = useState(null)
    const isLoggedIn = !!user

    const login = (userData) => {
        setUser(userData)
    }

    const logout = () => {
        setUser(null)
    }

    return(
        <AuthContext.Provider value={{user, isLoggedIn, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}