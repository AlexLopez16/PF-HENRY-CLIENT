
import { types } from "../types/types";

interface State {
    projects: {}[]
    projectsFilter: {}[]
    projectId: {}
    postulated: {}[]
}

const initialState = {
    projects: [],
    projectsFilter: [],
    projectId: {},
    postulated: [],
}

type Action = {
    type: string,
    payload?: any
}

export const projectReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case types.getProjects:

            return {
                ...state,
                projects: [...action.payload]
            }

        case types.getProjectById:
            return {
                ...state,
                projectId: action.payload
            }

        case types.newProject:

            return {
                ...state,
                ...action.payload
            }

        case types.projectsFilter:


            return {
                ...state,
                projectsFilter: [...action.payload]
            }
        case types.postulated:
            const {students}=action.payload
            
            return {
                ...state,
                postulated: [...state.postulated, students]
            }
        default:
            return state;
    }

}