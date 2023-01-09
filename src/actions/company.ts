import axios from "axios";
import { Dispatch } from "redux";
import { types } from "../types/types";
import { fileUpload } from "../helpers/fileUpload";
// import { useNavigate } from 'react-router-dom';

export const registerCompany = (values: Object) => {
    return async (dispatch: Dispatch) => {
        try { 
            const  res:object | any = await axios.post('/company', values);
            const { data, status } = res
            const { token, id, rol } = data;
            dispatch({
                type: types.registerCompany,
                payload: data,
            });
            // Si se registro correctamente, le hacemos iniciar sesion.
            if (status) {
                localStorage.setItem('token', token);
                dispatch(login({ data, status, id, rol }));
            }
        } catch (error:object | any) {
            dispatch({
                type: types.responseFinished,
                payload: error.response
            
            })
            console.log(error);
        }
    };
};

const login = (data: object) => ({
    type: types.authLogin,
    payload: data,
});

export const acceptStudent = (
  id: string | any,
  studentId: string,
  token: string | any
) => {


    console.log(studentId);

    return async (dispatch: Dispatch) => {
        try {
    
                const res = await axios.put(
                    `/project/accept/${id}`,
                    { studentId},
                    { headers: { 'user-token': token } }
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
      dispatch({
        type: types.requestInProgress,
    });
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
      dispatch({
        type: types.requestFinished,
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
                headers: { 'user-token': token },
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
) => {;

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

export const proyectFinal = (uid:string | any) =>{
return async(dispatch:Dispatch) =>{
try {
    const res = await axios.put(`/company/final`,{uid})
   dispatch({
    type: types.ratingProjectCompany,
    // payload: res.data
   })

} catch (error) {
    console.log(error,)
}


}



}  
