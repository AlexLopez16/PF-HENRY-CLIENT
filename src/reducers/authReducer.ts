import { types } from "../types/types";

interface State {
    // user: string[]
    logged: boolean
    status: number
}

const initialState = {
    // user: [],
    logged: false,
    status: 0
}

type Action = {
    type: string,
    payload?: {},
}

export const authReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case types.authLogin:
            const { status }: any = action.payload;
            return {
                ...state,
                ...action.payload,
                logged: status === 200 ? true : false,
                status: status
            };

        default:
            return state;
    }
}