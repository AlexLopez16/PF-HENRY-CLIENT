import axios from 'axios';
import { Dispatch } from 'redux';
import { types } from '../types/types';


export const deleteuser = (token: string | null, selectID: string) => {
    let id=selectID
    return async (dispatch: Dispatch) => {
        try {
            const res = await axios.put('/admin/stateuser', {id}, {
                headers: { 'user-token': token },
            });
            console.log(res);

            dispatch({
                type: types.deleteOrInactiveStudent,
                // payload: res.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};


export const AprovedProject = (token: string | null, selectID: string) => {
    console.log("id",selectID);
    let id=selectID
    return async (dispatch: Dispatch) => {
        try {
            const res = await axios.put('/admin/aprovedproject', {id}, {
                headers: { 'user-token': token },
            });
            console.log(res);

            dispatch({
                type: types.AdminAprovedProject,
                // payload: res.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};



export const AdminEliminatedProject = (idPrj: string | null, token:string,values:string) => {
    
    return async (dispatch: Dispatch) => {
        try {
            const res = await axios.post('/admin/eliminatedproject', {idPrj,values}, {
                headers: { 'user-token': token },
            });
            console.log(res);

            dispatch({
                type: types.AdminEliminatedProject,
                // payload: res.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};


export const getCharts = (token: string | null) => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await axios.get('/admin/charts', {
                headers: { 'user-token': token },
            })
            dispatch({
                type: types.adminGetCharts, 
                payload: res.data
            })

        } catch (error) {
            console.log(error)
        }
        }
}