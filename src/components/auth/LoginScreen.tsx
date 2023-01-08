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
import bg from '../../assets/bg.png';
import Logo from '../../assets/NABIJASH.png';
import { SnackBar } from '../SnackBar/SnackBar';

export const LoginScreen: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector((state: State) => state.auth);

  const [isError, setIsError] = useState(false);

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
      }),
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
    <>
      <Box
        sx={{
          backgroundImage: `url(${bg})`,
          maxWidth: '1920px',
          height: 1000,
        }}
      >
        <div>
          <Header />
          <SnackBar successMsg=' Solicitud enviada con exito!' />
          <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
          >
            <img
              src={Logo}
              style={{
                justifyContent: 'center',
                marginTop: 50,
              }}
            />
            <Paper
              elevation={10}
              sx={{
                width: 500,
                height: 600,
                mt: 10,
                mb: 20,
                p: 10,
                pt: 6,
                borderRadius: 10,
                backgroundColor: 'black',
                boxShadow:
                  'rgba(255, 255, 255, 255.16) 0px 1px 4px, rgb(255, 255, 255) 0px 0px 0px 3px',
              }}
            >
              <Grid textAlign='center'>
                <h2
                  style={{
                    fontFamily: 'Montserrat',
                    marginBottom: 15,
                    color: 'white',
                  }}
                >
                  Ingresar
                </h2>
              </Grid>

              <Divider></Divider>
              {isError && (
                <Grid
                  color='primary'
                  textAlign='center'
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
                      name='email'
                      placeholder='Email'
                      fontFamily='montserrat'
                      color='primary'
                      sx={{
                        color: 'white',
                        boxShadow: 'rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset',
                        '.MuiOutlinedInput-notchedOutline': {
                          borderColor: 'white',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'white',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#ffff01',
                        },

                        input: { color: 'white' },
                        margin: '10px 0px',
                        width: '100%',
                      }}
                      error={isError}
                      onChange={(e: React.FormEvent<HTMLInputElement>) => {
                        props.handleChange(e);
                        onChangeHandler();
                      }}
                      helperText={
                        <ErrorMessage name='email'>
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
                      <Field
                        as={OutlinedInput}
                        fontFamily='montserrat'
                        name='password'
                        type={showPassword ? 'text' : 'password'}
                        required
                        color='primary'
                        sx={{
                          color: 'white',
                          boxShadow:
                            'rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset',
                          '.MuiOutlinedInput-notchedOutline': {
                            borderColor: 'white',
                          },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'white',
                          },
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#ffff01',
                          },

                          label: { color: 'white' },
                          input: { color: 'white' },
                        }}
                        error={isError}
                        onChange={(e: React.FormEvent<HTMLInputElement>) => {
                          props.handleChange(e);
                          onChangeHandler();
                        }}
                        endAdornment={
                          <InputAdornment position='end'>
                            <IconButton
                              aria-label='toggle password visibility'
                              onClick={handleClickShowPassword}
                              edge='end'
                              color='primary'
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        placeholder='Password'
                      />
                    </FormControl>

                    <Typography
                      sx={{
                        fontSize: '11px',
                        textAlign: 'right',

                        color: 'white',
                      }}
                    >
                      <Link
                        to='/forgotPassword'
                        style={{ color: 'white', fontFamily: 'poppins' }}
                      >
                        ¿Olvidaste tu contraseña?
                      </Link>
                    </Typography>
                    <Button
                      type='submit'
                      variant='contained'
                      fullWidth
                      color='primary'
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
                      <span style={{ color: '#8d8a8a' }}>O</span>
                    </Divider>
                    <GitHubLogin />
                    <div style={{ marginTop: '10px' }}>
                      <GoogleLogin
                        logo_alignment='center'
                        type='standard'
                        theme='outline'
                        shape='square'
                        size='large'
                        onSuccess={(credentialResponse: any) => {
                          dispatch(
                            gmailLogin(credentialResponse.credential, ''),
                          );

                          setTimeout(
                            () => navigate('/register'),

                            3000,
                          );
                        }}
                        onError={() => {
                          console.log('Login Failed');
                        }}
                        text='continue_with'
                        auto_select={false}
                      />
                    </div>
                  </Form>
                )}
              </Formik>

              <Typography
                sx={{
                  justifyContent: 'center',
                  textAlign: 'center',
                  mt: 2,
                  pb: 20,
                  fontFamily: 'poppins',
                  fontSize: '15px',
                  color: 'white',
                }}
              >
                ¿Aún no has creado tu cuenta?
                <Link
                  style={{
                    textDecoration: 'none',
                    color: '#ffff01',
                    paddingLeft: 20,
                  }}
                  to='/register'
                >
                  Regístrate
                </Link>
              </Typography>
            </Paper>
          </Grid>
        </div>
      </Box>
      <Footer />
    </>
  );
};
