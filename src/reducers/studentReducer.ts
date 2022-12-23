
import { userInfo } from "os";
import { types } from "../types/types";


interface State {
    user: object

}

const initialState = {
    user: {}
}


type Action = {
    type: string,
    payload?: {}

}

export const studentReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case types.studentRegister:
            return {
                ...state,
                user: action.payload
            }

        case types.studentGetInfo:
            return {
                ...state,
                user: action.payload
            }

        case types.studentUpdateInfo:
            return {
                ...state,
                user: { ...state.user, ...action.payload }
            }

        case types.studentSearch:
            return {
                ...state,
                user: action.payload
            }
        case types.AddStToPr:
            return { ...state, 
                user: action.payload }
        default:
            return state;
    }
}