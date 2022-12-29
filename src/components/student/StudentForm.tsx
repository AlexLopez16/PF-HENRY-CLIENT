import { useState, FC } from 'react';
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
  Box,
  Typography,
} from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { GitHubLogin } from '../auth/GitHubLogin';
// import { GoogleLogin } from "../auth/GoogleLogin";

import { useDispatch } from 'react-redux';
import type { } from 'redux-thunk/extend-redux';
import { studentRegister } from '../../actions/student';
import { GoogleLogin } from '@react-oauth/google';
import { gmailLogin } from '../../actions/auth';
import Header from '../NavbarLandingPage/HeaderLanding';
import Footer from '../../pages/LandingPage/Footer';
import { Link } from 'react-router-dom';

export const StudensForm: FC = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const initialValues = {
        name: '',
        lastName: '',
        email: '',
        password: '',
    };
    const validationSchema = yup.object().shape({
        name: yup.string().required('Nombre requerido'),
        lastName: yup.string().required('Apellido requerido'),
        email: yup.string().email('email invalido').required('Email requerido'),
        password: yup
            .string()
            .required('Contraseña requerida')
            .min(8, 'Debe contener min. 8 caracter')
            .matches(/[0-9]/, 'Se requiere un numero')
            .matches(/[a-z]/, 'Se requiere una letra minuscula')
            .matches(/[A-Z]/, 'Se requiere una letra mayuscula')
            .matches(/[^\w]/, 'Se requiere un simbolo'),
    });

    type Values = {
        name: string;
        lastName: string;
        email: string;
        password: string;
    };

    const dispatch = useDispatch();

    const onSubmit = (values: Values) => {
        dispatch(studentRegister(values));
    };

    return (
        <Box
            sx={{
                backgroundColor: 'black',
            }}
        >
            <div>
                <Header />

                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <img
                        src="../public/assets/NABIJASH.png"
                        style={{
                            justifyContent: 'center',
                            marginTop: 10,
                        }}
                    />
                    <Paper
                        sx={{
                            minWidth: 100,
                            maxWidth: 400,
                            mt: 8,
                            padding: 5,
                            mb: 11.5,
                        }}
                    >
                        <Grid
                            textAlign="center"
                            color="primary"
                            sx={{
                                fontFamily: 'montserrat',
                            }}
                        >
                            <h2
                                style={{
                                    fontFamily: 'montserrat',
                                    marginBottom: 5,
                                }}
                            >
                                Registrate
                            </h2>
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
                                        color="info"
                                        sx={{ width: '100%', margin: '10px 0' }}
                                        helperText={
                                            <ErrorMessage name="name">
                                                {(message) => (
                                                    <span
                                                        style={{
                                                            color: '#d6423e',
                                                        }}
                                                    >
                                                        {message}
                                                    </span>
                                                )}
                                            </ErrorMessage>
                                        }
                                    />

                                    <Field
                                        as={TextField}
                                        name="lastName"
                                        label="Apellido"
                                        size="small"
                                        color="info"
                                        sx={{ width: '100%', margin: '10px 0' }}
                                        helperText={
                                            <ErrorMessage name="lastName">
                                                {(message) => (
                                                    <span
                                                        style={{
                                                            color: '#d6423e',
                                                        }}
                                                    >
                                                        {message}
                                                    </span>
                                                )}
                                            </ErrorMessage>
                                        }
                                    />

                  <Field
                    as={TextField}
                    name='email'
                    label='Email'
                    size='small'
                    color='info'
                    sx={{ width: '100%', margin: '10px 0' }}
                    helperText={
                      <ErrorMessage name='email'>
                        {(message) => (
                          <span style={{ color: '#d6423e' }}>{message}</span>
                        )}
                      </ErrorMessage>
                    }
                  />
                  <FormControl sx={{ width: '100%', margin: '10px 0' }}>
                    <InputLabel color='info' htmlFor='contraseña'>
                      Contraseña
                    </InputLabel>
                    <Field
                      as={OutlinedInput}
                      name='password'
                      color='info'
                      label='contraseña'
                      placeholder='Contraseña'
                      type={showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton
                            aria-label='toggle password visibility'
                            onClick={handleClickShowPassword}
                            edge='end'
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      helperText={
                        <ErrorMessage name='password'>
                          {(message) => (
                            <span style={{ color: '#d6423e' }}>{message}</span>
                          )}
                        </ErrorMessage>
                      }
                    />
                    {'password' in props.errors && (
                      <FormHelperText error>
                        {props.errors.password}
                      </FormHelperText>
                    )}
                  </FormControl>
                  <Button
                    sx={{
                      fontFamily: 'montserrat',
                      fontWeight: 'bold',
                    }}
                    type='submit'
                    variant='contained'
                    fullWidth
                    color='secondary'
                    disabled={props.isSubmitting}
                  >
                    Crear cuenta
                  </Button>
                  <Divider>
                    <span>O</span>
                  </Divider>
                  <GitHubLogin />
                  <GoogleLogin
                    width='340px'
                    logo_alignment='center'
                    type='standard'
                    theme='filled_blue'
                    shape='square'
                    size='large'
                    onSuccess={(credentialResponse) => {
                      dispatch(
                        gmailLogin(credentialResponse.credential, 'student'),
                      );
                    }}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                    text='continue_with'
                    auto_select={false}
                  />
                </Form>
              )}
            </Formik>

            <Typography
              textAlign='center'
              mt='20px'
              fontFamily='poppins'
              fontSize='15px'
            >
              ¿Ya tienes una cuenta?
              <Link
                to='/login'
                style={{ textDecoration: 'underline', color: 'black' }}
              >
                <p>Ingresa</p>
              </Link>
            </Typography>

          </Paper>
        </Grid>
      </div>
      <Footer />
    </Box>
  );
};

export default StudensForm;
