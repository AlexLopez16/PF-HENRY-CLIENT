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

export const acceptStudent=()=>{

    
}