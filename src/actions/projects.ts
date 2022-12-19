import axios from 'axios';
import { Dispatch } from 'redux';
import { types } from '../types/types';

export const getProject = (token: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await axios.get("/project", {
        headers: { "user-token": token },
      });

      dispatch({
        type: types.getProjects,
        payload: res.data.projects,
      });
    } catch (error: any) {
      console.log(error.res.data);
    }
  };
};

export const getProjectByID = (token: string, id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await axios.get(`/project/${id}`, {
        headers: { "user-token": token },
      });
      console.log(res);

      dispatch({
        type: types.getProjectById,
        payload: res.data,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
};

export const newProject = (data: object, token: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const res: any = await axios.post('/project', data, {
                headers: { 'user-token': token },
            });
            dispatch({
                type: types.newProject,
                payload: res.data,
            });
        } catch (error: any) {
            dispatch({
                type: types.showError,
                payload: error.response,
            });
        }
    };
};

// name=proyect&
export const getProjectsFilter = (
  typeOfOrder: string|undefined,
  tecnologies: string[]|undefined,
  token: String|null,
  name: string|undefined,
  category: string[]|undefined,
  stateOfProject: string[]|undefined
) => {
  return async (dispatch: Dispatch) => {
    try {
      let query;

      if (name) {
        query = `name=${name}`;
      }

      if (tecnologies) {
        console.log(tecnologies)
        let tecnologias: string = "";
        tecnologies.forEach((e: string) => (tecnologias += e + ","));
        //tranforma el array a string con comas
        tecnologias = tecnologias.substring(0, tecnologias.length - 1); //si es una palabra saca la coma
        if (query) {
          query += `&tecnologies=${tecnologias}`;
        } else {
          query = `tecnologies=${tecnologias}`;
        }
      }

      if (typeOfOrder) {
        if (query) {
          query += `&typeOfOrder=${typeOfOrder}&orderBy=participants`;
        } else {
          query = `typeOfOrder=${typeOfOrder}&orderBy=participants`;
        }
      }
      if (category) {
        let categories: string = "";
        category.forEach((e: string) => (categories += e + ","));
        //tranforma el array a string con comas
        categories = categories.substring(0, categories.length - 1); //si es una palabra saca la coma
        if (query) {
          query += `&categories=${categories}`;
        } else {
          query = `categories=${categories}`;
        }
      }
      if (stateOfProject) {
        if (query) {
          query += `&stateProject=${stateOfProject}`;
        } else {
          query = `stateProject=${stateOfProject}`;
        }
      }

      let url = `/project`;
      if (query){
        url += `?${query}`;
      }
      const res = await axios.get(url, {
        headers: { "user-token": token },
      });

      dispatch({
        type: types.projectsFilter,
        payload: res.data.projects,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
