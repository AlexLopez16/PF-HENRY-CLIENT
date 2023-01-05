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
import { useSelector } from 'react-redux';
import { State } from '../../reducers/rootReducer';
export const VerifyEmail: FC = () => {
    // Traemos el correo del estado.
    const { data } = useSelector((state: State) => state.auth);

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
    const onSubmit = async (e: any) => {
        console.log(e);
    };

    initialValues.email = data.email;

    return (
        <Container>
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
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {(props) => (
                            <Form>
                                <Box
                                    sx={{
                                        marginTop: '20px',
                                        display: 'flex',
                                        justifyContent: 'space-around',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Box>
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
                                            Guardar
                                        </Button>
                                    </Box>
                                </Box>
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
                        >
                            Confirmado
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
};
