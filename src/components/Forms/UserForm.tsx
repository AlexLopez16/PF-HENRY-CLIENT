import * as React from "react";
import { FC } from "react";
import { Container, Typography, Grid, Button, Box } from "@mui/material";
import { Formik, FormikHelpers, FormikProps, Form, Field } from "formik";
import * as yup from "yup";
import { FieldProps, getIn } from "formik";

import { TextFieldProps, TextField } from "@mui/material";

interface FormValues {
  name: string;
  apellido: string;
  email: string;
  password: string;
  passwordRepeat: string;
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
  return (
    <Container maxWidth="md">
      <Box mb={3} p={2}>
        <Typography
          align="center"
          variant="h5"
          style={{ lineHeight: 1.25, marginBottom: 16 }}
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
                  name="name"
                  label="Nombre"
                  size="small"
                  component={FormTextField}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="apellido"
                  label="Apellido"
                  size="small"
                  component={FormTextField}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="email"
                  label="email"
                  size="small"
                  component={FormTextField}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="password"
                  label="Contraseña"
                  size="small"
                  component={FormTextField}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="passwordRepeat"
                  label="Repetir contraseña"
                  size="small"
                  component={FormTextField}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="outlined"
                  size="large"
                  color="primary"
                  disabled={formikProps.isSubmitting}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default UserForm;
