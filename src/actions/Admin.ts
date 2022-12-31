import axios from 'axios';
import { Dispatch } from 'redux';
import { types } from '../types/types';


export const deleteuser = (token: string | null, selectID: string) => {
    console.log("id",selectID);
    let id=selectID
    return async (dispatch: Dispatch) => {
        try {
            const res = await axios.put('/admin/stateuser', {id}, {
                headers: { 'user-token': token },
            });
            console.log(res);

            // dispatch({
            //     type: types.deleteOrInactiveStudent,
            //     payload: res.data,
            // });
        } catch (error) {
            console.log(error);
        }
    };
};