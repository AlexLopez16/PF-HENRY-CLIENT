import { types } from "../types/types";

interface State {
  user: object
}
const initialState = {
  user: [],
};

type Action = {
  type: String;
  payload?: {}
};

export const companyReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case types.registerCompany:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
