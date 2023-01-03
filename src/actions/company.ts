import axios from 'axios';
import { Dispatch } from 'redux';
import { types } from '../types/types';
import { fileUpload } from '../helpers/fileUpload';
// import { useNavigate } from 'react-router-dom';

export const registerCompany = (values: Object) => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await axios.post(`/company`, values);
            // console.log(res);
            dispatch({
                type: types.registerCompany,
                payload: res.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const acceptStudent = (id: string | any, studentId: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await axios.put(`/project/accept/${id}`, { studentId });
            dispatch({
                type: types.getProjectById,
                payload: res.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};
export const companyGetInfo = (id: string, token: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await axios.get(`/company/${id}`, {
                headers: { 'user-token': token },
            });
            dispatch({
                type: types.companyGetInfo,
                payload: res.data,
            });
        } catch (error: any) {
            console.log(error);
        }
    };
};

export const getCompany = (token: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await axios.get(`/company/`, {
                headers: { 'user-token': token },
            });
            dispatch({
                type: types.companyGetList,
                payload: res.data,
            });
        } catch (error: any) {
            console.log(error);
        }
    };
};

export const CompanyUpdateInfo = (id: string, token: string, data: object) => {
    return async (dispatch: Dispatch) => {
        try {
            // console.log(data)
           
            const res = await axios.put(`/company/${id}`, {data}, {
                headers: { 'user-token': token },
            }); 
            dispatch({
                type: types.companyUpdateInfo,
                payload: res.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const updatePhotoCompany = (id: string, token: string, file: any) => {
    return async (dispatch: Dispatch) => {
        try {
            const photoUrl = await fileUpload(file, 'users');
            const res = await axios.put(
                `/company/${id}`,
                { image: photoUrl },
                { headers: { 'user-token': token } }
            );

            dispatch({
                type: types.companyUpdateInfo,
                payload: res.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const DeleteStudent = (id: string | any, studentId: string) => {
    console.log(id);

    return async (dispatch: Dispatch) => {
        try {
            const res = await axios.put(`/project/denied/${id}`, { studentId });
            dispatch({
                type: types.getProjectById,
                payload: res.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const disableCompany = (id: string | any, idCompany: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await axios.put(`/company/${id}`, { idCompany });
            dispatch({
                type: types.disableCompany,
                payload: res.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};
