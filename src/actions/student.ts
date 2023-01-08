import axios from "axios";
import { Dispatch } from "redux";
import { types } from "../types/types";
import { fileUpload } from "../helpers/fileUpload";
// import { type } from "os";

export const getListStudents = (
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
      const res = await axios.get(`/student?${query}`, {
        headers: { "user-token": token },
      });

      dispatch({
        type: types.getListStudents,
        payload: res.data,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
};

export const studentRegister = (values: object) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await axios.post("/student", values);
      // console.log(res.data);

      dispatch({
        type: types.studentRegister,
        payload: res.data,
      });
    } catch (error: any) {
      console.log(error.response.data);
    }
  };
};

export const getStudentInfo = (id: string, token: string) => {
  return async (dispatch: Dispatch) => {
    try {
      // Incio de la request.
      dispatch({
        type: types.requestInProgress,
      });
      const res = await axios.get(`/student/${id}`, {
        headers: { "user-token": token },
      });
      dispatch({
        type: types.studentGetInfo,
        payload: res.data,
      });
      // Fin de la request.
      dispatch({
        type: types.requestFinished,
      });
    } catch (error: any) {
      console.log(error);
      dispatch({
        type: types.requestFinished,
      });
    }
  };
};

export const updateStudentInfo = (id: string, token: string, data: object) => {
  return async (dispatch: Dispatch) => {
    try {
      // Incio de la request.
      dispatch({
        type: types.requestInProgress,
      });
      const res = await axios.put(`/student/${id}`, data, {
        headers: { "user-token": token },
      });
      dispatch({
        type: types.studentUpdateInfo,
        payload: res.data,
      });
      // Fin de la request.
      dispatch({
        type: types.requestFinished,
      });
      // Guardamos respuesta de la request.
      dispatch({
        type: types.responseFinished,
        payload: res,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: types.requestFinished,
      });
    }
  };
};

export const updatePhotoStudent = (id: string, token: string, file: any) => {
  return async (dispatch: Dispatch) => {
    try {
      const photoUrl = await fileUpload(file, "users");
      const res = await axios.put(
        `/student/${id}`,
        { image: photoUrl },
        { headers: { "user-token": token } }
      );

      dispatch({
        type: types.studentUpdateInfo,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchProject = (name: string, token: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await axios.get(`/student/${name}`, {
        headers: { "user-token": token },
      });

      dispatch({
        type: types.studentSearch,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addStudentToProject = (id: string, token: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: types.requestInProgress,
      });
      const res = await axios.put(`/project/${id}`, undefined, {
        headers: { "user-token": token },
      });

      dispatch({
        type: types.addStudentToProject,
      });
      dispatch({
        type: types.requestFinished,
      });
      // Si todo sale bien.
      dispatch({
        type: types.responseFinished,
        payload: res,
      });
    } catch (error: any) {
      console.log(error);
      dispatch({
        type: types.requestFinished,
        payload: error.response,
      });
      // Guardamos respuesta de la request.
      dispatch({
        type: types.responseFinished,
        payload: error.response,
      });
    }
  };
};

export const unApplyStudent = (
  studentId: string | any,
  projectId: string | any,
  token: string | any
) => {
  return async (dispatch: Dispatch) => {
    try {
      // Incio de la request.
      dispatch({
        type: types.requestInProgress,
      });
      const res = await axios.put(
        `/project/unapply/${projectId}`,
        {
          studentId,
        },
        {
          headers: { "user-token": token },
        }
      );
      console.log(res);
      dispatch({
        type: types.unApplyStudent,
        payload: projectId,
      });
      // Fin de la request.
      dispatch({
        type: types.requestFinished,
      });
    } catch (error) {
      dispatch({
        type: types.requestFinished,
      });
      console.log(error);
    }
  };
};

export const disableStudent = (token: string | null, id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await axios.put(
        `/admin/stateuser`,
        { id },
        { headers: { "user-token": token } }
      );

      dispatch({
        type: types.deleteOrInactiveStudent,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
