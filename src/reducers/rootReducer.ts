import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { studentReducer } from './studentReducer';
import { adminReducer } from './adminReducer';
import { companyReducer } from './companyReducer';
import { projectReducer } from './ProjectReducer';
import { errorReducer } from './errorReducer';
import { requestReducer } from './requestReducer';
import { responseReducer } from './responseReducer';
import { reviewReducer } from './reviewReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    student: studentReducer,
    project: projectReducer,
    company: companyReducer,
    error: errorReducer,
    request: requestReducer,
    response: responseReducer,
    admin: adminReducer,
    review:reviewReducer
});

export type State = ReturnType<typeof rootReducer>;
