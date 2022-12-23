import { Dispatch } from 'redux';
import axios from 'axios';
import { types } from '../types/types';

/**
 * By Sciangula Hugo.
 * NOTA: con infoToken() si tenemos un token valido en el local storage, vamos a mantener la sesion con ese token.
 */

export const validaToken = (token: any) => {
    console.log(token);
    return async (dispatch: Dispatch) => {
        try {
            const { data, status } = await axios.get(
                'http://localhost:3001/api/token',
                {
                    headers: { 'user-token': token },
                }
            );
            const { id, rol } = data;
            if (status) {
                localStorage.setItem('token', token);
                dispatch(login({ data, status, id, rol }));
            }
        } catch (error: any) {
            // Cerramos sesion si el usuario no tiene un token valido.
            dispatch(logout());
        }
    };
};

export const startLogin = (values: object) => {
    return async (dispatch: Dispatch) => {
        try {
            const { data, status } = await axios.post('/auth', values);
            const { token, id, rol } = data;
            if (status) {
                localStorage.setItem('token', token);
                localStorage.setItem('id', id);
                localStorage.setItem('rol', rol);
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
export const githubLogin = ({ id, rol, token }) => {
    return login({ data: { id, rol, token } });
};

export const gmailLogin = (tok: String, userType: String) => {
    return async (dispatch: Dispatch) => {
        try {
            const { data, status } = await axios.post('/auth', {
                from: 'gmail',
                tok,
                userType,
            });
            const { token, id, rol } = data;

            if (status) {
                localStorage.setItem('token', token);
                localStorage.setItem('id', id);
                localStorage.setItem('rol', rol);
                dispatch(login({ data, status, token, id, rol }));
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

const login = (data: object) => ({
    type: types.authLogin,
    payload: data,
});

const logout = () => ({
    type: types.clearAuthLogin,
});
