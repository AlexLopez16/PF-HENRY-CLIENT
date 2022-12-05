import * as React from "react";
import { useDispatch } from "react-redux";
import { FC } from 'react'
import { Formik, FormikHelpers, FormikProps, Form, Field } from "formik";
import { FieldProps, getIn } from 'formik'
import * as yup from "yup";

import { Select, Container, Typography, Grid, Button, Box, TextFieldProps, TextField, MenuItem, SelectChangeEvent, InputLabel, FormControl } from '@mui/material';






interface FormValues {
    name: string,
    email: string,
    pass: string,
    passRepeat: string,
}
// the Formik component supports yup validation out-of-the-box via the `validationSchema` prop
const validationSchema = yup.object().shape({
    name: yup.string().required("Requerido"),
    email: yup.string().email().required("Requerido"),
    pass: yup
    .string()
    .min(8, 'Debe contener min. 8 caracter')
    .matches(/[0-9]/, 'Se requiere un numero')
    .matches(/[a-z]/, 'Se requiere una letra minuscula')
    .matches(/[A-Z]/, 'Se requiere una letra mayuscula')
    .matches(/[^\w]/, 'Se requiere un simbolo'),

    passRepeat:yup
          .string()
          .oneOf([yup.ref('pass'), null], 'No coinciden las contraseñas'),

});


/**
 * Material TextField Component with Formik Support including Errors.
 * Intended to be specified via the `component` prop in a Formik <Field> or <FastField> component.
 * Material-UI specific props are passed through.
 */
const FormTextField: React.FC<FieldProps & TextFieldProps> = props => {
    const isTouched = getIn(props.form.touched, props.field.name)
    const errorMessage = getIn(props.form.errors, props.field.name)

    const { error, helperText, field, form, ...rest } = props

    return (
        <TextField
            variant="outlined"
            error={error ?? Boolean(isTouched && errorMessage)}
            helperText={helperText ?? ((isTouched && errorMessage) ? errorMessage : undefined)}
            {...rest}
            {...field}
        />
    )
}


const CompanyForm: FC = () => {

    const dispatch = useDispatch()



    const paises: string[] = ["Argentina", "Bolivia", "Brasil", "Chile", "Colombia", "Costa Rica", "Cuba", "Ecuador", "El Salvador", "Guatemala", "Honduras", "México", "Nicaragua", "Panamá", "Paraguay", "Perú", "Puerto Rico", "República Dominicana", "Uruguay", "Venezuela"];

    const [pais, setPais] = React.useState('');



    // const initialValues={
    //     name: "",
    //     email: "",
    //     password: "",
    //     passwordRepeat: ""
    // }

    const [input, setInput] = React.useState("")

    const handleChange = (event: SelectChangeEvent) => {
        setPais(event.target.value as string);
    };




    return (
        <Container maxWidth="md">

            <Box mb={3} p={2}>
                <Typography
                    align="center"
                    variant="h5"
                    style={{ lineHeight: 1.25, marginBottom: 16 }}
                >
                    Completa el formulario con tus datos correspondientes
                </Typography>
                <Typography align="center">
                    {/* Submit the form with empty fields to view validation errors. */}
                </Typography>
            </Box>
            <Formik

                initialValues={{
                    name: "",
                    email: "",
                    pass: "",
                    passRepeat: "",
                }}

                validationSchema={validationSchema}


                onSubmit={(
                    values: FormValues,
                    formikHelpers: FormikHelpers<FormValues>
                ) => {
                    alert(JSON.stringify(values, null, 2));
                    formikHelpers.setSubmitting(false);


                    //         dispatch(
                    //             // post_videogames({
                    //             name:values.name,
                    // email:values.email,
                    // password:values.password,
                    // passwordRepeat:values.passwordRepeat,
                    // createdInDb: true
                    // // })
                    // )
                }}
            >
                {(formikProps: FormikProps<FormValues>) => (
                    <Form noValidate autoComplete="off">
                        <Grid container spacing={1} marginLeft={40}>
                            <Grid item xs={12}>
                                <Field
                                    name="name"
                                    label="Name"
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
                                    name="pass"
                                    label="Password"
                                    size="small"
                                    component={FormTextField}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                    name="passRepeat"
                                    label="Password repeat"
                                    size="small"
                                    component={FormTextField}
                                />
                            </Grid>


                            <Box sx={{ ml: 1, width: 210,pt:1 }} >
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Nacionalidad</InputLabel>
                                    <Select
                                        id="demo-simple-select"
                                        labelId="demo-simple-select-label"
                                        label="Nacionalidad"
                                        value={pais}
                                        onChange={handleChange}

                                    >

                                        {paises.map(pais => (
                                            <MenuItem value={pais}>{pais}</MenuItem>
                                        ))}

                                    </Select>
                                </FormControl>
                            </Box>



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
        </Container >
    );
}

export default CompanyForm;