import { types } from '../types/types';

interface State {
    projects: {}[];
    projectsFilter: {}[];
    projectId: {};
    filters: {
        typeOfOrder: string;
        tecnologies: string[];
        name: string;
        category: string[];
        stateOfProject: string[];
    };
}

const initialState = {
    projects: [],
    projectsFilter: [],
    projectId: {},
    category: [],
    myProjectCompany: [],
    total: 0,
    filters: {
        typeOfOrder: '',
        tecnologies: [],
        name: '',
        category: [],
        stateOfProject: [],
    },
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

        case types.clearProject:
            return {
                projectsFilter: [],
                total: 0,
            };

        default:
            return state;
    }
};
