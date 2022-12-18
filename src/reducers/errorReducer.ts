import { types } from '../types/types';
interface ErrorFields {
    status: number;
    message: string;
}

const initialState = {
    status: 0,
    message: '',
};

type Action = {
    type: string;
    payload: any;
};

export const errorReducer = (
    state: ErrorFields = initialState,
    action: Action
) => {
    switch (action.type) {
        case types.showError:
            // console.log(action.payload.data.errors[0].msg);
            //console.log(action.payload.status);
            let status = 0;
            let message = '';
            status = action.payload.status;
            message = action.payload.data.errors[0].msg;
            return {
                ...state,
                status: status,
                message: message,
            };
        case types.clearError:
            return {
                ...state,
                status: 0,
                message: '',
            };
        default:
            return { ...state };
    }
};
