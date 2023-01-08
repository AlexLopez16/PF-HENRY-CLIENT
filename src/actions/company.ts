import axios from "axios";
import { Dispatch } from "redux";
import { types } from "../types/types";
import { fileUpload } from "../helpers/fileUpload";
// import { useNavigate } from 'react-router-dom';

export const registerCompany = (values: Object) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await axios.post(`/company`, values);
      // console.log(res);
      dispatch({
        type: types.registerCompany,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const acceptStudent = (
  id: string | any,
  studentId: string,
  token: string | any
) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await axios.put(
        `/project/accept/${id}`,
        { studentId },
        { headers: { "user-token": token } }
      );
      dispatch({
        type: types.getProjectById,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const companyGetInfo = (id: string, token: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await axios.get(`/company/${id}`, {
        headers: { "user-token": token },
      });
      dispatch({
        type: types.companyGetInfo,
        payload: res.data,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
};

export const getCompany = (
  token: string | null,
  state: Boolean = true,
  limit?: number | null,
  init?: number | null
) => {
  return async (dispatch: Dispatch) => {
    try {
      let query;
      if (!state) {
        query = `onlyActive=${state}`;
      }
      if (limit || init) {
        if (query) {
          query += `&limit=${limit}&init=${init}`;
        } else {
          query = `limit=${limit}&init=${init}`;
        }
      }
      const res = await axios.get(`/company?${query}`, {
        headers: { "user-token": token },
      });
      dispatch({
        type: types.companyGetList,
        payload: res.data,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
};

export const CompanyUpdateInfo = (id: string, token: string, data: object) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await axios.put(`/company/${id}`, data, {
        headers: { "user-token": token },
      });
      dispatch({
        type: types.companyUpdateInfo,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updatePhotoCompany = (id: string, token: string, file: any) => {
  return async (dispatch: Dispatch) => {
    try {
      const photoUrl = await fileUpload(file, "users");
      const res = await axios.put(
        `/company/${id}`,
        { image: photoUrl },
        { headers: { "user-token": token } }
      );

      dispatch({
        type: types.companyUpdateInfo,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const DeleteStudent = (
  id: string | any,
  studentId: string,
  token: string | any
) => {
  console.log(id);

  return async (dispatch: Dispatch) => {
    try {
      const res = await axios.put(
        `/project/denied/${id}`,
        { studentId },
        { headers: { "user-token": token } }
      );
      dispatch({
        type: types.getProjectById,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const disableCompany = (token: string | null, id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await axios.put(
        `/admin/stateuser`,
        { id },
        { headers: { "user-token": token } }
      );

      dispatch({
        type: types.disableCompany,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
