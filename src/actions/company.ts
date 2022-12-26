import axios from "axios";
import { Dispatch } from "redux";
import { types } from "../types/types"


export const registerCompany = (values: Object) => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await axios.post(`/company`, values)
            console.log(res)
            dispatch({
                type: types.registerCompany,
                payload: res.data,

            });
        } catch (error) {
            console.log(error)
        }
    }
}

export const acceptStudent=(id:string,idstudent: string)=>{
console.log("client lin23",idstudent);

    return async (dispatch: Dispatch) => {
        try {
            const res = await axios.put(`/project/accept/${id}`, {idstudent})
            console.log(res)
            dispatch({
                type: types.registerCompany,
                payload: res.data,

            });
        } catch (error) {
            console.log(error)
        }
    }
}