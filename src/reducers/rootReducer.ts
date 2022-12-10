import { combineReducers } from 'redux'
import appSlice from './appReducer';
import loginReducer from "./loginReducer";
import StudentSingUp from './StudentSingUp'
import companySingUp from './companySingUp'
import ProjectReducer from './ProjectReducer';

export const rootReducer = combineReducers({
    StudentSingUp,
    appSlice,
    loginReducer,
    companySingUp,
    project: ProjectReducer

});
export type State=ReturnType<typeof rootReducer>