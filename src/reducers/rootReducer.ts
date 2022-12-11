import { combineReducers } from 'redux'
import { authReducer } from './authReducer'

export const rootReducer = combineReducers({
    auth: authReducer,
})

export type State = ReturnType<typeof rootReducer>