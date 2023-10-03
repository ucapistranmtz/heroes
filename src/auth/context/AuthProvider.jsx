

import { AuthContext } from './AuthContex'
import { authReducer } from './authReducer'
import { types } from '../types/types'
import React, { useReducer } from 'react'

const initialState = {
    logged: false
}

export const AuthProvider = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, initialState);

    const login = async (name = '') => {
        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                name: name
            }
        };

        dispatch(action); 
    }
    return (
        <AuthContext.Provider
            value={{ ...authState, login: login }}>
            {children}
        </AuthContext.Provider>
    )
}
