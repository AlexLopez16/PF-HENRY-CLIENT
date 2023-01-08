import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import { types } from "../types/types";

export const postReview = (data: object, token: string) => {
  return async (dispatch: Dispatch) => {
    console.log(token);

    try {
      const res: any = await axios.post(`/review`, data, {
        headers: { "user-token": token },
      });
      dispatch({
        type: types.ratingProject,
        payload: res.data,
      });
    } catch (error: any) {
      console.log(data);
      console.log(error.response.data);
    }
  };
};
