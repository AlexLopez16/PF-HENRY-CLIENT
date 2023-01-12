import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { types } from '../types/types';
import { ErrorTwoTone } from '@mui/icons-material';

export const postReview = (data: object, token: string) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: types.requestInProgress,
            });
            const res: any = await axios.post(`/review`, data, {
                headers: { 'user-token': token },
            });
            dispatch({
                type: types.ratingProject,
                payload: res.data,
            });
            dispatch({
                type: types.requestFinished,
            });
            dispatch({
                type: types.responseFinished,
                payload: res,
            });
        } catch (error: any) {
            console.log(error);
            dispatch({
                type: types.requestFinished,
            });
            dispatch({
                type: types.responseFinished,
                payload: error.response,
            });
        }
    };
};
