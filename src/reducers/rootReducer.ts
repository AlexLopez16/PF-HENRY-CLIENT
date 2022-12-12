import { combineReducers } from 'redux'
import { studentReducer } from './studentReducer';
import { projectReducers } from './ProjectReducer';
import { companyReducer } from './companyReducer';
import { reducerLogin } from './reducerLogin';
export const rootReducer = combineReducers({
    company:companyReducer,
    student: studentReducer,
    project: projectReducers,
    login: reducerLogin

});
export type State = ReturnType<typeof rootReducer>