import { Dispatch } from 'redux'
import axios, { AxiosError } from 'axios'
import { types } from '../types/types';

export const startLogin = (values: object) => {
    return async (dispatch: Dispatch) => {
        try {
            const { data, status } = await axios.post('http://localhost:3001/api/auth', values)
            const { token } = data;
            console.log(status);
            if (status) {
                localStorage.setItem('token', token);
                dispatch(login({ data, status }))
            }
        } catch (error: any) {
            dispatch({
                type: types.authLogin,
                logged: false,
                payload: {
                    status: error.response.status
                }
            })
        }
    }
}

const login = (data: object) => ({
    type: types.authLogin,
    payload: data
})