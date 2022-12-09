import { combineReducers } from 'redux'
import appSlice from './appReducer';
import loginReducer from "./loginReducer";
import StudentSingUp  from './StudentSingUp'
import companySingUp from './companySingUp'

export const rootReducer = combineReducers({
    StudentSingUp,
    appSlice,
    loginReducer,
    companySingUp
});
