import React, { FC, useState } from 'react';
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
  Link,
  FormHelperText,
  Box,
} from '@mui/material';
import { paperStyle } from '../../styles/Profile/HeaderStyles';
import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik';
import * as yup from 'yup';
import { GridEvents } from '@mui/x-data-grid';
import { AlignHorizontalCenter } from '@mui/icons-material';
import Header from '../NavbarLandingPage/HeaderLanding';
import Footer from '../../pages/LandingPage/Footer';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../actions/auth';

export const ForgotPassword: FC = () => {
  const dispatch=useDispatch()
  
  const [sendRequest, setSendRequest] = useState(false);
  const validationSchema = yup.object().shape({
    Email: yup.string().email('Email invalido').required('Email requerido'),
  });
  const initialValues = {
    Email: '',
  };

  const onSubmit = (valores: string, { resetForm }) => {
    resetForm();

    dispatch(forgotPassword(valores.Email))
    
    setSendRequest(true);
    setTimeout(() => setSendRequest(false), 5000);
  };
  return (
    <Box
      sx={{
        backgroundColor: 'black',
      }}
    >
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
          style={{
            width: 400,
            height: '105%',
            padding: 20,
            margin: '50px auto',
            marginTop: 150,
            marginBottom: 237,
          }}
        >
          <Grid textAlign='center'>
            <Typography fontFamily='montserrat' variant='h4' sx={{ pb: 2 }}>
              ¿Olvidaste tu contraseña?
            </Typography>
            <Typography
              fontFamily='montserrat'
              variant='subtitle1'
              sx={{ pb: 1 }}
            >
              Escribe tu email y te enviaremos instrucciones para reseter la
              constraseña
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
                  name='Email'
                  label='Email'
                  size='small'
                  color='info'
                  fontFamily='montserrat'
                  sx={{
                    width: '100%',
                    margin: '10px 0',
                    pb: 1,
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
                  style={{
                    fontFamily: 'montserrat',
                    fontWeight: 'bold',
                  }}
                >
                  Enviar solicitud
                </Button>
                {sendRequest && (
                  <Typography
                    variant='body2'
                    sx={{ marginTop: 1, marginLeft: 2 }}
                  >
                    Solicitud enviada con exito,porfavor revise su email!
                  </Typography>
                )}
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
      <Footer />
    </Box>
  );
};
