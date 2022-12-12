import axios from "axios"
import { Dispatch } from "redux"
import { types } from "../types/types"


export const studentRegister = (values: object) => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await axios.post("http://localhost:3001/api/student", values)
            console.log(res.data);
            
            dispatch({
                type: types.studentRegister, 
                payload: res.data
            })
        } catch (error) {
            // console.log(error.response.data);

        }

    }



}