import axios from "axios"
import { Dispatch } from "redux"
import { types } from "../types/types"
import { fileUpload } from '../helpers/fileUpload';


export const studentRegister = (values: object) => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await axios.post('/student', values)
            console.log(res.data);

            dispatch({
                type: types.studentRegister,
                payload: res.data
            })
        } catch (error: any) {
            console.log(error.response.data);
        }
    }
}

export const getStudentInfo = (id: string, token: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await axios.get(`/student/${id}`, { headers: { 'user-token': token } })
            dispatch({
                type: types.studentGetInfo,
                payload: res.data
            })
        } catch (error: any) {
            console.log(error);
        }
    }
}

export const updateStudentInfo = (id: string, token: string, data: object) => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await axios.put(`/student/${id}`, data, { headers: { 'user-token': token } })
            dispatch({
                type: types.studentUpdateInfo,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const updatePhotoStudent = (id: string, token: string, file: any) => {
    return async (dispatch: Dispatch) => {
        try {
            const photoUrl = await fileUpload(file, "users")
            const res = await axios.put(`/student/${id}`, { image: photoUrl }, { headers: { 'user-token': token } })

            dispatch({
                type: types.studentUpdateInfo,
                payload: res.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const searchProject = (name: string, token: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await axios.get(`/student/${name}`, { headers: { 'user-token': token } })

            dispatch({
                type: types.studentSearch,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const addStudentToProject = (id: string, token: string) => {
    return async (dispatch: Dispatch) => {
    
        try {
            console.log("token",token);
            
            const res = await axios.put(`/project/6399ef648e31a155ab06f9fc`,undefined, { headers: { 'user-token': token } });
            console.log(res.data);
            

            dispatch({
                type: types.AddStToPr,
                payload: res.data,
            })
        } catch (error) {
            console.log(error);
        }
    }
};
