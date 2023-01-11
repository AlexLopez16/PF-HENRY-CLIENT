import { types } from '../types/types';

interface State {
    reviews: object[];
    total3: number;
    filterReview: string | any;
}
const initialState = {
    reviews: [],
    total3: 0,
    filterReview: undefined,
};

type Action = {
    type: String;
    payload?: {};
};

export const reviewReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case types.getAllReviews:
            const { getreviews, total }: Object | any = action.payload;
            return {
                ...state,
                reviews: getreviews,
                total3: total,
            };
        case types.filterReview:
            return {
                ...state,
                filterReview: action.payload,
            };

        default:
            return state;
    }
};
