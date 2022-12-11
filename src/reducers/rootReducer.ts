import { combineReducers } from 'redux'
import { studentReducer } from './studentReducer';
import { projectReducers } from './projectReducer';
export const rootReducer = combineReducers({
  
    student: studentReducer,
    project: projectReducers

});
export type State = ReturnType<typeof rootReducer>