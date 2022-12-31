/**
 * By Sciangula Hugo.
 * NOTA: aca el estudiante va a poder ver todos los detalles con respecto a los proyectos.
 */

import {
    Alert,
    Box,
    Button,
    Chip,
    Container,
    Paper,
    Stack,
    Typography,
} from '@mui/material';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../reducers/rootReducer';
import { getStudentInfo } from '../../actions/student';
import { Link } from 'react-router-dom';

const MyProjectStudent: FC = () => {
    const dispatch = useDispatch();
    // Traemos el id del estado.
    const { auth, student }: any = useSelector((state: State) => state);
    // Traemos el token del local storage.
    const token = localStorage.getItem('token') || '';
    // Traemos toda la info del student.
    useEffect(() => {
        dispatch(getStudentInfo(auth.data.id, token));
    }, [dispatch]);
    // Definimos los objetos de informacion.
    // Aca hay que trabajar con typescript para que quede mas limpia la sintaxis.
    return (
        <Container maxWidth="lg">
            {student.user.working ? (
                <p>
                    Estas trabajando en un proyecto, ahora falta mostrar el
                    proyecto xd
                </p>
            ) : student.user.project.length ? (
                <>
                    <Typography
                        variant="h6"
                        align="center"
                        sx={{ margin: '20px 0' }}
                    >
                        Mis Solicitudes
                    </Typography>
                    <div>
                        {student.user.project &&
                            student.user.project.map((project: any) => (
                                <Paper
                                    elevation={10}
                                    style={{
                                        padding: '10px',
                                        marginTop: '20px',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            margin: '10px 0',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                        }}
                                        variant="h6"
                                    >
                                        {project.name}
                                        <Link to="/project">
                                            <Button
                                                sx={{
                                                    ml: 'auto',
                                                    fontWeight: 600,
                                                    color: 'yellow',
                                                    background: 'black',
                                                }}
                                                size="small"
                                                color="primary"
                                                variant="text"
                                                // onClick={handleClick}
                                            >
                                                Cancelar
                                            </Button>
                                        </Link>
                                    </Typography>

                                    <Typography
                                        style={{
                                            marginBottom: '10px',
                                        }}
                                    >
                                        {project.description.slice(0, 100)}...
                                    </Typography>

                                    <Box>
                                        <Typography
                                            style={{
                                                marginBottom: '10px',
                                            }}
                                        >
                                            Participantes:{' '}
                                            <Chip
                                                label={project.participants}
                                                color="primary"
                                                size="small"
                                            />
                                        </Typography>

                                        <Typography>
                                            Estado:{' '}
                                            <Chip
                                                label={project.stateOfProject}
                                                color="primary"
                                                size="small"
                                            />
                                        </Typography>
                                    </Box>
                                </Paper>
                            ))}
                    </div>
                </>
            ) : (
                <Stack spacing={2} sx={{ margin: '10px 0' }}>
                    <Alert severity="info">
                        Aun no aplicaste a ningun proyecto!
                    </Alert>
                </Stack>
            )}
        </Container>
    );
};

export default MyProjectStudent;
