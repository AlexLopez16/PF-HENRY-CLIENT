import { types } from "../types/types";

type GraphResponse = {
  students: {
      state: GraphData;
  };
  projects: {
      state: GraphData;
  };
  companies: {
      state: GraphData;
      premium: GraphData;
  };
};

type GraphData = {
  datasets: Dataset[];
  labels: string[];
};

type Dataset = {
  data: number[];
  backgroundColor: string[];
};

interface Admins {
  name: string;
  lastName: string;
  email: string;
  verify: boolean;
  state: boolean;
  uid: string;
}

interface State {
  data: GraphResponse | null;
  admins: Admins[];
  user: Admins | {};
  total4: number;  
}

const initialState: State = {
  data: null,
  admins: [],
  user: {},
  total4: 0
};

type Action = {
  type: string;
  payload: any;
};

export const adminReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case types.getAdmins:
      const { total, admins }: any = action.payload;
      return {
        ...state,
        admins: admins,
        total4: total,
      };
    case types.getInfoAdmin:
      return {
        ...state,
        user: action.payload,
      };
    case types.adminGetCharts:
      let data = action.payload as GraphResponse;

      data.companies.state.datasets[0].backgroundColor = [
        'rgb(255, 255, 1)',
        'rgb(0, 0, 0)',
      ];

      data.companies.premium.datasets[0].backgroundColor = [
        'rgb(255, 255, 1)',
        'rgb(0, 0, 0)',
      ];

      data.students.state.datasets[0].backgroundColor = [
        'rgb(255, 255, 1)',        
        'rgb(0, 0, 0)',
      ];
      
      data.projects.state.datasets[0].backgroundColor = [
        'rgb(255, 255, 1)',
        'rgb(240, 240, 240 )',
        'rgb(0, 0, 0)',
        'rgb(128, 128, 128)',
      ];

      return {
        ...state,
        data: action.payload,
      };
    case types.disableAdmin:
      let users: any[] = state.admins;
      for (let index = 0; index < users?.length; index++) {
        let currentValue: any = users[index];

        if (currentValue.uid === action.payload?.uid) {
          currentValue = action.payload;
          users[index] = currentValue;
        }
      }
      return {
        ...state,
      };
    default:
      return state;
  }
};
