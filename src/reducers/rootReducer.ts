import { combineReducers } from 'redux'
import { reducerLogin } from './reducerLogin';

export const rootReducer = combineReducers({
    login: reducerLogin
});