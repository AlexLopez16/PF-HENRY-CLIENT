import { types } from '../types/types';

// Definimos el campo de nuestra request.
interface RequestField {
    inProgress: boolean | any;
    status: number | any;
    msg: string | any;
}

// Definimos su estado inicial.
const initialState = {
    inProgress: false,
    status: undefined,
    msg: undefined,
};

// Definimos el tipo de nuestra action.
type Action = {
    type: string | any;
    payload: object | any;
};

// Reducer.
export const requestReducer = (
    state: RequestField = initialState,
    action: Action
) => {
    switch (action.type) {
        case types.requestInProgress:
            return {
                ...state,
                inProgress: true,
            };
        case types.requestFinished:
            console.log(action.payload?.status);
            return {
                ...state,
                inProgress: false,
                status: action.payload?.status ? action.payload.status : null,
                msg: action.payload?.data?.msg ? action.payload.msg : null,
            };
        case types.requestCleaned:
            return {
                ...state,
                inProgress: false,
                status: null,
                msg: null,
            };
        default:
            return { ...state };
    }
};
