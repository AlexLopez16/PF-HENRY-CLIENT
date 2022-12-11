import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export type Role = '' | 'COMPANY_ROL' | 'STUDENT_ROL';

interface appState {
    token: string;
    role: Role;
}

const initialState = {
    token: localStorage.getItem('token'),
    role: localStorage.getItem('role')
} as appState;

export interface LoginFields {
    email: string,
    password: string
}

export interface StudentFields extends LoginFields {
    name: string,
    lastName: string
}

export interface CompanyFields extends LoginFields {
    name: string,
    country: string
}

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (loginFields: LoginFields, thunkAPI) => {
        const response = await axios.post('http://localhost:3001/api/auth', loginFields);
        return response.data;
    }
)

export const companySingUp = createAsyncThunk(
    "user/companySingUp",
    async(companyFields:any, thunkAPI)=>{
    const response = await axios.post(`http://localhost:3001/api/company`,companyFields);
    return response.data
})

export const StudentSingUp = createAsyncThunk(
    "user/studentSignUp",
    async (studentFields: StudentFields, thunkAPI) => {
        const response = await axios.post("http://localhost:3001/api/student", studentFields);
        return response.data
    }
)

const loginSlice = createSlice({
    name: 'user',
    initialState,
     reducers: {

     },
     extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.token = action.payload.token;
            state.role = action.payload.rol;
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('role', action.payload.rol);
        });
        builder.addCase(companySingUp.fulfilled, (state, action) => {
            state.token = action.payload.token;
            state.role = action.payload.rol;
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('role', action.payload.rol);
        })
        builder.addCase(StudentSingUp.fulfilled, (state, action) => {
            state.token = action.payload.token
            state.role = action.payload.rol;
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('role', action.payload.rol);
        })
     }
});

export default loginSlice.reducer;