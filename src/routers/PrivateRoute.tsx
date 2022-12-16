import {useEffect} from 'react'
import { Navigate, useSearchParams } from 'react-router-dom'
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../reducers/rootReducer';
import { githubLogin } from '../actions/auth';


type Props = {
    children: JSX.Element
}

export const PrivateRoute: FC<Props> = ({ children }) => {
    const { logged } = useSelector((state: State) => state.auth)
    const dispatch = useDispatch()
      
    let token = localStorage.getItem('token');
    let obj:any;
    if (token == null){
        const [queryParameters] = useSearchParams() 
        let tokenQuery= queryParameters.get('token');
        let id:any=queryParameters.get('id');
        let rol:any=queryParameters.get('rol');
        let status:any=queryParameters.get('status');
        if (tokenQuery != null){
            obj={tokenQuery,id,rol,status}
            localStorage.setItem('token', tokenQuery);
            localStorage.setItem('id', id);
            localStorage.setItem('rol', rol);
            if(obj){
                dispatch(githubLogin(obj))
              }
        }
    }        

    
    return (logged)
        ? children
        : <Navigate to='/login' />
}
