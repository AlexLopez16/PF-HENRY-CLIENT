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
    logged: localStorage.getItem('token')!=null,
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
                logged: localStorage.getItem('token') == null ? false : true,
                status: status,
                data: { id, rol }
            };

        default:
            return state;
    }
}