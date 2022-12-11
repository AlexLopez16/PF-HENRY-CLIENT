import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"




export interface ProjectFields {
   
    project:string[],
    name: string,
    description: string,
    participants: Number,
    requeriments: string



}



const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ29tbnBhbnkyIiwiaWQiOiI2MzkyNzU3NGU3M2RkNjVmMzkwNDA4NTciLCJpYXQiOjE2NzA2ODYyODAsImV4cCI6MTY3MDY5MzQ4MH0.ujUJylsmA4v32mfqnC5PmRyjaKYGxQbgSZ7h5rR3NMk"

const initialState: ProjectFields = {


   project:[],
   name: "",
   description: "",
   participants: 0,
   requeriments: ""
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
           
            
        }),
    
   
        builder.addCase( postProjects .fulfilled,(state,action)=>{
         state.name= action.payload.name;
         state.description= action.payload.lastName;
         state.participants= action.payload.email;
         state.requeriments= action.payload.password;
 
        })},


})





export const postProjects = createAsyncThunk(
    "proyetos/postProjects",
    async (projectFields:ProjectFields,thunkAPI) => {
        const response = await axios.post("http://localhost:3001/api/project",{name,description,participants,requirements},{ headers: {'user-token':token}})
       return response.data})

     
export default projectSlice.reducer;