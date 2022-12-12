import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { studentReducer } from './studentReducer';
import { projectReducer } from './projectReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    student: studentReducer,
    project: projectReducer
})

export type State = ReturnType<typeof rootReducer>