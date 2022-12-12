import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { studentReducer } from './studentReducer';
import { projectReducer } from './projectReducer';
import { companyReducer } from './companyReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    student: studentReducer,
    project: projectReducer,
    company: companyReducer,
})

export type State = ReturnType<typeof rootReducer>