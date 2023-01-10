import { types } from '../types/types';

interface State {
    user: object;
    total2: number;
    detail: object | any;
}
const initialState = {
    user: [],
    total2: 0,
    detail: null,
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
            const { usersCompany, total }: any = action.payload;
            return {
                ...state,
                user: usersCompany,
                total2: total,
            };

        case types.companyUpdateInfo:
            return {
                ...state,
                user: { ...state.user, ...action.payload },
            };
        case types.clearCompany: {
            return { user: [], total2: 0 };
        }
        case types.ratingProjectCompany:
            return {
                ...state,
                user: action.payload,
            };
        case types.ratingProject:
            return {
                ...state,
                user: action.payload,
            };
        case types.detailCompany:
            return {
                ...state,
                detail: action.payload,
            };

        default:
            return state;
    }
};
