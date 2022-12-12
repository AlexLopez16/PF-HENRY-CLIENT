import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface CompanyFields {
  name:String
  email: String;
 password: String;
country:String
}

const initialState = {
  name:"",
  email: "",
 password: "",
country:"" 
};

export const companySingUp = createAsyncThunk(
  "company/companySingUp",
  async(companyFields:CompanyFields,thunkAPI)=>{
const response = await axios.post(`http://localhost:3001/api/company`,companyFields);
return response.data


  }
)
const companySlice = createSlice({
  name:"company",
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(companySingUp.fulfilled,(state,action)=>{
      state.name = action.payload.name
      state.email = action.payload.email
      state.password = action.payload.password
      state.country = action.payload.country
      console.log(action.payload)
    })
  }
})


export default companySlice.reducer;