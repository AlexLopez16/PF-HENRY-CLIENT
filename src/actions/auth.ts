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
            const { id, rol, state } = data;
            if (status) {
                localStorage.setItem('token', token);
                dispatch(login({ data, status, id, rol, userState: state }));
            }
            dispatch({
                type: types.requestFinished,
            });
        } catch (error: any) {
            if (
                error.response.data.errors[0].msg ===
                'Tu cuenta ha sido inactivada, por favor llena el formulario de contactanos para darte respuesta'
            ) {
                dispatch(gitHubInactivateLogOut());
                dispatch({
                    type: types.requestFinished,
                });
                dispatch({
                    type: types.responseFinished,
                    payload: error.response,
                });
            } else {
                dispatch(logout());
                dispatch({
                    type: types.requestFinished,
                });
            }
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
            const res = await axios.put(
                '/account/confirm/resendemail',
                { email },
                {
                    headers: { 'user-token': token },
                }
            );
            dispatch({
                type: types.requestFinished,
            });
            dispatch({
                type: types.responseFinished,
                payload: res,
            });
        } catch (error: any) {
            console.log(error);
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

/**
 * By Sciangula Hugo.
 * NOTA: con isVerify() vamos a corroborar que el email este confirmado.
 */

export const isVerify = (email: string | any) => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await axios.get(`/account/confirm/isverify/${email}`);
        } catch (error: object | any) {
            // Guardamos respuesta de la request.
            dispatch({
                type: types.responseFinished,
                payload: error.response,
            });
        }
    };
};

export const startLogin = (values: object) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: types.requestInProgress,
            });
            const res = await axios.post('/auth', values);

            const { token, id, rol } = res.data;
            let data = res.data;
            let status = res.status;
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
            // console.log(error);
            dispatch({
                type: types.requestFinished,
            });
            // Guardamos respuesta de la request.
            dispatch({
                type: types.responseFinished,
                payload: error.response,
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
            // Si todo sale bien.
            dispatch({
                type: types.responseFinished,
                payload: res,
            });
        } catch (error: any) {
            // console.log(error);
            dispatch({
                type: types.requestFinished,
            });
            // Guardamos respuesta de la request.
            dispatch({
                type: types.responseFinished,
                payload: error.response,
            });
            // Guardamos respuesta de la request.
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
            });
            // Si todo sale bien.
            dispatch({
                type: types.responseFinished,
                payload: res,
            });
        } catch (error: any) {
            // console.log(error);
            dispatch({
                type: types.requestFinished,
                payload: error.response,
            });
            // Guardamos respuesta de la request.
            dispatch({
                type: types.responseFinished,
                payload: error.response,
            });
        }
    };
};
export const logout = () => ({
    type: types.clearAuthLogin,
});

export const gitHubInactivateLogOut = () => ({
    type: types.gitHubInactivateLogOut,
});
