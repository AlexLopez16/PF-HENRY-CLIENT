import { Dispatch } from 'redux';
import axios from 'axios';
import { types } from '../types/types';


export const sendContactEmail = (data: Object) => {
    return async (dispatch: Dispatch) => {
        try {
            const { status } = await axios.post('/contact', data)

            dispatch({
                type: types.responseFinished,
                payload: {
                    status: status
                }
            })

        } catch (error) {
            console.log(error)
        }
    }
}