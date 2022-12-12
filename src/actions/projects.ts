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


export const registerProject = (values: object, token: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await axios.post(`http://localhost:3001/api/project`, values, { headers: { 'user-token': token } });
      dispatch({
        type: types.registerProject,
        payload: res.data,
      });
    } catch (error: any) {
      console.log(error.response.data);
    }
  };
};

// name=proyect&
export const getProjectsFilter = (orderBy, tecnologies, token) => {

  return async (dispatch: Dispatch) => {
    try {

      let tecnologias: string = "";
      tecnologies.forEach((e: string) => tecnologias += e + ",")
      //tranforma el array a string con comas 

      tecnologias = tecnologias.substring(0, tecnologias.length - 1)//si es una palabra saca la coma




      const res = await axios.get(`http://localhost:3001/api/project?tecnologies=${tecnologias}&typeOfOrder=asc`, { headers: { 'user-token': token } })

      dispatch({
        type: types.ProjectsFilter,
        payload: res.data.projects,
      });
    } catch (error) {
      console.log(error);

    }
  }
}
