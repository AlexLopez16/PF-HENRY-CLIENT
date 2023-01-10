import { useState } from 'react';
import { FC } from 'react';
import {
  Grid,
  Button,
  Box,
  Paper,
  FormHelperText,
  Divider,
  Typography,
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
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { registerCompany } from '../../actions/company';
import { useDispatch, useSelector } from 'react-redux';
import {
  Link,
  useNavigate,
  //  useNavigate
} from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { gmailLogin } from '../../actions/auth';
import Header from '../NavbarLandingPage/HeaderLanding';
import Footer from '../../pages/LandingPage/Footer';
import companyRegisterbg from '../../assets/companyRegisterbg.png';
import Logo from '../../assets/NABIJASH.png';
import { alert } from '../AlertMail/alertMailStudent';
import { SnackBar } from '../SnackBar/SnackBar';
import { State } from '../../reducers/rootReducer';

const CompanyForm: FC = () => {
  const Navigate = useNavigate();
  const GoBack = () => {
    Navigate('/');
  };

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

  let condicion = useSelector((state: State) => state.response);

  const onSubmit = (values: any) => {
    dispatch(
      registerCompany({
        name: values.name,
        email: values.email,
        password: values.password,
        country: pais,
      }),
    );
    {
      condicion.status > 400 ? dispatch(alert) : 'null';
    }
  };

  const handleChange = (event: SelectChangeEvent) => {
    setPais(event.target.value as string);
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${companyRegisterbg})`,
        maxWidth: '1920px',
      }}
    >
      <div>
        <SnackBar />
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
           ¡Crea proyectos, publícalos y encuentra #TalentosHenry para obtener grandes resultados!
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
                  marginBottom: 2,
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
                  variant='outlined'
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
                      color='primary'
                      size='small'
                      name='password'
                      placeholder='Contraseña'
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
                            color='secondary'
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
                    variant='outlined'
                    color='primary'
                    sx={{
                      width: '100%',
                      marginTop: 1,
                      marginBottom: 2,
                      fontFamily: 'montserrat',
                    }}
                  >
                    <Select
                      color='primary'
                      value={pais}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
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
                          borderColor: 'white',
                        },
                        '.MuiSvgIcon-root ': {
                          fill: 'white !important',
                        },

                        input: { color: 'white' },
                        margin: '10px 0px',
                        width: '100%',
                      }}
                    >
                      <MenuItem value=''>
                        <p>Selecciona un país</p>
                      </MenuItem>
                      {paises.map((pais) => (
                        <MenuItem key={pais} value={pais}>
                          {pais}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

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
                  <Divider
                    sx={{
                      mb: 2,
                      mt: 2,
                    }}
                  >
                    <span style={{ color: 'white' }}>O</span>
                  </Divider>

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
                          'company',
                        ),
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
              sx={{
                display: 'flex',
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
          startIcon={<ArrowBackIosNewIcon />}
            onClick={GoBack}
            size='small'
            variant='contained'
            color='secondary'
            sx={{
              boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
              fontFamily: 'montserrat',
              fontWeight: 'bold',
              mb: 15,
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

export default CompanyForm;
