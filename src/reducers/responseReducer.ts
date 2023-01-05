import { types } from '../types/types';

// Definimos el campo de nuestra response.
interface ResponseField {
    status: number | any;
    msg: string | any;
}

// Definimos su estado inicial.
const initialState = {
    status: undefined,
    msg: undefined,
};

// Definimos el tipo de nuestra action.
type Action = {
    type: string | any;
    payload: object | any;
};

// Reducer.
export const responseReducer = (
    state: ResponseField = initialState,
    action: Action
) => {
    switch (action.type) {
        case types.responseFinished:
            return {
                ...state,
                status: action.payload?.status ? action.payload.status : null,
                msg: action.payload?.data?.msg ? action.payload.msg : null,
            };
        case types.responseCleaned:
            return {
                ...state,
                status: null,
                msg: null,
            };
        default:
            return { ...state };
    }
};
