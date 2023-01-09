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
  Container,
} from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { GitHubLogin } from '../auth/GitHubLogin';
// import { GoogleLogin } from "../auth/GoogleLogin";

import { useDispatch, useSelector } from 'react-redux';
import type {} from 'redux-thunk/extend-redux';
import { studentRegister } from '../../actions/student';
import { GoogleLogin } from '@react-oauth/google';
import { gmailLogin } from '../../actions/auth';
import Header from '../NavbarLandingPage/HeaderLanding';
import Footer from '../../pages/LandingPage/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { alert } from '../AlertMail/alertMailStudent';
import studentRegisterbg from '../../assets/studentRegister.png';
import Logo from '../../assets/NABIJASH.png';
import { SnackBar } from '../SnackBar/SnackBar';
import { State } from '../../reducers/rootReducer';

export const StudensForm: FC = () => {
  const Navigate = useNavigate();
  const GoBack = () => {
    Navigate('/');
  };
  const [showPassword, setShowPassword] = useState(false);

let condicion = useSelector((state:State)=>state.response)


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
    dispatch(
      studentRegister({
        name: values.name.trim(),
        lastName: values.lastName.trim(),
        email: values.email.trim(),
        password: values.password.trim(),
      }),
    );
    {condicion.status>400
        ?dispatch(alert)
        : "null"
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${studentRegisterbg})`,
        maxWidth: '1920px',
      }}
    >
      <SnackBar />
      <div>
        <Header />

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
              marginTop: 35,
            }}
          />
          <Typography
            sx={{
              color: 'black',
              fontFamily: 'montserrat',
              fontWeight: 'bold',
              fontSize: 25,
              mt: 5,
              px: 5,
              backgroundColor: '#ffff50',
              borderRadius: 5,
            }}
          >
            ¡Adéntrate en el mundo IT, y colabora en proyectos reales de
            empresas reales!
          </Typography>
          <Paper
            sx={{
              width: 500,
              mt: 10,
              mb: 5,
              p: 5,
              pt: 4,
              borderRadius: 10,
              backgroundColor: 'black',
              boxShadow:
                'rgba(255, 255, 255, 255.16) 0px 1px 4px, rgb(255, 255, 255) 0px 0px 0px 3px',
            }}
           >
            <Grid
              textAlign='center'
              color='primary'
              sx={{
                fontFamily: 'montserrat',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'montserrat',
                  marginBottom: 5,
                  fontSize: 25,
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                Registrate
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
                    as={TextField}
                    name='name'
                    placeholder='Nombre'
                    size='small'
                    fontFamily='montserrat'
                    color='primary'
                    sx={{
                    
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
                    helperText={
                      <ErrorMessage name='name'>
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
                    name='lastName'
                    size='small'
                    fontFamily='montserrat'
                    color='primary'
                    placeholder='Apellido'
                    sx={{
                      
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
                    helperText={
                      <ErrorMessage name='lastName'>
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
                    size='small'
                    fontFamily='montserrat'
                    color='primary'
                    placeholder='Email'
                    sx={{
                      
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
                    helperText={
                      <ErrorMessage name='email'>
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
                  <FormControl sx={{ width: '100%', margin: '10px 0' }}>

                    <Field
                      as={OutlinedInput}
                      name='password'
                      color='primary'
                      size='small'
                      placeholder='Contraseña'
                      fontFamily='montserrat'
                      type={showPassword ? 'text' : 'password'}
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

                        label: { color: 'white' },
                        input: { color: 'white' },
                        margin: '10px 0px',
                        width: '100%',
                      }}
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton
                            aria-label='toggle password visibility'
                            onClick={handleClickShowPassword}
                            edge='end'
                            color='primary'
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    {'password' in props.errors && (
                      <FormHelperText sx={{ color: '#d6423e' }}>
                        {props.errors.password}
                      </FormHelperText>
                    )}
                  </FormControl>
                  <Button
                    sx={{
                      fontFamily: 'montserrat',
                      fontWeight: 'bold',
                      mb:1,
                    }}
                    type='submit'
                    variant='contained'
                    fullWidth
                    color='secondary'
                    disabled={props.isSubmitting}
                  >
                    Crear cuenta
                  </Button>
                  <Divider
                    sx={{
                      mb: 1,
                      mt: 1,
                    }}
                  >
                    <span style={{color:'white'}}>O</span>
                  </Divider>
                  <GitHubLogin />
                  <GoogleLogin
                   
                    logo_alignment='center'
                    type='standard'
                    theme='outline'
                    shape='square'
                    size='large'
                    onSuccess={(credentialResponse) => {
                      dispatch(
                        gmailLogin(
                          credentialResponse.credential as string,
                          'student',
                        ),
                      );
                    }}
                    //revisar este console.log
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
               sx={{
                  display:'flex',
                  flexDirection: 'column',
                 justifyContent: 'center',
                textAlign: 'center',
                mt: 4,
                fontFamily: 'poppins',
                fontSize: '15px',
                color: 'white',
              }}
            >
              ¿Ya tienes una cuenta?
              <Link
                to='/login'
                style={{
                    textDecoration: 'none',
                    color: '#ffff01',
                  }}
              >
                Ingresa
              </Link>
            </Typography>
          
          </Paper>
        </Grid>
      </div>
      <Grid
        container
        direction='column'
        justifyContent='flex-start'
        alignItems='center'
       >
        <FormControl>
          <Button
            onClick={GoBack}
            size='small'
            variant='contained'
            color='secondary'
            sx={{
              boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
              fontFamily: 'montserrat',
              fontWeight: 'bold',
              mb: 20,
            }}
          >
            Regresar
          </Button>
        </FormControl>
      </Grid>
      <Footer />
    </Box>
  );
};

export default StudensForm;
