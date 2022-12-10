import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
export interface StudentFields {
   
    project:string[],
}

const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ29tbnBhbnkyIiwiaWQiOiI2MzkyNzU3NGU3M2RkNjVmMzkwNDA4NTciLCJpYXQiOjE2NzA2ODYyODAsImV4cCI6MTY3MDY5MzQ4MH0.ujUJylsmA4v32mfqnC5PmRyjaKYGxQbgSZ7h5rR3NMk"

const initialState: StudentFields = {
   project:[]
}

export const getProjects = createAsyncThunk(
    "proyectos/getProjects",
    async () => {
        const response = await axios.get("http://localhost:3001/api/project",{ headers: {'user-token':token}})
        return response.data.projects
        
    }
)

const projectSlice = createSlice({
    name: "proyectos",
    initialState,
    reducers: {

    },
    extraReducers:(builder)=>{
        builder.addCase(getProjects.fulfilled,(state,action)=>{
          state.project=action.payload
            console.log(action.payload);
            
        })
    }
})

export default projectSlice.reducer;