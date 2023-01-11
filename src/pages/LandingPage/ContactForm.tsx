import { Button, TextField, Typography, Paper, Box, FormControl, Grid } from '@mui/material';

import Header from '../../components/NavbarLandingPage/HeaderLanding';
import Footer from './Footer';
import bg from '../../assets/bg.png';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { sendContactEmail } from '../../actions/emails';
import { SnackBar } from '../../components/SnackBar/SnackBar';

import { useNavigate } from 'react-router-dom';

export default function ContactForm() {
  interface Props {
    name: string;
    email: string;
    message: string;
  }

  interface OtherProps {
    message: string;
  }

  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('*Ingresa tu nombre'),
    email: Yup.string()
      .email('*Ingresa un email valido')
      .required('*Ingresa un email valido'),
    message: Yup.string().required('*Ingresa un mensage'),
  });

  const dispatch = useDispatch();

  const onSubmit = (values: Props, props: any) => {
    dispatch(sendContactEmail(values));

    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 1000);
  };
  const navigate = useNavigate();

  const GoBack = () => {
    navigate('/');
  };

  return (
    <>
      <Header />
      <Paper sx={{
         backgroundImage: `url(${bg})`,
        pt:20,
        pb: 45,
      }}
      >

        <SnackBar
          successMsg={'Email enviado con éxito, en breve recibirás respuesta'}
          errorMsg={'Ups! Algo salio mal, ocurrio un error'}
        />

        <div
          style={{
            width: 'fit-content',
            margin: 'auto',
            padding: '30px',
          }}
        >
          <Typography
            variant='h4'
            sx={{
              textAlign: 'center',
              my: 5,
              color: 'white',
              fontWeight: 'bold',
              fontFamily: 'poppins',
            }}
          >
            CONTÁCTANOS
          </Typography>

          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(props) => (
              <Form>
                <Field
                  as={TextField}
                  name='name'
                  id='name'
                  label='Nombre'
                  variant='outlined'
                  fullWidth
                  required
                  inputProps={{ maxLength: 50 }}
                  sx={{
                    '& .MuiInputLabel-root': { color: 'white' },
                    '& .MuiOutlinedInput-root': {
                      '& > fieldset': { borderColor: 'white' },
                    },
                    input: { color: 'white' },
                    margin: '10px 0',
                  }}
                  helperText={
                    <ErrorMessage name='name'>
                      {(msg) => <span style={{ color: 'red' }}>{msg}</span>}
                    </ErrorMessage>
                  }
                />

                <Field
                  as={TextField}
                  name='email'
                  id='email'
                  label='Email'
                  variant='outlined'
                  fullWidth
                  required
                  inputProps={{ maxLength: 50 }}
                  sx={{
                    '& .MuiInputLabel-root': { color: 'white' }, //styles the label
                    '& .MuiOutlinedInput-root': {
                      '& > fieldset': { borderColor: 'white' },
                    },
                    input: { color: 'white' },
                    margin: '10px 0',
                  }}
                  helperText={
                    <ErrorMessage name='email'>
                      {(msg) => <span style={{ color: 'red' }}>{msg}</span>}
                    </ErrorMessage>
                  }
                />

                <Field
                  as={TextField}
                  name='message'
                  id='message'
                  label='Escribe tu mensaje'
                  multiline
                  rows={4}
                  fullWidth
                  required
                  // inputProps={{ maxLength: 250 }}
                  sx={{
                    '& .MuiInputLabel-root': { color: 'white' }, //styles the label
                    '& .MuiOutlinedInput-root': {
                      '& > fieldset': { borderColor: 'white' },
                    },
                    margin: '10px 0',
                  }}
                  inputProps={{ style: { color: 'white' }, maxLength: 500 }}
                  helperText={
                    <ErrorMessage name='message'>
                      {(msg) => <span style={{ color: 'red' }}>{msg}</span>}
                    </ErrorMessage>
                  }
                />

                <Button
                  type='submit'
                  variant='contained'
                  sx={{
                    color: 'black',
                    borderRadius: '10px',
                    fontFamily: 'poppins',
                    align: 'flex-end',
                    float: 'right',
                    margin: '10px 0',
                  }}
                  disabled={props.isSubmitting}
                >
                  Enviar
                </Button>
              </Form>
            )}
          </Formik>
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
              mt:15,
            }}
          >
            Regresar
          </Button>
        </FormControl>
      </Grid>
      </Paper>
      <Footer />
    </>
  );
}
