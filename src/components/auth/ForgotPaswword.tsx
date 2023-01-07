import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import {
    Grid,
    Paper,
    TextField,
    Button,
    Typography,
    Box,
    // InputLabel,
    // OutlinedInput,
    // InputAdornment,
    // IconButton,
    // FormControl,
    // Link,
    // FormHelperText,
} from '@mui/material';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';

import { forgotPassword } from '../../actions/auth';
import Header from '../NavbarLandingPage/HeaderLanding';
import Footer from '../../pages/LandingPage/Footer';
import { SnackBar } from '../SnackBar/SnackBar';
import logo from '../../assets/NABIJASH.png';

export const ForgotPassword: FC = () => {
    const dispatch = useDispatch();

    const [sendRequest, setSendRequest] = useState(false);
    const validationSchema = yup.object().shape({
        Email: yup.string().email('Email invalido').required('Email requerido'),
    });
    const initialValues = {
        Email: '',
    };

    const onSubmit = (valores: any, { resetForm }: any) => {
        resetForm();
        dispatch(forgotPassword(valores.Email));
        // setSendRequest(true);
        // setTimeout(() => setSendRequest(false), 5000);
    };
    return (
        <Box
            sx={{
                backgroundColor: 'black',
            }}
        >
            <SnackBar
                successMsg=" Solicitud enviada con exito,porfavor
                                        revise su email!"
            />
            <Header />
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <img
                    src={logo}
                    style={{
                        justifyContent: 'center',
                        marginTop: 10,
                    }}
                />
                <Paper
                    elevation={10}
                    style={{
                        width: 400,
                        height: '105%',
                        padding: 20,
                        margin: '50px auto',
                        marginTop: 150,
                        marginBottom: 237,
                    }}
                >
                    <Grid textAlign="center">
                        <Typography
                            fontFamily="montserrat"
                            variant="h4"
                            sx={{ pb: 2 }}
                        >
                            ¿Olvidaste tu contraseña?
                        </Typography>
                        <Typography
                            fontFamily="montserrat"
                            variant="subtitle1"
                            sx={{ pb: 1 }}
                        >
                            Escribe tu email y te enviaremos instrucciones para
                            reseter la constraseña
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
                                    color="info"
                                    fontFamily="montserrat"
                                    sx={{
                                        width: '100%',
                                        margin: '10px 0',
                                        pb: 1,
                                    }}
                                    helperText={
                                        <ErrorMessage name="Email">
                                            {(message) => (
                                                <span
                                                    style={{ color: '#d6423e' }}
                                                >
                                                    {message}
                                                </span>
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
                                    style={{
                                        fontFamily: 'montserrat',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Enviar solicitud
                                </Button>
                                {/* {sendRequest && (
                                    <Typography
                                        variant="body2"
                                        sx={{ marginTop: 1, marginLeft: 2 }}
                                    >
                                        Solicitud enviada con exito,porfavor
                                        revise su email!
                                    </Typography>
                                )} */}
                            </Form>
                        )}
                    </Formik>
                </Paper>
            </Grid>
            <Footer />
        </Box>
    );
};
