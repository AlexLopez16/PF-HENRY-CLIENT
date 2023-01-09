import { types } from "../types/types";

interface State {
  data: {},
  admins: {}[],
  user: {}
}

const initialState = {
  data: {},
  admins: [],
  user: {}
};

type Action = {
  type: string;
  payload: {
    data: {};
  };
};

export const adminReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case types.getAdmins: 
      return {
        ...state,
        admins: action.payload
      }
    case types.getInfoAdmin:
      return {
        ...state,
        user: action.payload
      }
    case types.adminGetCharts:
      return {
        ...state,
        data: action.payload,
      }
    default:
      return state;
  }
};
