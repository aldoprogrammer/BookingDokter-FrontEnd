import { createContext, useReducer } from "react"

const initialState = {
    user: null,
    role: null,
    token: null
}

const authToken = createContext(initialState);

const authReducer = (state, action) => {

    switch (action.type) {
        case 'LOGIN_START':

        return {
            user: null,
            role: null,
            token: null
        }

        case 'LOGIN_SUCCESS':

        return {
            user: action.payload.user,
            role: action.payload.role,
            token: action.payload.token
        }

        case 'LOGOUT':

        return {
            user: null,
            role: null,
            token: null
        }

        default:
            return state;
    }
}

export const authContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    return (
        <authToken.Provider 
            value={{
            user: state.user,
            token: state.token,
            role: state.role,
            dispatch
            }}
        >
            {children}
        </authToken.Provider>
    )

}