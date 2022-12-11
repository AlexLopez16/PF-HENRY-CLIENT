
import { types } from "../types/types";


interface State {
  projects:{}[]

}

const initialState = {
    projects:[]
}


type Action = {
    type: string,
    payload?: []

}

export const projectReducers = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case types.getProjects:
            
            return {
                ...state,
                projects:[...action.payload]
            }

        default:
            return state;
    }
}