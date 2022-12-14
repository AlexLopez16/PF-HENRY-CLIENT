import axios from "axios";
import { Dispatch } from "redux";
import {types} from "../types/types";

export const loginUser =  (loginFields: any) => {
    return async function(dispatch:Dispatch) {
        const response = await axios.post('http://localhost:3001/api/auth', loginFields)
        return dispatch({type: types.login, payload: response.data})
    }
}

