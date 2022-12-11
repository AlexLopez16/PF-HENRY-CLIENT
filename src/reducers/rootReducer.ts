import { combineReducers } from 'redux'
import { studentReducer } from './studentReducer';
import { projectReducers } from './projectReducer';
import { companyReducer } from './companyReducer';
export const rootReducer = combineReducers({
    company:companyReducer,
    student: studentReducer,
    project: projectReducers

});
export type State = ReturnType<typeof rootReducer>