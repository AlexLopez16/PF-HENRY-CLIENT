import { combineReducers } from 'redux'
import { studentReducer } from './studentReducer';
import { projectReducers } from './ProjectReducer';
import { companyReducer } from './companyReducer';
import { loginReducer } from './loginReducer';
export const rootReducer = combineReducers({
    company:companyReducer,
    student: studentReducer,
    project: projectReducers,
    login: loginReducer

});
export type State = ReturnType<typeof rootReducer>