import axios from "axios";
import { Dispatch } from "redux";
import { types } from "../types/types";

export const getProject = (token: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await axios.get("/project", { headers: { 'user-token': token } })
            console.log(res);

            dispatch({
                type: types.getProjects,
                payload: res.data.projects
            })
        } catch (error: any) {
            console.log(error.res.data);
        }
    }
}

export const newProject = (data: object, token: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await axios.post('/project', data, { headers: { 'user-token': token } })
            console.log(res.data)
            dispatch({
                type: types.newProject,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
  };
};