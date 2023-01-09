import { FC, useEffect} from 'react';
import { Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import NavBar from '../NavBar/NavBar';
import Footer from '../../pages/LandingPage/Footer';
import { Box, Button, Grid, Paper, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProjectByID } from '../../actions/projects';
import { State } from '../../reducers/rootReducer';
import { addStudentToProject } from '../../actions/student';

export const ApplicationForm: FC= () => {

  const token = localStorage.getItem('token') || '';

  const dispatch = useDispatch();

  let param: any = useParams();

  let { id } = param;

  
  useEffect(() => {
    dispatch(getProjectByID(token, id))
  }, [dispatch]);

  let idStd = useSelector((state: State | any) => state.auth.data.id);
  
  const { projectId } = useSelector((state: State) => state.project)

  const  question = projectId.questions

  console.log(question);
  
  
  console.log(projectId);
  
  const initialValues = {
    res1: '',
    res2: '',
    res3: ''
  };
  
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('* Ingresa el nombre del proyecto'),
    description: Yup.string().required('* Ingresa una descripción del proyecto'),
  });
  
  const onSubmit = async (values: any) => {
    dispatch(addStudentToProject(idStd, token));
  }

return (
    <Box
    sx={{
      backgroundColor: 'black',
    }}
  >
    <div>
      <NavBar />
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
          
          {question.map((Res: any, index: number) => (
            <Box>
            <Grid textAlign='left' fontFamily='montserrat' sx={{ mb: 2 }}>
              <h3>{Res} </h3>
            </Grid>
            <div>
  
                  <Field
                    as={TextField}
                    name= {`res${index+1}`}
                    label='Respuesta'
                    fullWidth
                    color='info'
                    sx={{ mb: 2 }}
                  />
            </div>
            </Box>
          ))}
          

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