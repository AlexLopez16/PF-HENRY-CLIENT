import { FC, useState } from 'react';
import {
    Container,
    Box,
    Paper,
    Typography,
    TextField,
    Button,
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
export const VerifyEmail: FC = () => {
    // Traemos el correo del estado.
    const { data }: object | any = useSelector((state: State) => state.auth);
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
        <Container>
            <PreLoader />
            <SnackBar />
            {data.verify ? <Navigate to="/projects" /> : null}
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Paper
                    elevation={10}
                    style={{
                        padding: '20px',
                        marginTop: '20px',
                        width: '30rem',
                        maxWidth: '100%',
                    }}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <MarkEmailReadIcon />
                    </Box>
                    <Typography variant="h6" sx={{ textAlign: 'center' }}>
                        Verifica tu correo electronico.
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{ textAlign: 'center' }}
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
                                        // backgroundColor: 'red',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: '100%',
                                            margin: '0 10px 0 0',
                                        }}
                                    >
                                        <Field
                                            as={TextField}
                                            name="email"
                                            label="Email"
                                            size="small"
                                            // value={data.email}
                                            placeholder="Correo electronico"
                                            fullWidth
                                            required
                                            helperText={
                                                <ErrorMessage name="email">
                                                    {(msg) => (
                                                        <Typography
                                                            style={{
                                                                color: '#d6423e',
                                                            }}
                                                            variant="subtitle2"
                                                        >
                                                            {msg}
                                                        </Typography>
                                                    )}
                                                </ErrorMessage>
                                            }
                                        />
                                    </Box>
                                    <Box>
                                        <Button
                                            size="small"
                                            type="submit"
                                            // style={buttonStyle}
                                            variant="contained"
                                            disabled={
                                                Object.keys(props.errors)
                                                    .length > 0
                                            }
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
                            marginTop: '20px',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Button
                            size="small"
                            type="submit"
                            // style={buttonStyle}
                            variant="contained"
                            // disabled={Object.keys(props.errors).length > 0}
                            onClick={confirmClick}
                        >
                            Ya lo confirme!
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
};
