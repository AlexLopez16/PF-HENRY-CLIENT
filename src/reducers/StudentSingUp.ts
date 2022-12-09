import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
export interface StudentFields {
    name: string,
    lastName: string,
    email: string
    password: string

}


const initialState: StudentFields = {
    name: "",
    lastName: "",
    email: "",
    password: ""
}

export const StudentSingUp = createAsyncThunk(
    "student/studentSignUp",
    async (studentFields: StudentFields, thunkAPI) => {
        const response = await axios.post("http://localhost:3001/api/student", studentFields);
        return response.data
    }
)

const studentSlice = createSlice({
    name: "student",
    initialState,
    reducers: {

    },
    extraReducers:(builder)=>{
        builder.addCase(StudentSingUp.fulfilled,(state,action)=>{
            state.name= action.payload.name
            state.lastName= action.payload.lastName
            state.email= action.payload.email
            state.password= action.payload.password
            console.log(action.payload);
            
        })
    }
})

export default studentSlice.reducer;