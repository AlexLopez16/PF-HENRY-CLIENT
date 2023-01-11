import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { FC } from 'react';
import { State } from '../reducers/rootReducer';
import { validaToken } from '../actions/auth';
import { PreLoader } from '../components/PreLoader/PreLoader';

type Props = {
    children: JSX.Element;
};

export const PrivateAdmin: FC<Props> = ({ children }) => {

    const { logged, data, status }: object | any = useSelector(

        (state: State) => state.auth
    );

    const dispatch = useDispatch();

    // Definimos url a redireccionar.
    let location: string | any = '/dashboard/graphs';

    const currentLocation = localStorage.getItem('location');

    if (currentLocation && currentLocation.startsWith('/admin')) {
        location = currentLocation;
    }

    let token = localStorage.getItem('token');

    if (!status && token) {
        dispatch(validaToken(token));
    }

    if (logged) return children;

    // if the data is empty return the PreLoader
    // the dispatch is completed
    if(data.id === '') {
        return <PreLoader/>
    }

    if (!data.verify)
     return (
            <>
                <Navigate to={'/verifyemail'} />
            </>
        );

    switch (data.rol) {
        case 'ADMIN_ROL':
            return (
                <>
                    <Navigate to={location} />
                </>
            );
    }

    return <></>;
};
