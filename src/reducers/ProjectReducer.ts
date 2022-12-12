import { types } from "../types/types";


interface State {
  projects:object[]

}

const initialState = {
    projects:[]
}


type Action = {
    type: string,
    payload: []

}

export const projectReducers = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case types.getProjects:
            
            return {
                ...state,
                projects:[...action.payload]
            }
        case types.registerProject:

        return{
            ...state,
            ...action.payload
        }
        default:
            return state;
    }

}