import { types } from '../types/types';

interface State {
    reviews: object[];
    total2: number;
}
const initialState = {
    reviews: [],
    total2: 0,
};

type Action = {
    type: String;
    payload?: {};
};

export const reviewReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case types.getAllReviews:
            return {
                ...state,
                reviews:action.payload,
            };
        default:
            return state;
    }
};
