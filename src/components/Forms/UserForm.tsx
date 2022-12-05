import React, { useState } from "react";
import { FC } from "react";
import { Grid, Button, Box, Paper, FormHelperText } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { FieldProps, getIn } from "formik";

import { TextFieldProps, TextField } from "@mui/material";

interface FormValues {
  name: string;
  apellido: string;
  email: string;
  password: string;
  passwordRepeat: string;
  showPassword:boolean;
}

// the Formik component supports yup validation out-of-the-box via the `validationSchema` prop
const validationSchema = yup.object().shape({
  name: yup.string().required("Nombre requerido"),
  apellido: yup.string().required("Apellido requerido"),
  email: yup.string().email().required("Email requerido"),
  password: yup
    .string()
    .min(8, 'Debe contener min. 8 caracter')
    .matches(/[0-9]/, 'Se requiere un numero')
    .matches(/[a-z]/, 'Se requiere una letra minuscula')
    .matches(/[A-Z]/, 'Se requiere una letra mayuscula')
    .matches(/[^\w]/, 'Se requiere un simbolo'),

    passwordRepeat:yup
          .string()
          .oneOf([yup.ref('password'), null], 'No coinciden las contraseñas'),
});

/**
 * Material TextField Component with Formik Support including Errors.
 * Intended to be specified via the `component` prop in a Formik <Field> or <FastField> component.
 * Material-UI specific props are passed through.
 */
export const FormTextField: React.FC<FieldProps & TextFieldProps> = (props) => {
  const isTouched = getIn(props.form.touched, props.field.name);
  const errorMessage = getIn(props.form.errors, props.field.name);

  const { error, helperText, field, form, ...rest } = props;

  return (
    <TextField
      variant="outlined"
      error={error ?? Boolean(isTouched && errorMessage)}
      helperText={
        helperText ?? (isTouched && errorMessage ? errorMessage : undefined)
      }
      {...rest}
      {...field}
    />
  );
};

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
            width: 400,
            height: "100%",
            padding: 20,
            margin: "50px auto",
          }}
        >
          login de alumnos <br />
          como viene el front papa!!!!!!!!!!!!!!
        </Typography>
        <Typography align="center">grupo 5</Typography>
      </Box>
      <Formik
        initialValues={{
          name: "",
          apellido: "",
          email: "",
          password: "",
          passwordRepeat: "",
          showPassword:false,
        }}
        validationSchema={validationSchema}
        onSubmit={(
          values: FormValues,
          formikHelpers: FormikHelpers<FormValues>
        ) => {
          alert(JSON.stringify(values, null, 2));
          formikHelpers.setSubmitting(false);
        }}
      >
        {(formikProps: FormikProps<FormValues>) => (
          <Form noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="name"
                  label="Nombre"
                  size="small"
                  sx={{ width: "100%" }}
                  helperText={<ErrorMessage name="name" />}
                />

                <Field
                  as={TextField}
                  name="apellido"
                  label="Apellido"
                  size="small"
                  sx={{ width: "100%" }}
                  helperText={<ErrorMessage name="apellido" />}
                />

                <Field
                  as={TextField}
                  name="email"
                  label="Email"
                  size="small"
                  sx={{ width: "100%" }}
                  helperText={<ErrorMessage name="email" />}
                />
                <FormControl sx={{ width: "100%" }}>
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