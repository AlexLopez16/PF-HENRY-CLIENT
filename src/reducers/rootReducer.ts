import { combineReducers } from 'redux'
import { companyReducer } from './companyReducer';

export const rootReducer = combineReducers({
    // StudentSingUp,
    // appSlice,
    // loginReducer,
    // companySingUp,
    // project: ProjectReducer
company:companyReducer 
});
export type State=ReturnType<typeof rootReducer>