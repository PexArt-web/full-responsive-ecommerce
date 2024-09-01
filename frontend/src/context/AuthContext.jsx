
import { createContext, useReducer } from "react";


export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {user:  action.payload}
        case 'LOGOUT':
            return {user: null}

        default:
            return state
        }
}


const AuthContextProvider = (props) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })
    console.log('AuthContext', state)
  return (
    <AuthContext.Provider value={{...state, dispatch}}>
        {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
