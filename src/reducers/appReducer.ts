import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        name: 'test',
        role: 'Student',

    }
}


const appSlice = createSlice({
    name: 'app',
    initialState,
     reducers: {
        setUser: (state, action) => {
            return { ...state, user: action.payload }
        }
     }
});


export const {setUser} = appSlice.actions;
export default appSlice.reducer;