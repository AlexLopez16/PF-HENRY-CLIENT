import { type } from "os";
import { types } from "../types/types";

interface State {
  projects: {}[]
  projectsFilter: {}[]
  projectId: {}
  postulated: {}[]
  accepts: {}[]
}

const initialState = {
  projects: [],
  projectsFilter: [],
  projectId: {},
  category: [],
  myProjectCompany: [],
  postulated: [],
  accepts: [],
  total: 0,
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
      console.log(action.payload.total);
      return {
        ...state,
        projectsFilter: [...action.payload.projects],
        total: action.payload.total,
      };

    case types.getCategory:
      return {
        ...state,
        category: action.payload,
      };

    case types.getMyProjectCompany:
      return {
        ...state,
        myProjectCompany: action.payload,
      };



    case types.postulated:
      const { students } = action.payload
      return {
        ...state,
        postulated: [...state.postulated, students]
      }
    case types.acceptStudent:
      return {
        ...state,
        projects: action.payload
      }

    default:
      return state;
  }
};
