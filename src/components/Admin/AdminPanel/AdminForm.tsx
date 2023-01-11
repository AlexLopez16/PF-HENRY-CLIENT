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
import { useDispatch, useSelector } from 'react-redux';
import type {} from 'redux-thunk/extend-redux';
import { registerAdmin } from '../../../actions/Admin';
import {  useNavigate } from 'react-router-dom';
import { alert } from '../../AlertMail/alertMailStudent';
import { SnackBar } from '../../SnackBar/SnackBar';
import { State } from '../../../reducers/rootReducer';

export const AdminForm: FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

const { status } = useSelector((state:State)=>state.response)


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

  const onSubmit = async (values: Values) => {
    await dispatch(
        registerAdmin({
        name: values.name.trim(),
        lastName: values.lastName.trim(),
        email: values.email.trim(),
        password: values.password.trim(),        
      }, () => navigate('/dashboard/admins'))
    );
  };

  return (
    <Box
      sx={{
        maxWidth: '1920px',
      }}
    >
      <SnackBar />
      <div>

        <Grid
          container
          direction='column'
          justifyContent='center'
          alignItems='center'
        >
          <img
            // src={Logo}
            style={{
              justifyContent: 'center',
              marginTop: 35,
            }}
          />
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
                Crear administrador
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
                    inputProps={{ maxLength: 50 }}
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
                    inputProps={{ maxLength: 50 }}
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
                    inputProps={{ maxLength: 50 }}
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
                  >
                    Guardar
                  </Button>
                  <Divider
                    sx={{
                      mb: 1,
                      mt: 1,
                    }}
                  >
                  </Divider>                
                </Form>
                )}
              </Formik>        
          </Paper>
        </Grid>
      </div>
    </Box>
  );
};

export default AdminForm;
