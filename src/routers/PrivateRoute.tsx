// import { useEffect } from 'react';
import { Navigate, useSearchParams, useLocation } from 'react-router-dom';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../reducers/rootReducer';
import { githubLogin, logout, validaToken } from '../actions/auth';
import { SnackBar } from '../components/SnackBar/SnackBar';
import { PreLoader } from '../components/PreLoader/PreLoader';

type Props = {
    children: JSX.Element;
};

export const PrivateRoute: FC<Props> = ({ children }) => {
    const { logged, status, data } = useSelector((state: State) => state.auth);
    const dispatch = useDispatch();
    let token = localStorage.getItem('token');

    if (!status && token) {
        dispatch(validaToken(token));

        return <PreLoader/>
    }

    const location = useLocation();
    const { pathname } = location;
    localStorage.setItem('location', pathname);

    let obj: any;
    if (token == null) {
        const [queryParameters] = useSearchParams();

        let tokenQuery = queryParameters.get('token');
        let id: any = queryParameters.get('id');
        let rol: any = queryParameters.get('rol');
        if (tokenQuery != null) {
            obj = { tokenQuery, id, rol };
            localStorage.setItem('token', tokenQuery);
            localStorage.setItem('id', id);
            localStorage.setItem('rol', rol);
            if (obj) {
                dispatch(githubLogin(obj));
            }
        }
    }

    if (!status && token) {
        dispatch(validaToken(token));

        return <PreLoader/>
    }

    return logged ? (
        children
    ) : (
        <>
            <SnackBar /> <Navigate to="/login" />
        </>
    );
};
