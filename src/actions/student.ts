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
