import { CallToActionSharp } from '@mui/icons-material';
import { AdminEliminatedProject } from '../actions/Admin';
import { types } from '../types/types';

interface State {
    projects: {}[];
    projectsFilter: {}[];
    projectId: {};
    category: string[];
    myProjectCompany: {}[];
    total: number;
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

        case types.AdminAprovedProject:
            let newProjects: any[] = state.projectsFilter;
            for (let index = 0; index < newProjects.length; index++) {
                let currentValue = newProjects[index];
                if (currentValue.uid === action.payload.uid) {
                    currentValue = action.payload;
                    newProjects[index] = currentValue;
                }
            }

            return {
                ...state,
                user: newProjects,
            };

        case types.AdminEliminatedProject:
            let newState = state.projectsFilter.filter(
                (pr: any) => pr.uid != action.payload.id
            );

            // for (pr in state.projectsFilter) {
            //     if (pr.id === action.payload.id) {
            //         pr = action.payload.info;
            //     }
            // }

            return {
                ...state,
                projectsFilter: newState,
                total: state.total - 1,
            };

        case types.deleteOrInactiveStudent:
            let pr: any;
            for (pr in state.projectsFilter) {
                if (pr.uid === action.payload.uid) {
                    pr = action.payload;
                }
            }

            return {
                ...state,
                projectsFilter: [...state.projectsFilter],
            };

        default:
            return state;
    }
};
