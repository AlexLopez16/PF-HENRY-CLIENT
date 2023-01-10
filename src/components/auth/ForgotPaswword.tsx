import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  FormControl,
  Container,
  // InputLabel,
  // OutlinedInput,
  // InputAdornment,
  // IconButton,
  // FormControl,
  // Link,
  // FormHelperText,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';

import { forgotPassword } from '../../actions/auth';
import Header from '../NavbarLandingPage/HeaderLanding';
import Footer from '../../pages/LandingPage/Footer';
import { SnackBar } from '../SnackBar/SnackBar';
import logo from '../../assets/NABIJASH.png';
import bg from '../../assets/bg.png';

export const ForgotPassword: FC = () => {
  
  const navigate = useNavigate();
  const GoBack = () => {
    navigate('/login');
  };
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
        backgroundImage: `url(${bg})`,
        maxWidth: '1920px',
      }}
    >
      <SnackBar
        successMsg=' Solicitud enviada con exito,porfavor
                                        revise su email!'
      />
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
            marginBottom: 50,
          }}
        />
        <Paper
          elevation={10}
          sx={{
            width: 650,
            height: 400,
            mt: 8,
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
              fontFamily='montserrat'
              variant='h4'
              sx={{
                fontFamily: 'montserrat',
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              ¿Olvidaste tu contraseña?
            </Typography>
            <Typography
              fontFamily='montserrat'
              variant='subtitle1'
              sx={{
                fontFamily: 'montserrat',
                mb: 3,
                mt: 5,
                color: 'white',
                fontStyle: 'italic',
              }}
            >
              Escribe tu email y te enviaremos instrucciones para crear una
              nueva.
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
                  <Field
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.Email}
                    as={TextField}
                    name='Email'
                    label='Email'
                    size='small'
                    fontFamily='montserrat'
                    sx={{
                      width: '100%',
                      margin: '10px 0',
                      pb: 1,

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
                    }}
                    helperText={
                      <ErrorMessage name='Email'>
                        {(message) => (
                          <span style={{ color: '#d6423e' }}>{message}</span>
                        )}
                      </ErrorMessage>
                    }
                  />
                  <Button
                    type='submit'
                    variant='contained'
                    fullWidth
                    color='primary'
                    disabled={props.isSubmitting}
                    sx={{
                      fontFamily: 'montserrat',
                      fontWeight: 'bold',
                      borderRadius: 10,
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
                </FormControl>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
      <Grid
      container
      direction='column'
      justifyContent='flex-start'
      alignItems='center'>
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
            
            mb:20
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
