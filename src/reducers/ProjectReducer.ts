import { types } from "../types/types";

interface State {
  projects: {}[];
  projectsFilter: {}[];
  projectId: {};
}

const initialState = {
  projects: [],
  projectsFilter: [],
  projectId: {},
  category: [],
};

type Action = {
  type: string;
  payload?: any;
};

export const projectReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case types.getProjects:
      return {
        ...state,
        projects: [...action.payload],
      };

    case types.getProjectById:
      return {
        ...state,
        projectId: action.payload,
      };

    case types.newProject:
      return {
        ...state,
        ...action.payload,
      };

    case types.projectsFilter:
      return {
        ...state,
        projectsFilter: [...action.payload],
      };

    case types.getCategory:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};
