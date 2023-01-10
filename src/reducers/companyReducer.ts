import { types } from '../types/types';

interface State {
    user: Company[];
    total2: number;
}
const initialState = {
    user: [],
    total2: 0,
};

export interface Company {
    name: string;
    country: string;
    email: string;
    password: string;
    gmail: boolean;
    premium: boolean;
    verify: boolean;
    project: any[];
    invoice: any[];
    rol: string;
    state: boolean;
    uid: string;
}

type Action = {
    type: String;
    payload?: any;
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

        case types.disableCompany:
            let newUser: Company[] = state.user;
            for (let index = 0; index < newUser.length; index++) {
                let currentValue: Company = newUser[index];
                if (currentValue.uid === action.payload.uid) {
                    currentValue = action.payload;
                    newUser[index] = currentValue;
                }
            }

            return {
                ...state,
                user: newUser,
            };

        default:
            return state;
    }
};
