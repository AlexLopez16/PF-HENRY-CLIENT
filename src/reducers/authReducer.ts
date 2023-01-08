import { types } from '../types/types';

interface State {
    logged: boolean;
    status: number;
    data: {
        id: string;
        rol: string;
        verify: boolean;
        email: string;
        userState: boolean | null;
    };
}

const initialState = {
    logged: false,
    status: 0,
    data: {
        id: '',
        rol: '',
        verify: false,
        email: '',
        userState: true,
    },
};

type Action = {
    type: string;
    payload: {
        data: {};
    };
};

export const authReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case types.authLogin:
            const { status }: any = action.payload;
            const { id, rol, verify, email, userState }: any = action.payload
                .data
                ? action.payload.data
                : {};
            return {
                ...state,
                logged: status >= 200 && status < 400 ? true : false,
                status: status,
                data: { id, rol, verify, email, userState },
            };

        case types.clearAuthLogin:
            localStorage.clear();
            return {
                ...state,
                logged: false,
                status: action.payload,
            };

        case types.gitHubInactivateLogOut:
            localStorage.clear();
            return {
                ...state,
                logged: false,
                status: action.payload,
                data: { userState: false },
            };

        default:
            return state;
    }
};
