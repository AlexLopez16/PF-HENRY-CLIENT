import axios from 'axios';
import { Dispatch } from 'redux';
import { types } from '../types/types';
// import { Navigate } from 'react-router-dom';
import { fileUpload } from '../helpers/fileUpload';

export const getProject = (token: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await axios.get('/project', {
                headers: { 'user-token': token },
            });

            dispatch({
                type: types.projectsFilter,
                payload: res.data,
            });
        } catch (error: any) {
            console.log(error.res.data);
        }
    };
};

export const getProjectByID = (token: string, id: string) => {
    return async (dispatch: Dispatch) => {
        try {
            // Incio de la request.
            dispatch({
                type: types.requestInProgress,
            });
            const res = await axios.get(`/project/${id}`, {
                headers: { 'user-token': token },
            });

            dispatch({
                type: types.getProjectById,
                payload: res.data,
            });
            // Fin de la request.
            dispatch({
                type: types.requestFinished,
            });
        } catch (error: any) {
            console.log(error);
        }
    };
};

export const newProject = (data: object, token: string) => {
    
    console.log(data);
    
    return async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: types.requestInProgress,
            });
            const res: any = await axios.post('/project', data, {
                headers: { 'user-token': token },
            });
            dispatch({
                type: types.newProject,
                payload: res.data,
            });
            dispatch({
                type: types.requestFinished,
            });
            // Si todo sale bien.
            dispatch({
                type: types.responseFinished,
                payload: res,
            });
        } catch (error: any) {
            dispatch({
                type: types.requestFinished,
            });
            // Guardamos respuesta de la request.
            dispatch({
                type: types.responseFinished,
                payload: error.response,
            });
        }
    };
};

// name=proyect&
export const getProjectsFilter = (
    typeOfOrder?: string | undefined,
    tecnologies?: string[] | undefined,
    token?: string | null,
    name?: string | undefined,
    category?: string[] | undefined,
    stateOfProject?: string[] | undefined,
    limit?: number | undefined,
    init?: number | undefined
) => {
    return async (dispatch: Dispatch) => {
        try {
            // console.log(limit, init);
            dispatch({
                type: types.requestInProgress,
            });
            let query;

            if (name) {
                query = `name=${name}`;
            }

            if (tecnologies) {
                let tecnologias: string = '';
                tecnologies.forEach((e: string) => (tecnologias += e + ','));
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
                let categories: string = '';
                category.forEach((e: string) => (categories += e + ','));
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

            if (limit || init) {
                // console.log(limit, init);
                if (query) {
                    query += `&limit=${limit}&init=${init}`;
                } else {
                    query = `limit=${limit}&init=${init}`;
                }
            }

            let url = `/project`;
            if (query) {
                url += `?${query}`;
            }
            const res = await axios.get(url, {
                headers: { 'user-token': token },
            });
            // console.log(res.data);
            dispatch({
                type: types.projectsFilter,
                payload: res.data,
            });
            dispatch({
                type: types.requestFinished,
            });
        } catch (error: any) {
            console.log(error.response.data.errors[0].msg);
        }
    };
};

export const getCategory = (token: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await axios.get('/project/category', {
                headers: { 'user-token': token },
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

export const getMyProjectsCompany = (token: string, value: any) => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: types.requestInProgress,
        });
        let val;
        if (value) {
            val = `&value=${value}`;
        }
        try {
            // console.log('en la action', token);
            const res = await axios.get(`/company/login?${val}`, {
                headers: { 'user-token': token },
            });
            // console.log('en la action', res.data);
            dispatch({
                type: types.projectsFilter,
                payload: res.data,
            });
            dispatch({
                type: types.requestFinished,
            });
        } catch (error: any) {
            console.log(error.res.data);
        }
    };
};
// Update Images Project
export const updateImagesProject = (id: string, token: string, file: any) => {
    return async (dispatch: Dispatch) => {
        try {
            const photoUrl = await fileUpload(file, 'projects');
            const res = await axios.put(
                `/project/${id}`,
                { image: photoUrl },
                { headers: { 'user-token': token } }
            );

            dispatch({
                type: types.studentUpdateInfo,
                payload: res.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const clearProjects = (obj: any) => {
    // console.log('in clear');
    return {
        type: types.projectsFilter,
        payload: obj,
    };
};

export const Filters = (
    typeOfOrder: string | undefined,
    tecnologies: string[] | undefined,
    name: string | undefined,
    category: string[] | undefined,
    stateOfProject: string[] | undefined
) => {
    let obj = { typeOfOrder, tecnologies, name, category, stateOfProject };

    return {
        type: types.filters,
        payload: obj,
    };
};

export const getAllProject = (
    typeOfOrder?: string | undefined,
    tecnologies?: string[] | undefined,
    token?: string | null,
    name?: string | undefined,
    category?: string[] | undefined,
    stateOfProject?: string[] | undefined,
    limit?: number | undefined,
    init?: number | undefined
) => {
    return async (dispatch: Dispatch) => {
        try {
            // console.log(limit, init);
            dispatch({
                type: types.requestInProgress,
            });
            let query;

            if (name) {
                query = `name=${name}`;
            }

            if (tecnologies) {
                let tecnologias: string = '';
                tecnologies.forEach((e: string) => (tecnologias += e + ','));
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
                let categories: string = '';
                category.forEach((e: string) => (categories += e + ','));
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

            if (limit || init) {
                // console.log(limit, init);
                if (query) {
                    query += `&limit=${limit}&init=${init}`;
                } else {
                    query = `limit=${limit}&init=${init}`;
                }
            }

            let url = `/project/all`;
            if (query) {
                url += `?${query}`;
            }
            const res = await axios.get(url, {
                headers: { 'user-token': token },
            });
            console.log(res.data);
            // console.log(res.data);
            dispatch({
                type: types.projectsFilter,
                payload: res.data,
            });
            dispatch({
                type: types.requestFinished,
            });
        } catch (error: any) {
            console.log(error.response.data.errors[0].msg);
        }
    };
};

export const clearProject = () => {
    return { type: types.clearProject };
};

export const changeStateOfProject = (id: string, token: string, state: string) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: types.requestInProgress,
            })
            const res = await axios.put(
                `/project/edit/${id}`,
                { stateOfProject: `${state}` },
                { headers: { 'user-token': token } }
            );
            dispatch({
                type: types.getProjectById,
                payload: res.data,
            });
            dispatch({
                type: types.requestFinished,
            })
            dispatch({
                type: types.responseFinished,
                payload: res,
            })
        } catch (error: any) {
            console.log(error);
            dispatch({
                type: types.requestFinished,
            })
            dispatch({
                type: types.responseFinished,
                payload: error.response,
            })
        }
    };
};