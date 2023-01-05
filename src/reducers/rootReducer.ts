import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { studentReducer } from './studentReducer';

import { companyReducer } from './companyReducer';
import { projectReducer } from './ProjectReducer';
import { errorReducer } from './errorReducer';
import { requestReducer } from './requestReducer';
import { responseReducer } from './responseReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    student: studentReducer,
    project: projectReducer,
    company: companyReducer,
    error: errorReducer,
    request: requestReducer,
    response: responseReducer,
});

export type State = ReturnType<typeof rootReducer>;
