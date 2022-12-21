import { useState } from "react";
import { FC } from "react";
import { Grid, Button, Box, Paper, FormHelperText } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import {
    TextField,
    InputLabel,
    FormControl,
    OutlinedInput,
    InputAdornment,
    IconButton,
    SelectChangeEvent,
    Select,
    MenuItem,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";


import { registerCompany } from "../../actions/conpany";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CompanyForm: FC = () => {


    const paises: string[] = ["Argentina", "Bolivia", "Brasil", "Chile", "Colombia", "Costa Rica", "Cuba", "Ecuador", "El Salvador", "Guatemala", "Honduras", "México", "Nicaragua", "Panamá", "Paraguay", "Perú", "Puerto Rico", "República Dominicana", "Uruguay", "Venezuela"];
    const [pais, setPais] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch()

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const initialValues = {
        name: "",
        email: "",
        password: "",
        country: ""
    };

    const validationSchema = yup.object().shape({
        name: yup.string().required("Nombre requerido"),
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

    const onSubmit = (values: any) => {
        console.log(values)
        dispatch(registerCompany({
            name: values.name,
            email: values.email,
            password: values.password,
            country: pais
        }))
    };




    const handleChange = (event: SelectChangeEvent) => {
        setPais(event.target.value as string);
    };

    return (
        <div>
            <Grid>
                <Paper elevation={10} style={{ width: 400, height: "100%", padding: 20, margin: "50px auto" }}>
                    <Grid textAlign="center">
                        <h5>
                            Crear cuenta
                        </h5>
                    </Grid>
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
                                    sx={{ width: "100%", marginTop: 1 }}
                                    helperText={
                                        <ErrorMessage name="name">
                                            {(message) => (
                                                <span style={{ color: "red" }}>
                                                    {message}
                                                </span>
                                            )}
                                        </ErrorMessage>
                                    }

                                />

                                <Field
                                    as={TextField}
                                    name="email"
                                    label="Email"
                                    size="small"
                                    sx={{ width: "100%", marginTop: 1 }}
                                    helperText={
                                        <ErrorMessage name="email">
                                            {(message) => (
                                                <span style={{ color: "red" }}>{message}</span>
                                            )}
                                        </ErrorMessage>
                                    }
                                />
                                <FormControl sx={{ width: "100%", marginTop: 1, marginBottom: 0.5 }}>

                                    <InputLabel htmlFor="contraseña">
                                        Contraseña
                                    </InputLabel>
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
                                    {
                                        "password" in props.errors && (
                                            <FormHelperText error>
                                                {props.errors.password}
                                            </FormHelperText>
                                        )
                                    }
                                </FormControl>

                                <FormControl sx={{ width: "100%", marginTop: 1 }}>
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



                                <Button
                                    sx={{ marginTop: 10 }}
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

export default CompanyForm;
