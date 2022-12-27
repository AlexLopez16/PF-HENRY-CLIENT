import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { FC } from 'react';
import { State } from '../reducers/rootReducer';
import { validaToken } from '../actions/auth';

type Props = {
    children: JSX.Element;
};

export const PublicRoute: FC<Props> = ({ children }) => {
    const { logged } = useSelector((state: State) => state.auth);
    const dispatch = useDispatch();
    let token = localStorage.getItem('token');

    if (!status && token) {
        console.log('Tenes token, ahora te validamos');
        dispatch(validaToken(token));
    }

    return logged ? <Navigate to="/dashboard" /> : children;
};
