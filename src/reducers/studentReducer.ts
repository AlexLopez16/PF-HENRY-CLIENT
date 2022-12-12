
import { types } from "../types/types";


interface State {
    user:object

}

const initialState = {
    user:{}
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
                user:action.payload
            }

        default:
            return state;
    }
}