import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type {} from 'redux-thunk/extend-redux';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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
    FormHelperText,
    Box,
} from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import Divider from '@mui/material/Divider';

import { GitHubLogin } from './GitHubLogin';
import { GoogleLogin } from '@react-oauth/google';

import { startLogin, gmailLogin } from '../../actions/auth';
import { State } from '../../reducers/rootReducer';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../NavbarLandingPage/HeaderLanding';
import Footer from '../../pages/LandingPage/Footer';

import Logo from '../../assets/NABIJASH.png';
import { SnackBar } from '../SnackBar/SnackBar';

export const LoginScreen: FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { status } = useSelector((state: State) => state.auth);

    const [isError, setIsError] = useState(false);

    const paperStyle = {
        padding: 30,

        height: '100%',
        width: 380,
        margin: '73px auto',
    };

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Por favor ingresa un email válido.')
            .required('Este valor debe ser un correo válido.'),
    });

    const onSubmit = (values: any, props: any) => {
        dispatch(
            startLogin({
                email: values.email.toLowerCase(),
                password: values.password,
            })
        );

        setTimeout(() => {
            if (status === '200') {
                props.resetForm();
            } else {
                setIsError(true);
            }
            props.setSubmitting(false);
        }, 1000);
    };

    const onChangeHandler = () => {
        setIsError(false);
    };

    return (
        <Box
            sx={{
                backgroundColor: 'black',
            }}
        >
            <div>
                <Header />
                <SnackBar
                    successMsg=" Solicitud enviada con exito!"
                    errorMsg="Por Favor Registrate"
                />
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <img
                        src={Logo}
                        style={{
                            justifyContent: 'center',
                            marginTop: 10,
                        }}
                    />
                    <Paper
                        elevation={10}
                        style={paperStyle}
                        sx={{
                            minWidth: 100,
                            maxWidth: 400,
                            mt: 8,
                            p: 5,
                            mb: 12.5,
                        }}
                    >
                        <Grid textAlign="center">
                            <h2
                                style={{
                                    fontFamily: 'Montserrat',
                                    marginBottom: 5,
                                }}
                            >
                                Ingresar
                            </h2>
                        </Grid>

                        <Divider></Divider>
                        {isError && (
                            <Grid
                                color="primary"
                                textAlign="center"
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    fontFamily: 'montserrat',
                                }}
                            >
                                <FormHelperText
                                    error
                                    sx={{ width: 'auto', fontSize: '15px' }}
                                >
                                    El correo/contraseña son incorrectos
                                </FormHelperText>
                            </Grid>
                        )}
                        <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                            validationSchema={validationSchema}
                        >
                            {(props) => (
                                <Form>
                                    <Field
                                        as={TextField}
                                        name="email"
                                        label="Email"
                                        placeholder="Email"
                                        color="info"
                                        fontFamily="montserrat"
                                        error={isError}
                                        onChange={(
                                            e: React.FormEvent<HTMLInputElement>
                                        ) => {
                                            props.handleChange(e);
                                            onChangeHandler();
                                        }}
                                        sx={{
                                            margin: '10px 0px',
                                            width: '100%',
                                        }}
                                        helperText={
                                            <ErrorMessage name="email">
                                                {(msg) => (
                                                    <span
                                                        style={{
                                                            color: '#d6423e',
                                                        }}
                                                    >
                                                        {msg}
                                                    </span>
                                                )}
                                            </ErrorMessage>
                                        }
                                    />
                                    <FormControl
                                        sx={{
                                            margin: '10px 0',
                                            width: '100%',
                                            fontFamily: 'montserrat',
                                        }}
                                    >
                                        <InputLabel
                                            color="info"
                                            htmlFor="password"
                                        >
                                            Password
                                        </InputLabel>
                                        <Field
                                            as={OutlinedInput}
                                            name="password"
                                            type={
                                                showPassword
                                                    ? 'text'
                                                    : 'password'
                                            }
                                            required
                                            color="info"
                                            error={isError}
                                            onChange={(
                                                e: React.FormEvent<HTMLInputElement>
                                            ) => {
                                                props.handleChange(e);
                                                onChangeHandler();
                                            }}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={
                                                            handleClickShowPassword
                                                        }
                                                        edge="end"
                                                    >
                                                        {showPassword ? (
                                                            <VisibilityOff />
                                                        ) : (
                                                            <Visibility />
                                                        )}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            label="Password"
                                            placeholder="Password"
                                        />
                                    </FormControl>

                                    <Typography
                                        fontSize="11px"
                                        textAlign="right"
                                        mb="10px"
                                    >
                                        <Link
                                            to="/forgotPassword"
                                            color="inherit"
                                        >
                                            ¿Olvidaste tu contraseña?
                                        </Link>
                                    </Typography>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        fullWidth
                                        color="secondary"
                                        style={{
                                            margin: '20px 0',
                                            fontFamily: 'montserrat',
                                            fontWeight: 'bold',
                                        }}
                                        disabled={props.isSubmitting}
                                    >
                                        Ingresa
                                    </Button>
                                    <Divider>
                                        <span style={{ color: '#8d8a8a' }}>
                                            O
                                        </span>
                                    </Divider>
                                    <GitHubLogin />
                                    <div style={{ marginTop: '10px' }}>
                                        <GoogleLogin
                                            width="340px"
                                            logo_alignment="center"
                                            type="standard"
                                            theme="filled_blue"
                                            shape="square"
                                            size="large"
                                            onSuccess={(
                                                credentialResponse: any
                                            ) => {
                                                dispatch(
                                                    gmailLogin(
                                                        credentialResponse.credential,
                                                        ''
                                                    )
                                                );

                                                setTimeout(
                                                    () => navigate('/register'),

                                                    3000
                                                );
                                            }}
                                            onError={() => {
                                                console.log('Login Failed');
                                            }}
                                            text="continue_with"
                                            auto_select={false}
                                        />
                                    </div>
                                </Form>
                            )}
                        </Formik>

                        <Typography
                            textAlign="center"
                            mt="20px"
                            ml="20"
                            mr="20"
                            fontFamily="poppins"
                            fontSize="15px"
                        >
                            ¿Aún no has creado tu cuenta?
                            <Link
                                style={{
                                    color: 'black',
                                    textDecoration: 'underline',
                                }}
                                to="/register"
                            >
                                Regístrate
                            </Link>
                        </Typography>
                    </Paper>
                </Grid>
            </div>
            <Footer />
        </Box>
    );
};
