import axios from "axios";
import { Dispatch } from "redux";
import { types } from "../types/types";
import { fileUpload } from '../helpers/fileUpload';


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
            const res: any = await axios.post("/project", data, {
                headers: { "user-token": token },
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
    typeOfOrder: string | undefined,
    tecnologies: string[] | undefined,
    token: string | null,
    name: string | undefined,
    category: string[] | undefined,
    stateOfProject: string[] | undefined,
    limit:number|undefined,
    init:number|undefined
) => {
    return async (dispatch: Dispatch) => {
        try {
            console.log(limit,init)
            let query;

            if (name) {
                query = `name=${name}`;
            }

            if (tecnologies) {
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

            if(limit||init){
                console.log(limit,init)
                if(query){
                    query+=`&limit=${limit}&init=${init}`
                }
                else{
                    query=`limit=${limit}&init=${init}`
                }
            }

            let url = `/project`;
            if (query) {
                url += `?${query}`;
            }
            const res = await axios.get(url, {
                headers: { "user-token": token },
            });
            console.log(res.data)
            dispatch({
                type: types.projectsFilter,
                payload: res.data,
            });
           
        } catch (error: any) {
            console.log(error.response.data.errors[0].msg);
            if (error.response.status === 401) {
                dispatch({
                    type: types.clearAuthLogin,
                    payload: error.response.status,
                });
            }
        }
    };
};

export const getCategory = (token: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await axios.get("/project/category", {
                headers: { "user-token": token },
            });
            dispatch({
                type: types.getCategory,
                payload: res.data,
            });
        } catch (error: any) {
            console.log(error.res.data);
        }
    };
};

export const getMyProjectsCompany = (token: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await axios.get("/company/login", {
                headers: { "user-token": token },
            });

            dispatch({
                type: types.getMyProjectCompany,
                payload: res.data,
            });
        } catch (error: any) {
            console.log(error.res.data);
        }
    };
}
// Update Images Project
export const updateImagesProject = (id: string, token: string, file: any) => {
    return async (dispatch: Dispatch) => {
        try {
            const photoUrl = await fileUpload(file, "projects")
            const res = await axios.put(`/project/${id}`, { image: photoUrl }, { headers: { 'user-token': token } })

            dispatch({
                type: types.studentUpdateInfo,
                payload: res.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const postulatedProject = (id:string,token:string)=>{
    return async (dispatch: Dispatch) => {
        try {
            const res = await axios.get(`/project/${id}`,{ headers: { 'user-token': token } })

            dispatch({
                type: types.postulated,
                payload: res.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const getAcceptstudent = (id:string,token:string)=>{
    return async (dispatch: Dispatch) => {
        try {
            const res = await axios.get(`/project/accept/${id}`,{ headers: { 'user-token': token } })

            dispatch({
                type: types.postulated,
                payload: res.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

