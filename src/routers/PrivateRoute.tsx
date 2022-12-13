import { Navigate } from 'react-router-dom'
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../reducers/rootReducer';

type Props = {
    children: JSX.Element
}

export const PrivateRoute: FC<Props> = ({ children }) => {
    const { logged } = useSelector((state: State) => state.auth)

    return (logged)
        ? children
        : <Navigate to='/login' />
}
