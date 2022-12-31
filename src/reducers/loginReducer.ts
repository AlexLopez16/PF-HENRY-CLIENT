// import { string } from "yup"
import {types} from "../types/types"

interface LoginFields {
    token: string,
    rol: string,
    verify: boolean
}

const initialState = {
    token: '',
    rol: '',
    verify: false
} 

type Action = {
    type: string,
    payload: any
}


export const loginReducer = (state: LoginFields = initialState, action: Action ) => {
    switch(action.type){
        case types.login:
            // console.log(action.payload)
            return {
                ...state, 
                token: action.payload.token,
                rol: action.payload.rol,
                verify: action.payload.verify,
            }
        default:
            return {...state}
    }
}