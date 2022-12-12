import axios from "axios";
import { Dispatch } from "redux";
import { types } from "../types/types";

export const getProject = (token: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await axios.get("http://localhost:3001/api/project", {
        headers: { "user-token": token },
      });
      console.log(res);

      dispatch({
        type: types.getProjects,
        payload: res.data.projects,
      });
    } catch (error: any) {
      console.log(error.res.data);
    }
  };
};


export const registerProject = (values:object, token:string) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await axios.post(`http://localhost:3001/api/project`,values,{ headers: {'user-token':token}});
      console.log(res.data);
      dispatch({
        type: types.registerProject,
        payload: res.data,
      });
    } catch (error:any) {
      console.log(error.response.data);
    }
  };
};