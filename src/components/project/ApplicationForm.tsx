import { FC, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import NavBar from '../NavBar/NavBar';
import Footer from '../../pages/LandingPage/Footer';
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  Paper,
  TextField,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProjectByID } from '../../actions/projects';
import { State } from '../../reducers/rootReducer';
import { addStudentToProject } from '../../actions/student';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link, useNavigate } from 'react-router-dom';
import studentRegisterbg from '../../assets/studentRegister.png';
export const ApplicationForm: FC = () => {
  const token = localStorage.getItem('token') || '';

  const dispatch = useDispatch();

  let param: any = useParams();

  let { id } = param;
  const Navigate = useNavigate();
  const GoBack = () => {
    Navigate('/');
  };

  useEffect(() => {
    dispatch(getProjectByID(token, id));
  }, [dispatch]);

  let idStd = useSelector((state: State | any) => state.auth.data.id);

  const { projectId } = useSelector((state: State) => state.project);

  const question = projectId.questions;

  const initialValues = {
    res1: '',
    res2: '',
    res3: '',
  };

  const validationSchema = Yup.object().shape({
    res1: Yup.string().required('* Ingresa una respuesta'),
    res2: Yup.string().required('* Ingresa una respuesta'),
    res3: Yup.string().required('* Ingresa una respuesta'),
  });

  const onSubmit = (values: any) => {
    // dispatch(addStudentToProject(idStd, token));
    console.log(values);
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${studentRegisterbg})`,
        maxWidth: '1920px',
      }}
    >
      <div>
        <NavBar />
        <Container sx={{
          display:'flex',
         
        }}>
          <Grid>
            <Paper
              elevation={10}
              sx={{
                width: '30%',
                p: 5,
                m: '50px auto',
                mb: 10,
                mt: 10,
                borderRadius: 10,
                backgroundColor: 'black',
                boxShadow:
                  'rgba(255, 255, 255, 255.16) 0px 1px 4px, rgb(255, 255, 255) 0px 0px 0px 3px',
              }}
            >
              <Grid
                textAlign='center'
                fontFamily='montserrat'
                sx={{ mb: 5, color: 'white' }}
              >
                <h2>Test de Aplicación</h2>
              </Grid>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                <Form>
                  {question.map((Res: any, index: number) => (
                    <Box>
                      <Grid
                        textAlign='left'
                        fontFamily='montserrat'
                        sx={{ mb: 2 }}
                      >
                        <h3 style={{ color: 'white' }}>{Res} </h3>
                      </Grid>
                      <div>
                        <Field
                          as={TextField}
                          name={`res${index + 1}`}
                          placeholder='Respuesta'
                          fullWidth
                          color='primary'
                          sx={{
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

                            input: { color: 'white' },
                            margin: '10px 0px',
                            width: '100%',
                          }}
                          inputProps={{ maxLength: 50 }}
                          helperText={
                            <ErrorMessage name={`res${index + 1}`}>
                              {(msg) => (
                                <span
                                  style={{
                                    color: '#d6423e',
                                  }}
                                >
                                  {msg}
                                </span>
                              )}
                            </ErrorMessage>
                          }
                        />
                      </div>
                    </Box>
                  ))}

                  <Button
                    sx={{
                      marginTop: 2,
                      fontFamily: 'poppins',
                      borderRadius: 10,
                    }}
                    type='submit'
                    variant='contained'
                    fullWidth
                    color='primary'
                  >
                    Aplicar a proyecto
                  </Button>
                </Form>
              </Formik>
            </Paper>
          </Grid>
        </Container>
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
