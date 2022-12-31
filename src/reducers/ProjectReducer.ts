import { types } from '../types/types';

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
    myProjectCompany: [],
    total: 0,
    filters: {},
   
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
            console.log(action.payload.projects);
            return {
                ...state,
                projectsFilter: action.payload.projects,
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
                myProjectCompany: action.payload.projects,
                total: action.payload.total,
            };

        case types.filters:
            return {
                ...state,
                filters: action.payload,
            };

        default:
            return state;
    }
};
