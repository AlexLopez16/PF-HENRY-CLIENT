import { useState } from 'react';
import { FC } from 'react';
import {
  Grid,
  Button,
  Box,
  Paper,
  FormHelperText,
  Divider,
} from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

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
} from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';

import { registerCompany } from '../../actions/conpany';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { gmailLogin } from '../../actions/auth';
import Header from '../NavbarLandingPage/HeaderLanding';
import Footer from '../../pages/LandingPage/Footer';

const CompanyForm: FC = () => {
  const paises: string[] = [
    'Argentina',
    'Bolivia',
    'Brasil',
    'Chile',
    'Colombia',
    'Costa Rica',
    'Cuba',
    'Ecuador',
    'El Salvador',
    'Guatemala',
    'Honduras',
    'México',
    'Nicaragua',
    'Panamá',
    'Paraguay',
    'Perú',
    'Puerto Rico',
    'República Dominicana',
    'Uruguay',
    'Venezuela',
  ];
  const [pais, setPais] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const initialValues = {
    name: '',
    email: '',
    password: '',
    country: '',
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required('Nombre requerido'),
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

  const onSubmit = (values: any) => {
    console.log(values);
    dispatch(
      companySingUp({
        name: values.name,
        email: values.email,
        password: values.password,
        country: pais,
      }),
    );
  };

  const handleChange = (event: SelectChangeEvent) => {
    setPais(event.target.value as string);
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
          direction='column'
          justifyContent='center'
          alignItems='center'
        >
          <img
            src='../public/assets/NABIJASH.png'
            style={{
              justifyContent: 'center',
              marginTop: 10,
            }}
          />
          <Paper
            elevation={10}
            sx={{
              minWidth: 100,
              maxWidth: 400,
              mt: 8,
              padding: 5,
              mb: 14.7,
            }}
          >
            <Grid textAlign='center' fontFamily='montserrat' mb='20px'>
              <h2>Registrarse</h2>
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
                    label='Nombre'
                    size='small'
                    color='info'
                    sx={{ width: '100%', marginTop: 1 }}
                    helperText={
                      <ErrorMessage name='name'>
                        {(message) => (
                          <span style={{ color: '#d6423e' }}>{message}</span>
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
                    sx={{ width: '100%', marginTop: 1 }}
                    helperText={
                      <ErrorMessage name='email'>
                        {(message) => (
                          <span style={{ color: '#d6423e' }}>{message}</span>
                        )}
                      </ErrorMessage>
                    }
                  />
                  <FormControl
                    sx={{ width: '100%', marginTop: 1, marginBottom: 0.5 }}
                  >
                    <InputLabel color='info' htmlFor='contraseña'>
                      Contraseña
                    </InputLabel>
                    <Field
                      color='info'
                      as={OutlinedInput}
                      name='password'
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
                    />
                    {'password' in props.errors && (
                      <FormHelperText error>
                        {props.errors.password}
                      </FormHelperText>
                    )}
                  </FormControl>

                  <FormControl
                    color='info'
                    sx={{ width: '100%', marginTop: 1, marginBottom: 2 }}
                  >
                    <InputLabel color='info' id='demo-simple-select-label'>
                      Nacionalidad
                    </InputLabel>
                    <Select
                      id='demo-simple-select'
                      labelId='demo-simple-select-label'
                      label='Nacionalidad'
                      value={pais}
                      onChange={handleChange}
                    >
                      {paises.map((pais) => (
                        <MenuItem value={pais}>{pais}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <Divider
                    sx={{
                      mb: 2,
                    }}
                  >
                    <span>O</span>
                  </Divider>

                  <GoogleLogin
                    width='340px'
                    logo_alignment='center'
                    type='standard'
                    theme='filled_blue'
                    shape='square'
                    size='large'
                    onSuccess={(credentialResponse) => {
                      dispatch(
                        gmailLogin(credentialResponse.credential, 'company'),
                      );
                    }}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                    text='continue_with'
                    auto_select={false}
                  />
                  <Button
                    sx={{ marginTop: 2, fontFamily: 'poppins' }}
                    type='submit'
                    variant='contained'
                    fullWidth
                    color='secondary'
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
      <Footer />
    </Box>
  );
};

export default CompanyForm;
