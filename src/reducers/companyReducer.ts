import { types } from '../types/types';

interface State {
    user: object;
}
const initialState = {
    user: [],
};

type Action = {
    type: String;
    payload?: {};
};

export const companyReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case types.registerCompany:
            return {
                ...state,
                ...action.payload,
            };

        case types.companyGetInfo:
            return {
                ...state,
                user: action.payload,
            };

        case types.companyGetList:
            return {
                ...state,
                user: action.payload,
            };

        case types.companyUpdateInfo:
            return {
                ...state,
                user: { ...state.user, ...action.payload },
            };
        default:
            return state;
    }
};
