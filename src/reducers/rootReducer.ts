import { combineReducers } from 'redux';
import appSlice from './appReducer';
import loginReducer from "./loginReducer";


export const rootReducer = combineReducers({
    appSlice,
    loginReducer
})

