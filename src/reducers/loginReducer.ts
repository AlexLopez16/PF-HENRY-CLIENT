import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    token: ''    
}

export interface LoginFields {
    email: string,
    password: string
}

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (loginFields: LoginFields, thunkAPI) => {
        const response = await axios.post('http://localhost:3001/api/auth', loginFields);
        return response.data;
    }
)

const loginSlice = createSlice({
    name: 'user',
    initialState,
     reducers: {
        setUser: (state, action) => {
            return { ...state, user: action.payload }
        }
     },
     extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.token = action.payload.token;
            console.log(state.token);
        });
     }
});

export const {setUser} = loginSlice.actions;
export default loginSlice.reducer;