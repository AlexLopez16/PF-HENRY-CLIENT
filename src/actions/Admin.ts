import axios from 'axios';
import { Dispatch } from 'redux';
import { types } from '../types/types';

export const getAdmins = (token: string | null) => {
    return async (dispatch: Dispatch) => {
        try {
            const { data } = await axios.get('/admin/getAdmin', {
                headers: { 'user-token': token },
            });
            dispatch({
                type: types.getAdmins,
                payload: data.admins,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const getInfoAdmin = (id: string, token: string | null) => {
    return async (dispatch: Dispatch) => {
        try {
            const { data } = await axios.get(`/admin/admin/${id}`, {
                headers: { 'user-token': token },
            });
            dispatch({
                type: types.getInfoAdmin,
                payload: data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const deleteuser = (token: string | null, selectID: string) => {
    let id = selectID;
    return async (dispatch: Dispatch) => {
        try {
            const res = await axios.put(
                '/admin/stateuser',
                { id },
                {
                    headers: { 'user-token': token },
                }
            );
            console.log(res);

            dispatch({
                type: types.deleteOrInactiveStudent,
                payload: res.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const AprovedProject = (token: string | null, selectID: string) => {
    console.log('id', selectID);
    let id = selectID;
    return async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: types.requestInProgress,
            });
            const res = await axios.put(
                '/admin/aprovedproject',
                { id },
                {
                    headers: { 'user-token': token },
                }
            );
            console.log(res.data);

            dispatch({
                type: types.AdminAprovedProject,
                payload: res.data,
            });

            dispatch({
                type: types.requestFinished,
            });
        } catch (error: any) {
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

export const AdminEliminatedProject = (
    idPrj: string | null,
    token: string,
    values: string
) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: types.requestInProgress,
            });
            const res = await axios.post(
                '/admin/eliminatedproject',
                { idPrj, values },
                {
                    headers: { 'user-token': token },
                }
            );

            dispatch({
                type: types.AdminEliminatedProject,
                payload: res.data,
            });
            dispatch({
                type: types.requestFinished,
            });
        } catch (error: any) {
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

export const getCharts = (token: string | null) => {
    return async (dispatch: Dispatch) => {
        try {
            const res = await axios.get('/admin/charts', {
                headers: { 'user-token': token },
            });
            dispatch({
                type: types.adminGetCharts,
                payload: res.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const acceptCompany = (
    token: string | null,
    id: string,
    acept: boolean
) => {
    console.log('id', id);

    return async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: types.requestInProgress,
            });
            const res = await axios.post(
                '/admin/verifyCompany',
                { id, acept },
                {
                    headers: { 'user-token': token },
                }
            );
            console.log(res.data);

            dispatch({
                type: types.requestFinished,
            });
            // Si todo sale bien.
            dispatch({
                type: types.responseFinished,
                payload: res,
            });
        } catch (error: any) {
            dispatch({
                type: types.requestFinished,
            });
            // Guardamos respuesta de la request.
            dispatch({
                type: types.responseFinished,
                payload: error.response,
            });
        }
    };
};

export const rejectCompany = (
    token: string | null,
    id: string,
    acept: boolean
) => {
    console.log('id', id);

    return async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: types.requestInProgress,
            });
            const res = await axios.post(
                '/admin/verifyCompany',
                { id, acept },
                {
                    headers: { 'user-token': token },
                }
            );
            console.log(res.data);

            dispatch({
                type: types.requestFinished,
            });
            // Si todo sale bien.
            dispatch({
                type: types.responseFinished,
                payload: res,
            });
        } catch (error: any) {
            dispatch({
                type: types.requestFinished,
            });
            // Guardamos respuesta de la request.
            dispatch({
                type: types.responseFinished,
                payload: error.response,
            });
        }
    };
};

const login = (data: object) => ({
  type: types.authLogin,
  payload: data,
});

export const registerAdmin = (values: object) => {
  return async (dispatch: Dispatch) => {
    try {
      const res: object | any = await axios.post("/admin", values);
      const { data, status } = res;
      const { token, id, rol } = data;
      dispatch({
        type: types.registerAdmin,
        payload: data,
      });
      if (status) {
        localStorage.setItem("token", token);
        dispatch(login({ data, status, id, rol }));
      }
    } catch (error: object | any) {
      dispatch({
        type: types.responseFinished,
        payload: error.response,
      });
      console.log(error);
    }
  };
};

export const getAllReviews = (token: string | null) => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await axios.get("/admin/getreviews", {
        headers: { "user-token": token },
      });
      console.log(data);
      
      dispatch({
        type: types.getAllReviews,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const cancelReview=(idrev: string | null,
  token: string,values:string

) => {
  return async (dispatch: Dispatch) => {
    try {
      

      const res = await axios.put(
        "/admin/deletereviews",{idrev,values}, {headers: { "user-token": token }});
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

export const disableAdmin = (token: string | null, id: string) => {
  return async (dispatch: Dispatch) => {
      try {
          const { data } = await axios.put(
              `/admin/stateuser`,
              { id },
              { headers: { 'user-token': token } }
          );

          dispatch({
              type: types.deleteOrInactiveStudent,
          });
      } catch (error) {
          console.log(error);
      }
  };
};

export const setStateMultiple = (token: string | null, selectID: string[]) => {
  let ids = selectID;
  return async (dispatch: Dispatch) => {
    try {
      const res = await axios.put(
        "/admin/deletemultiple",
        { ids},
        {
          headers: { "user-token": token },
        }
      );
      console.log(res);

      dispatch({
        type: types.setState,
        // payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const reclutamientoInProject= (token: string | null, selectID: string[]) => {
    console.log('id', selectID);
    let ids = selectID;
    return async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: types.requestInProgress,
            });
            const res = await axios.put(
                '/admin//setEnReclutamiento',
                { ids },
                {
                    headers: { 'user-token': token },
                }
            );
            console.log(res.data);

            dispatch({
                type: types.setReclutamientoinProject,
                // payload: res.data,
            });

            dispatch({
                type: types.requestFinished,
            });
        } catch (error: any) {
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