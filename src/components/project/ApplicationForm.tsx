import { FC, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import NavBar from '../NavBar/NavBar';
import Footer from '../../pages/LandingPage/Footer';
import { Box, Button, Grid, Paper, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getProjectByID } from '../../actions/projects';
import { State } from '../../reducers/rootReducer';
import {
    addStudentToProject,
    sendResponseOfQuestions,
} from '../../actions/student';
import { SnackBar } from '../SnackBar/SnackBar';
import { PreLoader } from '../PreLoader/PreLoader';

export const ApplicationForm: FC = () => {
    const navigate = useNavigate();

    const token = localStorage.getItem('token') || '';

    const dispatch = useDispatch();

    let param: any = useParams();

    let { id } = param;

    useEffect(() => {
        dispatch(getProjectByID(token, id));
    }, [dispatch]);

    let idStd = useSelector((state: State | any) => state.auth.data.id);

    const { projectId } = useSelector((state: State) => state.project);
    // console.log(status)

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
        values['projectId'] = projectId.uid;
        dispatch(sendResponseOfQuestions(values, token, projectId.uid));
        //dispatch(addStudentToProject(projectId.uid, token));
        // navigate('/myprojects');
        console.log(values);
    };

    return (
        <Box
            sx={{
                backgroundColor: 'black',
            }}
        >
            <SnackBar />
            <PreLoader />
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
                        <Grid
                            textAlign="center"
                            fontFamily="montserrat"
                            sx={{ mb: 10 }}
                        >
                            <h2>Test de Aplicacion</h2>
                        </Grid>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                        >
                            <Form>
                                {question?.map((Res: any, index: number) => (
                                    <Box>
                                        <Grid
                                            textAlign="left"
                                            fontFamily="montserrat"
                                            sx={{ mb: 2 }}
                                        >
                                            <h3>{Res} </h3>
                                        </Grid>
                                        <div>
                                            <Field
                                                as={TextField}
                                                name={`res${index + 1}`}
                                                label="Respuesta"
                                                fullWidth
                                                color="info"
                                                sx={{ mb: 2 }}
                                                inputProps={{ maxLength: 100 }}
                                                helperText={
                                                    <ErrorMessage
                                                        name={`res${index + 1}`}
                                                    >
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
                                    sx={{ marginTop: 2, fontFamily: 'poppins' }}
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    color="primary"
                                >
                                    Aplicar al proyecto.
                                </Button>
                            </Form>
                        </Formik>
                    </Paper>
                </Grid>
            </div>
            <Footer />
        </Box>
    );
};
