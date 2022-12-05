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
import { VisibilityOff, Visibility, Message } from "@mui/icons-material";
import { GitHubLogin } from "../auth/GitHubLogin";
import { GoogleLogin } from "../auth/GoogleLogin";

export const UserForm: FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const initialValues = {
    name: "",
    apellido: "",
    email: "",
    contraseña: "",
  };
  const validationSchema = yup.object().shape({
    name: yup.string().required("Nombre requerido"),
    apellido: yup.string().required("Apellido requerido"),
    email: yup.string().email("email invalido").required("Email requerido"),
    contraseña: yup
      .string()
      .required("Contraseña requerida")
      .min(8, "Debe contener min. 8 caracter")
      .matches(/[0-9]/, "Se requiere un numero")
      .matches(/[a-z]/, "Se requiere una letra minuscula")
      .matches(/[A-Z]/, "Se requiere una letra mayuscula")
      .matches(/[^\w]/, "Se requiere un simbolo"),
  });
  const onSubmit = (values: any) => {
    values;
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
          <GoogleLogin />
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
                  name="apellido"
                  label="Apellido"
                  size="small"
                  sx={{ width: "100%", margin: "10px 0" }}
                  helperText={
                    <ErrorMessage name="apellido">
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
                    name="contraseña"
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
                  {"contraseña" in props.errors && (
                    <FormHelperText error>
                      {props.errors.contraseña}
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

export default UserForm;
