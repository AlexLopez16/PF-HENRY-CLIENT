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
import { getStudentInfo, unApplyStudent } from '../../actions/student';
import BusinessIcon from '@mui/icons-material/Business';
// Dejamos importado el link porque quiza despues se pueda mostrar el detalle de cada companero.
import { Link } from 'react-router-dom';

import { PreLoader } from '../PreLoader/PreLoader';
import { SnackBar } from '../SnackBar/SnackBar';
import { ProjectCardSkeleton } from './ProjectCardSkeleton';

const MyProjectStudent: FC = () => {
    const dispatch = useDispatch();
    // Traemos el id del estado.
    const { auth, student }: any = useSelector((state: State) => state);
    const { inProgress } = useSelector((state: State) => state.request);
    // Traemos el token del local storage.
    const token = localStorage.getItem('token') || '';
    // Traemos toda la info del student.
    useEffect(() => {
        dispatch(getStudentInfo(auth.data.id, token));
    }, [dispatch]);

    // Definimos los objetos de informacion.
    const { user }: any = student;
    // Aca hay que trabajar con typescript para que quede mas limpia la sintaxis.

    const handleClick = async (projectId: string | any) => {
        dispatch(
            unApplyStudent(user.id, projectId, localStorage.getItem('token'))
        );
    };
    // console.log(user.working)

    return (
        <Container maxWidth="lg">
            <SnackBar />
            {inProgress ? (
                <ProjectCardSkeleton />
            ) : (
                <>
                    {user.working?.length ? (
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
                                        padding: '20px',
                                        marginTop: '20px',
                                    }}
                                >
                                    <Typography
                                        variant="subtitle2"
                                        sx={{ color: '#898989' }}
                                    >
                                        {' '}
                                        {user.working[0].category?.toUpperCase()}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}
                                        variant="h6"
                                    >
                                        {user.working[0].name?.toUpperCase()}

                                        <Button
                                            variant="contained"
                                            type="submit"
                                            size="small"
                                            color="primary"
                                            onClick={() =>
                                                handleClick(user.working[0].uid)
                                            }
                                        >
                                            Cancelar
                                        </Button>
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: 'block',
                                            marginBottom: '10px',
                                        }}
                                    >
                                        <Typography
                                            variant="subtitle1"
                                            sx={{
                                                color: '#898989',
                                            }}
                                        >
                                            {user.working[0].description.slice(
                                                0,
                                                500
                                            )}{' '}
                                            ...
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            sx={{ color: '#898989' }}
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
                                                                label={
                                                                    tecnology
                                                                }
                                                                color="primary"
                                                                size="small"
                                                            />
                                                        </>
                                                    )
                                                )}
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            sx={{
                                                color: '#898989',
                                            }}
                                        >
                                            Estado:{' '}
                                            <Chip
                                                size="small"
                                                label={
                                                    user.working[0]
                                                        .stateOfProject
                                                }
                                                color="primary"
                                            />
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            sx={{
                                                color: '#898989',
                                            }}
                                        >
                                            Fecha de inicio:{' '}
                                            <Chip
                                                size="small"
                                                label={'17/02/2023'}
                                                color="primary"
                                            />
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            sx={{
                                                color: '#898989',
                                            }}
                                        >
                                            Fecha de entrega:{' '}
                                            <Chip
                                                size="small"
                                                label={'17/03/2023'}
                                                color="primary"
                                            />
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                // marginBottom: '10px',
                                            }}
                                        >
                                            <Typography
                                                variant="subtitle1"
                                                sx={{ color: '#898989' }}
                                            >
                                                {'Equipo:'}{' '}
                                            </Typography>

                                            <AvatarGroup
                                                max={
                                                    user.working[0].participants
                                                }
                                            >
                                                {user.working[0].accepts &&
                                                    user.working[0].accepts.map(
                                                        (
                                                            person: object | any
                                                        ) => {
                                                            return (
                                                                <Avatar
                                                                    alt={
                                                                        person.name
                                                                    }
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
                                    </Box>
                                    <Paper
                                        elevation={5}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            // border: '1px solid',
                                            width: 'max-content',
                                            padding: '2px 4px',
                                            // borderRadius: '4px',
                                        }}
                                    >
                                        <BusinessIcon fontSize="small" />
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                margin: '0 5px',
                                            }}
                                        >
                                            {user.working[0].company.name?.toUpperCase()}
                                        </Typography>
                                    </Paper>
                                </Paper>
                            </div>
                        </>
                    ) : user.project?.length ? (
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
                                                padding: '20px',
                                                marginTop: '20px',
                                            }}
                                        >
                                            <Typography
                                                variant="subtitle2"
                                                sx={{ color: '#898989' }}
                                            >
                                                {' '}
                                                {project.category?.toUpperCase()}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent:
                                                        'space-between',
                                                    alignItems: 'center',
                                                }}
                                                variant="h6"
                                            >
                                                {project.name?.toUpperCase()}
                                                <Button
                                                    variant="contained"
                                                    type="submit"
                                                    size="small"
                                                    color="primary"
                                                    onClick={() =>
                                                        handleClick(project.uid)
                                                    }
                                                >
                                                    Cancelar
                                                </Button>
                                            </Typography>
                                            <Box
                                                sx={{
                                                    display: 'block',
                                                    marginBottom: '10px',
                                                }}
                                            >
                                                <Typography
                                                    variant="subtitle1"
                                                    sx={{ color: '#898989' }}
                                                >
                                                    {project.description.slice(
                                                        0,
                                                        100
                                                    )}
                                                    ...
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    sx={{
                                                        color: '#898989',
                                                    }}
                                                >
                                                    Estado:{' '}
                                                    <Chip
                                                        label={
                                                            project.stateOfProject
                                                        }
                                                        color="primary"
                                                        size="small"
                                                    />
                                                </Typography>

                                                <Typography
                                                    variant="subtitle1"
                                                    sx={{ color: '#898989' }}
                                                >
                                                    Participantes:{' '}
                                                    <Chip
                                                        label={`${project.accepts?.length}/${project.participants}`}
                                                        color="primary"
                                                        size="small"
                                                    />
                                                </Typography>
                                            </Box>
                                            <Paper
                                                elevation={5}
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    // border: '1px solid',
                                                    width: 'max-content',
                                                    padding: '2px 4px',
                                                    // borderRadius: '4px',
                                                }}
                                            >
                                                <BusinessIcon fontSize="small" />
                                                <Typography
                                                    variant="subtitle2"
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        margin: '0 5px',
                                                    }}
                                                >
                                                    {project.company?.name?.toUpperCase()}
                                                </Typography>
                                            </Paper>
                                        </Paper>
                                    ))}
                            </div>
                        </>
                    ) : (
                        <Stack
                            spacing={2}
                            sx={{
                                margin: '20px auto',
                                maxWidth: 'fit-content',
                            }}
                        >
                            <Alert severity="info">
                                No estas aplicando a ningun proyecto!
                            </Alert>
                        </Stack>
                    )}
                </>
            )}
        </Container>
    );
};
export default MyProjectStudent;
