import { FC} from 'react';
import { Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import Error from '../ui/Error';
import NavBar from '../NavBar/NavBar';
import Footer from '../../pages/LandingPage/Footer';
import { Box, Button, Grid, Paper } from '@mui/material';
import { TextField } from 'formik-mui';

export const ApplicationForm: FC = () => {

  const token = localStorage.getItem('token') || '';


  const initialValues = {
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('* Ingresa el nombre del proyecto'),
    description: Yup.string().required('* Ingresa una descripción del proyecto'),
  });

return (
    <Box
    sx={{
      backgroundColor: 'black',
    }}
  >
    <div>
      <NavBar />
      <Error />
      <Grid>
        <Paper
          elevation={10}
          style={{
            width: 500,
            height: '100%',
            padding: 20,
            margin: '50px auto',
            marginBottom: 153,
            marginTop: 100,
          }}
        >
          <Grid textAlign='center' fontFamily='montserrat' sx={{ mb: 10 }}>
            <h2>Test de Aplicacion</h2>
          </Grid>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form>

          <Grid textAlign='center' fontFamily='montserrat' sx={{ mb: 2 }}>
            <h3></h3>
          </Grid>
                <Field
                  as={TextField}
                  name='responce1'
                  label='Respuesta'
                  // placeholder='¿Que quisieras preguntarle a tu nuevo Henry?'
                  fullWidth
                  color='info'
                  sx={{ mb: 2 }}
                />

          <Grid textAlign='center' fontFamily='montserrat' sx={{ mb: 2 }}>
            <h3></h3>
          </Grid>

                <Field
                  as={TextField}
                  name='response2'
                  label='Respuesta'
                  // placeholder='¿Que quisieras preguntarle a tu nuevo Henry?'
                  fullWidth
                  color='info'
                  sx={{ mb: 2}}
                />

          <Grid textAlign='center' fontFamily='montserrat' sx={{ mb: 2 }}>
            <h3>hola</h3>
          </Grid>
                <Field
                  as={TextField}
                  name='response3'
                  label='PRespuesta'
                  // placeholder='¿Que quisieras preguntarle a tu nuevo Henry?'
                  fullWidth
                  // required
                  color='info'
                  sx={{ mb: 2 }}
                />

                <Button
                  sx={{ marginTop: 2, fontFamily: 'poppins' }}
                  type='submit'
                  variant='contained'
                  fullWidth
                  color='primary'
                  disabled={props.isSubmitting}

                >
                  Aplicar a proyecto
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </div>
    <Footer/>
  </Box>
)};