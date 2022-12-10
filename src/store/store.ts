// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunk from 'redux-thunk';
import { rootReducer } from '../reducers/rootReducer';
import { configureStore } from '@reduxjs/toolkit'
import studentSlice from '../reducers/StudentSingUp'
import appSlice from '../reducers/appReducer'
import loginSlice  from '../reducers/loginReducer'
import companySlice from '../reducers/companySingUp'


export const store = configureStore({
    reducer: {
        studentSlice,
        appSlice,
        loginSlice,
        companySlice
    }
  })


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch