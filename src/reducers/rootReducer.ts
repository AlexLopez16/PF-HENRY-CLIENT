import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { studentReducer } from './studentReducer';


import { companyReducer } from './companyReducer';
import { projectReducer } from './ProjectReducer';


export const rootReducer = combineReducers({
    auth: authReducer,
    student: studentReducer,
    project: projectReducer,
    company: companyReducer,
})

export type State = ReturnType<typeof rootReducer>