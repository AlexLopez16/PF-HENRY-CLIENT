import { FC, useState } from 'react';
import {
  Container,
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
} from '@mui/material';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { TextField } from 'formik-mui';
import { string } from 'yup/lib/locale';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../reducers/rootReducer';
import { Link, Navigate } from 'react-router-dom';
import { validaToken, reSendEmail, isVerify } from '../../actions/auth';
import { PreLoader } from '../PreLoader/PreLoader';
import { showError } from '../../actions/error';
import { SnackBar } from '../SnackBar/SnackBar';
import bg from '../../assets/bg.png';
import Footer from '../../pages/LandingPage/Footer';
import mailConfirm from '../../assets/mailConfirm.png';

export const VerifyEmail: FC = () => {
  // Traemos el correo del estado.
  const { data } = useSelector((state: State) => state.auth);
  const dispatch = useDispatch();

  // Definimos los valores iniciales.
  const initialValues = {
    email: '',
  };

  // Definimos las validaciones de Yup.
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Por favor ingresa un email válido.')
      .required('Este valor debe ser un correo válido.'),
  });

  // Envio del formulario.
  const onSubmit = async (element: any) => {
    // console.log(element.email);
    const { email } = element;
    let token: string | any = localStorage.getItem('token');
    if (token && email) dispatch(reSendEmail(token, email));
  };

  initialValues.email = data.email;
  const confirmClick = () => {
    let token: string | any = localStorage.getItem('token');
    if (token) dispatch(validaToken(token));
    dispatch(isVerify(data.email));
  };

  return (
    <>
      <PreLoader />
      <SnackBar />
      <Grid direction='column' justifyContent='center' alignItems='center'>
        <Box
          sx={{
            backgroundImage: `url(${bg})`,
            maxWidth: '1920px',
            height: 800,
          }}
        >
          {data.verify ? <Navigate to='/projects' /> : null}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Paper
              elevation={10}
              sx={{
                padding: 5,
                mt: 20,
                width: '35%',
                backgroundColor: 'black',
                boxShadow:
                  'rgba(255, 255, 255, 255.16) 0px 1px 4px, rgb(255, 255, 255) 0px 0px 0px 3px',
                borderRadius: 10,
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <img src={mailConfirm} id={Image.name} alt='ConfirmIcon' />
              </Box>

              <Typography
                variant='h6'
                sx={{
                  textAlign: 'center',
                  pt: 2,
                  fontFamily: 'montserrat',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                Verifica tu correo electronico.
              </Typography>
              <Typography
                variant='subtitle1'
                sx={{
                  textAlign: 'center',
                  mt: 2,
                  fontFamily: 'montserrat',
                  fontStyle: 'italic',
                  color: 'white',
                }}
              >
                Hemos enviado a tu casillera de correo un boton para que
                confirmes tu cuenta.
              </Typography>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {(props) => (
                  <Form>
                    <Paper
                      elevation={5}
                      sx={{
                        padding: '20px',
                        marginTop: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        gap: '10px',
                        backgroundColor: 'black',
                        boxShadow: 'rgba(255, 255, 0, 1) 0px 0px 8px 3px;',
                        borderRadius: 4,
                      }}
                    >
                      <Box
                        sx={{
                          width: '100%',
                          margin: '0 10px 0 0',
                        }}
                      >
                        <Typography
                          variant='h6'
                          sx={{
                            textAlign: 'center',
                            mt: 2,
                            fontFamily: 'montserrat',
                            color: '#ffff01',
                          }}
                        >
                          Si no lo has recibido, vuelve a ingresarlo aquí para
                          reenviar la confirmación.
                        </Typography>
                        <Field
                          as={TextField}
                          name='email'
                          label='Email'
                          size='small'
                          placeholder='Correo electronico'
                          fullWidth
                          required
                          helperText={
                            <ErrorMessage name='email'>
                              {(msg) => (
                                <Typography
                                  style={{
                                    color: '#d6423e',
                                  }}
                                  variant='subtitle2'
                                >
                                  {msg}
                                </Typography>
                              )}
                            </ErrorMessage>
                          }
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
                            margin: '10px 0',
                          }}
                        />
                      </Box>
                      <Box>
                        <Button
                          sx={{
                            borderRadius: 2,
                            alignItems: 'center',
                            fontFamily: 'montserrat',
                            fontWeight: 'bold',
                          }}
                          size='small'
                          type='submit'
                          // style={buttonStyle}
                          variant='contained'
                          color='primary'
                          disabled={Object.keys(props.errors).length > 0}
                        >
                          Reenviar
                        </Button>
                      </Box>
                    </Paper>
                  </Form>
                )}
              </Formik>
              <Box
                sx={{
                  mt: 4,
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Button
                  sx={{
                    borderRadius: 2,
                    alignItems: 'center',
                    fontFamily: 'montserrat',
                    fontWeight: 'bold',
                  }}
                  size='small'
                  type='submit'
                  variant='contained'
                  color='secondary'
                  onClick={confirmClick}
                >
                  Confirmado
                </Button>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Grid>
      <Footer />
    </>
  );
};
