import { string } from "yup"
import types from "../types/types"

interface LoginFields {
    token: string,
    rol: string
}

const initialState = {
    token: '',
    rol: '',
} 

type Action = {
    type: string,
    payload: any
}


export const reducerLogin = (state: LoginFields = initialState, action: Action ) => {
    switch(action.type){
        case types.login:
            return {
                ...state, 
                token: action.payload.token,
                rol: action.payload.rol
            }
        default:
            return {...state}
    }
}