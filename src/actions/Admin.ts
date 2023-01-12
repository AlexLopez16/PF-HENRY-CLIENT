import axios from 'axios';
import { Dispatch } from 'redux';
import { types } from '../types/types';

export const getAdmins = (
    token: string | null,
    limit: number,
    init: number
) => {
    return async (dispatch: Dispatch) => {
        try {
            const { data } = await axios.get('/admin/getAdmin', {
                headers: { 'user-token': token },
                params: { limit, init },
            });
            dispatch({
                type: types.getAdmins,
                payload: data,
            });
        } catch (error: any) {
            console.log(error);
        }
    };
};

export const getInfoAdmin = (id: string, token: string | null) => {
    return async (dispatch: Dispatch) => {
        try {
            const { data } = await axios.get(`/admin/admin/${id}`, {
                headers: { 'user-token': token },
            });
            dispatch({
                type: types.getInfoAdmin,
                payload: data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const deleteuser = (token: string | null, selectID: string) => {
    let id = selectID;
    return async (dispatch: Dispatch) => {
        try {
            const res = await axios.put(
                '/admin/stateuser',
                { id },
                {
                    headers: { 'user-token': token },
                }
            );

            dispatch({
                type: types.deleteOrInactiveStudent,
                payload: res.data,
            });
            dispatch({
                type: types.responseFinished,
                payload: res,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const AprovedProject = (token: string | null, selectID: string) => {
    let id = selectID;
    return async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: types.requestInProgress,
            });
            const res = await axios.put(
                '/admin/aprovedproject',
                { id },
                {
                    headers: { 'user-token': token },
                }
            );
            dispatch({
                type: types.AdminAprovedProject,
                payload: res.data,
            });

            dispatch({
                type: types.requestFinished,
            });
        } catch (error: any) {
            dispatch({
                type: types.requestFinished,
            });
            dispatch({
                type: types.responseFinished,
                payload: error.response,
            });
        }
    };
};

export const AdminEliminatedProject = (
    idPrj: string | null,
    token: string,
    values: string
) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: types.requestInProgress,
            });
            const res = await axios.post(
                '/admin/eliminatedproject',
                { idPrj, values },
                {
                    headers: { 'user-token': token },
                }
            );

            dispatch({
                type: types.AdminEliminatedProject,
                payload: res.data,
            });
            dispatch({
                type: types.requestFinished,
            });
        } catch (error: any) {
            dispatch({
                type: types.requestFinished,
            });
            dispatch({
                type: types.responseFinished,
                payload: error.response,
            });
        }
    };
};

export const getCharts = (token: string | null) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: types.requestInProgress,
            });
            const res = await axios.get('/admin/charts', {
                headers: { 'user-token': token },
            });
            dispatch({
                type: types.adminGetCharts,
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
        } catch (error) {
            console.log(error);
        }
    };
};

export const acceptCompany = (
    token: string | null,
    id: string,
    acept: boolean
) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: types.requestInProgress,
            });
            const res = await axios.post(
                '/admin/verifyCompany',
                { id, acept },
                {
                    headers: { 'user-token': token },
                }
            );
            console.log(res.data);

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

export const rejectCompany = (
    token: string | null,
    id: string,
    acept: boolean
) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: types.requestInProgress,
            });
            const res = await axios.post(
                '/admin/verifyCompany',
                { id, acept },
                {
                    headers: { 'user-token': token },
                }
            );

            dispatch({ type: types.adminEliminatedCompany, payload: res });

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

const login = (data: object) => ({
    type: types.authLogin,
    payload: data,
});

export const registerAdmin = (values: object, success: () => void) => {
    return async (dispatch: Dispatch) => {
        try {
            const res: object | any = await axios.post('/admin', values);
            const { data, status } = res;
            const { token, id, rol } = data;
            dispatch({
                type: types.registerAdmin,
                payload: data,
            });
            dispatch({
                type: types.responseFinished,
                payload: data,
            });

            success();
        } catch (error: object | any) {
            dispatch({
                type: types.responseFinished,
                payload: error.response,
            });
            console.log(error);
        }
    };
};

export const getAllReviews = (
    token: string | null,
    limit: number | any,
    init: number | any,
    name: string | any
) => {
    return async (dispatch: Dispatch) => {
        let query;
        if (name) {
            query = `name=${name}`;
        }
        if (limit || init) {
            if (query) {
                query += `&limit=${limit}&init=${init}`;
            } else {
                query = `limit=${limit}&init=${init}`;
            }
        }
        try {
            dispatch({
                type: types.requestInProgress,
            });
            const { data } = await axios.get(`/admin/getreviews?${query}`, {
                headers: { 'user-token': token },
            });

            dispatch({
                type: types.getAllReviews,
                payload: data,
            });
            dispatch({
                type: types.requestFinished,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const cancelReview = (
    idrev: string | null,
    token: string,
    values: string
) => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await axios.put(
                '/admin/deletereviews',
                { idrev, values },
                { headers: { 'user-token': token } }
            );

            dispatch({
                type: types.AdminEliminatedReview,
                // payload: res.data,
            });
            dispatch({
                type: types.responseFinished,
                payload: res,
            });
        } catch (error: object | any) {
            dispatch({
                type: types.responseFinished,
                payload: error.response,
            });
            console.log(error);
        }
    };
};

export const clearReviews = () => {
    return {
        type: types.getAllProjects,
        payload: { getreviews: [], total: 0 },
    };
};

export const filterReviews = (search: string | any) => {
    return {
        type: types.filterReview,
        payload: search,
    };
};

export const disableAdmin = (token: string | null, id: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const { data } = await axios.put(
                `/admin/stateuser`,
                { id },
                { headers: { 'user-token': token } }
            );

            dispatch({
                type: types.disableAdmin,
                payload: data
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const setStateMultiple = (token: string | null, selectID: string[]) => {
    let ids = selectID;
    return async (dispatch: Dispatch) => {
        try {
            const res = await axios.put(
                '/admin/deletemultiple',
                { ids },
                {
                    headers: { 'user-token': token },
                }
            );

            dispatch({
                type: types.responseFinished,
                payload: res,
            });
            dispatch({
                type: types.setState,
                payload: res.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const reclutamientoInProject = (
    token: string | null,
    selectID: string[]
) => {
    let ids = selectID;
    return async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: types.requestInProgress,
            });
            const res = await axios.put(
                '/admin//setEnReclutamiento',
                { ids },
                {
                    headers: { 'user-token': token },
                }
            );

            dispatch({
                type: types.setReclutamientoinProject,
                // payload: res.data,
            });

            dispatch({
                type: types.requestFinished,
            });
        } catch (error: any) {
            dispatch({
                type: types.requestFinished,
            });
            dispatch({
                type: types.responseFinished,
                payload: error.response,
            });
        }
    };
};

export const clearAdmin = () => {
    return {
        type: types.getAdmins,
        payload: { total: 0, admin: [] },
    };
};
