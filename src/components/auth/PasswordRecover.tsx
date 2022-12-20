import React, { FC, useState } from "react";
import {
  Grid,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  InputAdornment,
  IconButton,
  FormControl,
  Button,
  Typography,
  Link,
  FormHelperText,
} from "@mui/material";
import { paperStyle } from "../../styles/Profile/HeaderStyles";
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikValues,
  validateYupSchema,
} from "formik";
import * as yup from "yup";
import { GridEvents } from "@mui/x-data-grid";
import {
  AlignHorizontalCenter,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

export const PasswordRecover: FC = () => {
  const [sendRequest, setSendRequest] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const initialValues = {
    password: "",
    confirmPassword: "",
  };
  const validationSchema = yup.object().shape({
    password: yup
      .string()
      .required("Contraseña requerida")
      .min(8, "Debe contener min. 8 caracter")
      .matches(/[0-9]/, "Se requiere un numero")
      .matches(/[a-z]/, "Se requiere una letra minuscula")
      .matches(/[A-Z]/, "Se requiere una letra mayuscula")
      .matches(/[^\w]/, "Se requiere un simbolo"),
    confirmPassword: yup
      .string()
      .required("Contraseña requerida")
      .test({
        name: "max",
        exclusive: false,
        params: {},
        message: "las contraseñas no son iguales",
        test: function (value) {
          return value === this.parent.password;
        },
      }),
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (valores:any,{ resetForm }) => {
    resetForm();
    console.log(valores);
    setSendRequest(true);
    setTimeout(() => setSendRequest(false), 5000);
  };
  return (
    <>
      <Paper
        elevation={10}
        style={{ width: 400, height: "105%", padding: 20, margin: "50px auto" }}
      >
        <Grid textAlign="center">
          <Typography variant="h4">Nueva contraseña</Typography>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form>
              <FormControl sx={{ width: "100%", margin: "10px 0" }}>
                <Typography variant="subtitle1">
                  Escribe tu nueva contraseña
                </Typography>
                <Field
                  onChange={props.handleChange}
                  // onBlur={props.handleBlur}
                  type={showPassword ? "text" : "password"}
                  // value={props.values.password}
                  as={OutlinedInput}
                  name="password"
                  label="Contraseña"
                  size="small"
                  sx={{ width: "100%", margin: "10px 0" }}
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
                  <FormHelperText error>{props.errors.password}</FormHelperText>
                )}
              </FormControl>
              <FormControl sx={{ width: "100%", margin: "10px 0" }}>
                <Typography variant="subtitle1">
                  Confirmar Contraseña
                </Typography>
                <Field
                  onChange={props.handleChange}
                  // onBlur={props.handleBlur}
                  type={showPassword ? "text" : "password"}
                  // value={props.values.confirmPassword}
                  as={OutlinedInput}
                  name="confirmPassword"
                  label="Confirmar Contraseña"
                  size="small"
                  sx={{ width: "100%", margin: "10px 0" }}
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
                {"confirmPassword" in props.errors && (
                  <FormHelperText error>
                    {props.errors.confirmPassword}
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
                Cambiar Contraseña
              </Button>
              {sendRequest && (
                <Typography
                  variant="body2"
                  sx={{ marginTop: 1, marginLeft: 2 }}
                >
                  Solicitud enviada con exito
                </Typography>
              )}
            </Form>
          )}
        </Formik>
      </Paper>
    </>
  );
};
