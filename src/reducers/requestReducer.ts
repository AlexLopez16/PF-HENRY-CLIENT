import { types } from '../types/types';

// Definimos el campo de nuestra request.
interface RequestField {
    inProgress: boolean | any;
}

// Definimos su estado inicial.
const initialState = {
    inProgress: false,
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
            return {
                ...state,
                inProgress: false,
            };
        default:
            return { ...state };
    }
};
