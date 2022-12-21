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
import { ErrorMessage, Field, Form, Formik, FormikValues } from "formik";
import * as yup from "yup";


export const ForgotPassword: FC = () => {
  const [sendRequest, setSendRequest] = useState(false);
  const validationSchema = yup.object().shape({
    Email: yup.string().email("Email invalido").required("Email requerido"),
  });
  const initialValues = {
    Email: "",
  };

  const onSubmit = (valores: string, { resetForm }) => {
    resetForm();
    console.log(valores);
    setSendRequest(true);
    setTimeout(() => 
      setSendRequest(false), 5000
    );
  };
  return (
    <>
      <Paper
        elevation={10}
        style={{ width: 400, height: "105%", padding: 20, margin: "50px auto" }}
      >
        <Grid textAlign="center">
          <Typography variant="h4">¿Olvidaste tu contraseña?</Typography>
          <Typography variant="subtitle1">
            Escribe tu email y te enviaremos instrucciones para reseter la
            constraseña
          </Typography>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form>
              <Field
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.Email}
                as={TextField}
                name="Email"
                label="Email"
                size="small"
                sx={{ width: "100%", margin: "10px 0" }}
                helperText={
                  <ErrorMessage name="Email">
                    {(message) => (
                      <span style={{ color: "red" }}>{message}</span>
                    )}
                  </ErrorMessage>
                }
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                color="primary"
                disabled={props.isSubmitting}
              >
                Enviar solicitud
              </Button>
              {sendRequest && (
                <Typography variant="body2" sx={{marginTop:1,marginLeft:2}}>
                Solicitud enviada con exito,porfavor revise su email!
              </Typography>
              )}
            </Form>
          )}
        </Formik>
      </Paper>
    </>
  );
};
