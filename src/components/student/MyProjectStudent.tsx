/**
 * By Sciangula Hugo.
 * NOTA: aca el estudiante va a poder ver todos los detalles con respecto a los proyectos.
 * SE QUE FALTA MODULARIZARRRRRRRR :D, lo voy a hacer despues.
 */

import {
    Alert,
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Chip,
    Container,
    Paper,
    Stack,
    Typography,
} from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../reducers/rootReducer';
import { getStudentInfo, unApply } from '../../actions/student';
// Dejamos importado el link porque quiza despues se pueda mostrar el detalle de cada companero.
import { Link } from 'react-router-dom';

const MyProjectStudent: FC = () => {
    const dispatch = useDispatch();
    // Traemos el id del estado.
    const { auth, student }: any = useSelector((state: State) => state);
    // Traemos el token del local storage.
    const token = localStorage.getItem('token') || '';
    // const [participants, setParticipants] = useState('1');
    const [recargar, setRecargar] = useState(false);
    // Traemos toda la info del student.
    useEffect(() => {
        dispatch(getStudentInfo(auth.data.id, token));
    }, [dispatch, recargar]);

    // Definimos los objetos de informacion.
    const { user }: any = student;
    // Aca hay que trabajar con typescript para que quede mas limpia la sintaxis.

    const handleClick = async () => {
        dispatch(unApply(user.id, user.project[0].uid));
        setRecargar(!recargar);
    };

    return (
        <Container maxWidth="lg">
            {user.working.length ? (
                <>
                    <Typography
                        variant="h6"
                        align="center"
                        sx={{ margin: '20px 0' }}
                    >
                        Mi proyecto:
                    </Typography>
                    <div>
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
                                {user.working[0].name}

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
                                    onClick={handleClick}
                                >
                                    Cancelar
                                </Button>
                            </Typography>
                            <Typography
                                style={{
                                    marginBottom: '10px',
                                }}
                            >
                                {user.working[0].description.slice(0, 500)} ...
                            </Typography>
                            <Box>
                                <Typography
                                    style={{
                                        marginBottom: '10px',
                                    }}
                                >
                                    Categoria:{' '}
                                    <Chip
                                        label={user.working[0].category}
                                        color="primary"
                                        size="small"
                                    />
                                </Typography>
                                <Typography
                                    style={{
                                        marginBottom: '10px',
                                    }}
                                >
                                    Tecnologias:{' '}
                                    {user.working[0].requirements &&
                                        user.working[0].requirements.map(
                                            (
                                                tecnology: string | any,
                                                index: number | any
                                            ) => (
                                                <>
                                                    {' '}
                                                    <Chip
                                                        key={index}
                                                        label={tecnology}
                                                        color="primary"
                                                        size="small"
                                                    />
                                                </>
                                            )
                                        )}
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '10px',
                                    }}
                                >
                                    <Typography>{'Equipo:'} </Typography>

                                    <AvatarGroup
                                        max={user.working[0].participants}
                                    >
                                        {user.working[0].accepts &&
                                            user.working[0].accepts.map(
                                                (person: object | any) => {
                                                    return (
                                                        <Avatar
                                                            alt={person.name}
                                                            src={
                                                                person.image !==
                                                                undefined
                                                                    ? person.image
                                                                    : person.name
                                                            }
                                                            sx={{
                                                                width: 30,
                                                                height: 30,
                                                            }}
                                                        />
                                                    );
                                                }
                                            )}
                                    </AvatarGroup>
                                </Box>
                                <Typography
                                    style={{
                                        marginBottom: '10px',
                                    }}
                                >
                                    Empresa:{' '}
                                    <Chip
                                        label={user.working[0].company.name}
                                        color="primary"
                                        size="small"
                                    />
                                </Typography>
                            </Box>
                        </Paper>
                    </div>
                </>
            ) : user.project.length ? (
                <>
                    <Typography
                        variant="h6"
                        align="center"
                        sx={{ margin: '20px 0' }}
                    >
                        Mis solicitudes:
                    </Typography>
                    <div>
                        {user.project &&
                            user.project.map((project: any) => (
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
                                            onClick={handleClick}
                                        >
                                            Cancelar
                                        </Button>
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
