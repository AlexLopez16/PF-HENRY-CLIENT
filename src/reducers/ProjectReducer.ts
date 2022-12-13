import { types } from "../types/types";

interface State {
    projects: {}[],
    projectsFilter: {}[]

}

const initialState = {
    projects: [],
    projectsFilter: []
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
        case types.registerProject:

            return {
                ...state,
                ...action.payload
            }

        case types.ProjectsFilter:
            return {
                ...state,
                projectsFilter: [...action.payload]
            }
        default:
            return state;
    }

}