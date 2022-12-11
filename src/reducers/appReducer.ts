import { createSlice } from "@reduxjs/toolkit";

export type Role = '' | 'COMPANY_ROL' | 'STUDENT_ROL';

interface appState {
    user: {
        token: string;
        role: Role;
    }
}

const initialState = {
    user: {
        token: localStorage.getItem('token'),
        role: ''
    }
} as appState;


const appSlice = createSlice({
    name: 'app',
    initialState,
     reducers: {
        setUser: (state, action) => {
            const user = { ...state.user };
            user.token = action.payload.token;
            user.role = action.payload.rol;

            localStorage.setItem('token', user.token);            

            return { ...state, user };
        }
     }
});


export const {setUser} = appSlice.actions;
export default appSlice.reducer;