import axios from "axios";
import { Dispatch } from "redux";
import { types } from "../types/types";

export const getProject = (token: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await axios.get("/project", { headers: { 'user-token': token } })

            dispatch({
                type: types.getProjects,
                payload: res.data.projects
            })
        } catch (error: any) {
            console.log(error.res.data);
        }
    }
}

export const getProjectByID = (token: string, id: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await axios.get(`/project/${id}`, { headers: { 'user-token': token } })
            console.log(res);

            dispatch({
                type: types.getProjectById,
                payload: res.data
            })
        } catch (error: any) {
            console.log(error);
        }
    }
}


export const newProject = (data: object, token: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await axios.post('/project', data, { headers: { 'user-token': token } })
            dispatch({
                type: types.newProject,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

// name=proyect&
export const getProjectsFilter = (orderBy, tecnologies, token) => {

    return async (dispatch: Dispatch) => {
        try {
            let tecnologias: string = "";
            tecnologies.forEach((e: string) => tecnologias += e + ",")
            //tranforma el array a string con comas 
            tecnologias = tecnologias.substring(0, tecnologias.length - 1)//si es una palabra saca la coma

            const res = await axios.get(`/project?tecnologies=${tecnologias}&typeOfOrder=asc`, { headers: { 'user-token': token } })

            dispatch({
                type: types.projectsFilter,
                payload: res.data.projects,
            });
        } catch (error) {
            console.log(error);
        }
    }
}
