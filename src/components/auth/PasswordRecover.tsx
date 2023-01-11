import React, { FC, useState } from 'react';
import {
  Grid,
  // InputLabel,
  OutlinedInput,
  Paper,
  // TextField,
  InputAdornment,
  IconButton,
  FormControl,
  Button,
  Typography,
  // Link,
  FormHelperText,
  Box,
} from '@mui/material';
// import { paperStyle } from '../../styles/Profile/HeaderStyles';
import {
  // ErrorMessage,
  Field,
  Form,
  Formik,
  // FormikValues,
  // validateYupSchema,
} from 'formik';
import * as yup from 'yup';
// import { GridEvents } from '@mui/x-data-grid';
import {
  // AlignHorizontalCenter,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import { useSearchParams, Navigate, useNavigate } from 'react-router-dom';
import { recoverPassword } from '../../actions/auth';
import { useDispatch } from 'react-redux';
import Header from '../NavbarLandingPage/HeaderLanding';
import Footer from '../../pages/LandingPage/Footer';
import logo from '../../assets/NABIJASH.png';
import { SnackBar } from '../SnackBar/SnackBar';
import bg from '../../assets/bg.png';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
export const PasswordRecover: FC = () => {
  const Navigate = useNavigate();
  const GoBack = () => {
    navigate('/login');
  };

  const dispatch = useDispatch();
  const [queryParameters] = useSearchParams();

  let tokenQuery = queryParameters.get('token');
  let id: any = queryParameters.get('id');
  let rol: any = queryParameters.get('rol');
  if (tokenQuery != null) {
    localStorage.setItem('token', tokenQuery);
    localStorage.setItem('id', id);
    localStorage.setItem('rol', rol);
  }
  const navigate = useNavigate();
  let token: String | null = localStorage.getItem('token');

  const [sendRequest, setSendRequest] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const initialValues = {
    password: '',
    confirmPassword: '',
  };
  const validationSchema = yup.object().shape({
    password: yup
      .string()
      .required('Contraseña requerida')
      .min(8, 'Debe contener min. 8 caracter')
      .matches(/[0-9]/, 'Se requiere un numero')
      .matches(/[a-z]/, 'Se requiere una letra minuscula')
      .matches(/[A-Z]/, 'Se requiere una letra mayuscula')
      .matches(/[^\w]/, 'Se requiere un simbolo'),
    confirmPassword: yup
      .string()
      .required('Contraseña requerida')
      .test({
        name: 'max',
        exclusive: false,
        params: {},
        message: 'las contraseñas no son iguales',
        test: function (value) {
          return value === this.parent.password;
        },
      }),
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleClickShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const onSubmit: any = (valores: any, { resetForm }: any) => {
    resetForm();
    console.log(valores);
    dispatch(recoverPassword(valores.confirmPassword, token));
    // setSendRequest(true);
    // setTimeout(() => setSendRequest(false), 5000);
    setTimeout(() => navigate('/login'), 4000);
  };
  return (
    <Box
      sx={{
        backgroundImage: `url(${bg})`,
        maxWidth: '1920px',
      }}
    >
      <SnackBar successMsg=' Solicitud enviada con exito!' />
      <Header />
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
      >
        <img
          src={logo}
          style={{
            justifyContent: 'center',
            marginTop: 100,
          }}
        />
        <Paper
          elevation={10}
          sx={{
            width: 650,
            height: 500,
            mt: 10,
            mb: 5,
            p: 10,
            pt: 6,
            borderRadius: 10,
            backgroundColor: 'black',
            boxShadow:
              'rgba(255, 255, 255, 255.16) 0px 1px 4px, rgb(255, 255, 255) 0px 0px 0px 3px',
          }}
        >
          <Grid textAlign='center'>
            <Typography
              variant='h4'
              sx={{
                fontFamily: 'montserrat',
                mb: 5,
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              Nueva contraseña
            </Typography>
          </Grid>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form>
                <FormControl
                  sx={{
                    textAlign: 'center',
                    width: '100%',
                    margin: '10px 0',
                    color: 'white',
                  }}
                >
                  <Typography
                    variant='subtitle1'
                    sx={{ fontFamily: 'montserrat', color: 'white' }}
                  >
                    Escribe tu nueva contraseña
                  </Typography>
                  <Field
                    variant='contained'
                    onChange={props.handleChange}
                    type={showPassword ? 'text' : 'password'}
                    as={OutlinedInput}
                    name='password'
                    size='small'
                    color='primary'
                    placeholder='Escribe la nueva contraseña'
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
                      margin: '10px 0',
                    }}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          color='primary'
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
                  sx={{
                    textAlign: 'center',
                    width: '100%',
                    margin: '10px 0',
                    color: 'white',
                  }}
                >
                  <Typography
                    variant='subtitle1'
                    sx={{ fontFamily: 'montserrat', color: 'white' }}
                  >
                    Confirmar Contraseña
                  </Typography>
                  <Field
                    onChange={props.handleChange}
                    type={showPassword2 ? 'text' : 'password'}
                    as={OutlinedInput}
                    name='confirmPassword'
                    placeholder='Confirma la contraseña'
                    size='small'
                    sx={{
                      color: 'white',
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
                      margin: '10px 0',
                    }}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={handleClickShowPassword2}
                          edge='end'
                          color='primary'
                        >
                          {showPassword2 ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  {'confirmPassword' in props.errors && (
                    <FormHelperText error>
                      {props.errors.confirmPassword}
                    </FormHelperText>
                  )}
                </FormControl>

                <Button
                  type='submit'
                  variant='contained'
                  fullWidth
                  color='primary'
                  disabled={props.isSubmitting}
                  sx={{
                    mt: 2,
                    mb: 5,
                    fontFamily: 'montserrat',
                    borderRadius: 10,
                    fontWeight: 'bold',
                  }}
                >
                  Cambiar Contraseña
                </Button>
                {/* {sendRequest && (
                                    <Typography
                                        variant="body2"
                                        sx={{ marginTop: 1, marginLeft: 2 }}
                                    >
                                        Solicitud enviada con exito
                                    </Typography>
                                )} */}
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
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
