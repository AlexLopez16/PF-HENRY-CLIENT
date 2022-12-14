import { Dispatch } from 'redux'
import axios from 'axios'
import { types } from '../types/types';

export const startLogin = (values: object) => {
    return async (dispatch: Dispatch) => {
        try {
            const { data, status } = await axios.post('/auth', values)
            const { token } = data;
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

export const githubLogin = () => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await axios.get('https://github.com/login/oauth/authorize?client_id=87e69cf79c2019d84894&redirect_uri=http://localhost:3001/api/auth?&scope=user:email')

            console.log(res)

            dispatch({
                type: types.authLoginGit
            })
            
        } catch (error) {
            console.log(error)
        }
    }
}

const login = (data: object) => ({
    type: types.authLogin,
    payload: data
})