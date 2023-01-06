import { types } from "../types/types";

interface State {
  data: {};
}

const initialState = {
  data: {},
};

type Action = {
  type: string;
  payload: {
    data: {};
  };
};

export const adminReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case types.adminGetCharts:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};
