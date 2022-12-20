import { Dispatch } from 'redux'
import axios from 'axios'
import { types } from '../types/types';


export const startLogin = (values: object) => {
    return async (dispatch: Dispatch) => {
        try {
            const { data, status } = await axios.post('/auth', values)
            const { token,id,rol} = data;
            if (status) {
                localStorage.setItem('token', token);
                localStorage.setItem('id', id);
                localStorage.setItem('rol', rol);
                dispatch(login({ data, status,id,rol }))
            }
        } catch (error: any) {
            dispatch({
                type: types.authLogin,
                logged: false,
                payload: {
                    status: error.response.status
                }
            })
        }
    }
}
export const githubLogin = ({id,rol,token}) => {
            return login({data:{id,rol,token}})         
}

export const gmailLogin=(tok:String,userType:String)=>{
    return async (dispatch: Dispatch) => {
      
        try {
            const { data, status } = await axios.post('/auth', {from:'gmail',tok,userType})
            const { token,id,rol } = data;
    
            if (status) {
                localStorage.setItem('token', token);
                localStorage.setItem('id', id);
                localStorage.setItem('rol', rol);
                dispatch(login({ data,status,token,id,rol  }))
            }
        } catch (error: any) {
            dispatch({
                type: types.authLogin,
                logged: false,
                payload: {
                    status: error.response.status
                }
            })
        }
    }

}

const login = (data: object) => ({
    type: types.authLogin,
    payload: data
})

