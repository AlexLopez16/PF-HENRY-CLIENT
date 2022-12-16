import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { FC } from 'react';
import { State } from '../reducers/rootReducer';

type Props = {
    children: JSX.Element
}

export const PublicRoute: FC<Props> = ({ children }) => {
    const { logged } = useSelector((state: State) => state.auth);
    
    return (logged)
        ? <Navigate to="/home" />
        : children
}
