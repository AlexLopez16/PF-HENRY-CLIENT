import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { FC } from 'react';
import { State } from '../reducers/rootReducer';
import { validaToken } from '../actions/auth';

type Props = {
    children: JSX.Element;
};

export const PublicRoute: FC<Props> = ({ children }) => {
    const { logged, data }: object | any = useSelector(
        (state: State) => state.auth
    );

    // Definimos url a redireccionar.
    let location: string | any = '/projects';
    if (localStorage.getItem('location')) {
        location = localStorage.getItem('location');
    }

    if (!logged) return children;

    if (!data.verify)
        return (
            <>
                <Navigate to={'/verifyemail'} />
            </>
        );

    switch (data.rol) {
        case 'STUDENT_ROL':
        case 'COMPANY_ROL':
            return (
                <>
                    <Navigate to={location} />
                </>
            );
        case 'ADMIN_ROL':
            return (
                <>
                    <Navigate to={'/dashboard/graphs'} />
                </>
            );
    }

    return <></>;
};
