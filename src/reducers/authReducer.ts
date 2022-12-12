import { types } from "../types/types";

interface State {
    logged: boolean;
    status: number;
    data: {
        id: string,
        rol: string
    };
}

const initialState = {
    logged: false,
    status: 0,
    data: {
        id: '',
        rol: ''
    }
}

type Action = {
    type: string,
    payload: {
        data: {}
    },
}

export const authReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case types.authLogin:
            const { status }: any = action.payload;
            const { id, rol }: any = action.payload.data
            return {
                ...state,
                logged: status === 200 ? true : false,
                status: status,
                data: { id, rol }
            };

        default:
            return state;
    }
}