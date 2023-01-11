import { types } from "../types/types";

interface Admins {
  name: string,
  lastName: string,
  email: string,
  verify: boolean,
  state: boolean,
  uid: string,
}

interface State {
  data: object,
  admins: Admins[],
  user: object,
  total4: number
}

const initialState = {
  data: {},
  admins: [],
  user: {},
  total4: 0
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
    const { total, admins }: any = action.payload;
      return {
        ...state,
        admins: admins,
        total4: total
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
