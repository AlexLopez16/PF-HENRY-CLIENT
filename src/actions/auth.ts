import { Dispatch } from 'redux';
import axios from 'axios';
import { types } from '../types/types';

/**
 * By Sciangula Hugo.
 * NOTA: con infoToken() si tenemos un token valido en el local storage, vamos a mantener la sesion con ese token.
 */

export const validaToken = (token: string) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: types.requestInProgress,
            });
            const { data, status } = await axios.get('/token', {
                headers: { 'user-token': token },
            });
            console.log(data);
            const { id, rol } = data;
            if (status) {
                // console.log(status);
                // console.log(rol);
                localStorage.setItem('token', token);
                dispatch(login({ data, status, id, rol }));
            }
            dispatch({
                type: types.requestFinished,
            });
        } catch (error: any) {
            // Cerramos sesion si el usuario no tiene un token valido.
            dispatch(logout());
            dispatch({
                type: types.requestFinished,
            });
        }
    };
};

/**
 * By Sciangula Hugo.
 * NOTA: con reSendEmail() permito al usuario modificar su correo electronico.
 */

export const reSendEmail = (token: string | any, email: string | any) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: types.requestInProgress,
            });
            const { data } = await axios.put(
                '/account/confirm/resendemail',
                { email },
                {
                    headers: { 'user-token': token },
                }
            );
            dispatch({
                type: types.requestFinished,
            });
            console.log(data);
        } catch (error: any) {
            console.log('holaa', error);
            dispatch({
                type: types.requestFinished,
            });
        }
    };
};

export const startLogin = (values: object) => {
    return async (dispatch: Dispatch) => {
        try {
            const { data, status } = await axios.post('/auth', values);
            const { token, id, rol } = data;
            console.log(data);
            if (status) {
                localStorage.setItem('token', token);
                dispatch(login({ data, status, id, rol }));
            }
        } catch (error: any) {
            dispatch({
                type: types.authLogin,
                logged: false,
                payload: {
                    status: error.response.status,
                },
            });
        }
    };
};
export const githubLogin = ({ id, rol, token }: string | any) => {
    return login({ data: { id, rol, token } });
};

export const gmailLogin = (tok: string, userType?: string) => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: types.requestInProgress,
        });
        try {
            const res = await axios.post('/auth', {
                from: 'gmail',
                tok,
                userType,
            });
            const { token, id, rol } = res.data;
            let data = res.data;
            let status = res.status;
            if (status) {
                localStorage.setItem('token', token);
                dispatch(login({ data, status, token, id, rol }));
            }
        } catch (error: any) {
            dispatch({
                type: types.requestFinished,
            });
            dispatch({
                type: types.authLogin,
                logged: false,
                payload: {
                    status: error.response.status,
                },
            });
        }
    };
};

const login = (data: object) => ({
    type: types.authLogin,
    payload: data,
});

export const forgotPassword = (email: string) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: types.requestInProgress,
            });
            const res = await axios.get(`/recover/password?email=${email}`);

            dispatch({
                type: types.requestFinished,
            });
        } catch (error: any) {
            // console.log(error);
            dispatch({
                type: types.requestFinished,
            });
        }
    };
};

export const recoverPassword = (password: string, token: string | any) => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: types.requestInProgress,
        });
        try {
            const res: any = await axios.put(
                `/recover/password`,
                { password: password },
                { headers: { 'user-token': token } }
            );
            dispatch({
                type: types.requestFinished,
                payload: res,
            });
            // console.log(res.data);
        } catch (error: any) {
            // console.log(error);
            dispatch({
                type: types.requestFinished,
                payload: error.response,
            });
        }
    };
};
export const logout = () => ({
    type: types.clearAuthLogin,
});
