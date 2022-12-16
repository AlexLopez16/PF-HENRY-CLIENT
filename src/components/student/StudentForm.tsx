import { useState, FC } from "react";
import {
  Grid,
  Button,
  Paper,
  FormHelperText,
  Divider,
  TextField,
  InputLabel,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { GitHubLogin } from "../auth/GitHubLogin";
// import { GoogleLogin } from "../auth/GoogleLogin";

import { useDispatch } from "react-redux";
import type {} from 'redux-thunk/extend-redux'
import {studentRegister} from "../../actions/student"
import { GoogleLogin } from "@react-oauth/google";
import { gmailLogin } from '../../actions/auth';


export const StudensForm: FC = () => {



  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const initialValues = {
    name: "",
    lastName: "",
    email: "",
    password: "",
  };
  const validationSchema = yup.object().shape({
    name: yup.string().required("Nombre requerido"),
    lastName: yup.string().required("Apellido requerido"),
    email: yup.string().email("email invalido").required("Email requerido"),
    password: yup
      .string()
      .required("Contraseña requerida")
      .min(8, "Debe contener min. 8 caracter")
      .matches(/[0-9]/, "Se requiere un numero")
      .matches(/[a-z]/, "Se requiere una letra minuscula")
      .matches(/[A-Z]/, "Se requiere una letra mayuscula")
      .matches(/[^\w]/, "Se requiere un simbolo"),
  });

 type Values= {

  name: string;
  lastName:string;
  email: string;
  password: string;

 }

 const dispatch = useDispatch()


  const onSubmit = (values:Values) => {
    dispatch(studentRegister(values));


  };

  return (
    <div>
      <Grid>
        <Paper
          elevation={10}
          style={{
            width: 380,
            height: "100%",
            padding: 20,
            margin: "50px auto",
          }}
        >
          <Grid textAlign="center">
            <h2>Crear cuenta</h2>
          </Grid>
          <GitHubLogin />
          <GoogleLogin onSuccess={credentialResponse => {
                            dispatch(gmailLogin(credentialResponse.credential,'student'));
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                        text='continue_with'
                        auto_select={false}/>
          <Divider>
            <span>O</span>
          </Divider>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form>
                <Field
                  as={TextField}
                  name="name"
                  label="Nombre"
                  size="small"
                  sx={{ width: "100%", margin: "10px 0" }}
                  helperText={
                    <ErrorMessage name="name">
                      {(message) => (
                        <span style={{ color: "red" }}>{message}</span>
                      )}
                    </ErrorMessage>
                  }
                />

                <Field
                  as={TextField}
                  name="lastName"
                  label="Apellido"
                  size="small"
                  sx={{ width: "100%", margin: "10px 0" }}
                  helperText={
                    <ErrorMessage name="lastName">
                      {(message) => (
                        <span style={{ color: "red" }}>{message}</span>
                      )}
                    </ErrorMessage>
                  }
                />

                <Field
                  as={TextField}
                  name="email"
                  label="Email"
                  size="small"
                  sx={{ width: "100%", margin: "10px 0" }}
                  helperText={
                    <ErrorMessage name="email">
                      {(message) => (
                        <span style={{ color: "red" }}>{message}</span>
                      )}
                    </ErrorMessage>
                  }
                />
                <FormControl sx={{ width: "100%", margin: "10px 0" }}>
                  <InputLabel htmlFor="contraseña">Contraseña</InputLabel>
                  <Field
                    as={OutlinedInput}
                    name="password"
                    label="contraseña"
                    placeholder="Contraseña"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  {"password" in props.errors && (
                    <FormHelperText error>
                      {props.errors.password}
                    </FormHelperText>
                  )}
                </FormControl>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  color="primary"
                  disabled={props.isSubmitting}
                >
                  Crear cuenta
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </div>
  );
};

export default StudensForm;
