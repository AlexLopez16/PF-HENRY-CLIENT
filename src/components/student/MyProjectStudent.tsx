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
import { WorkedProjectCard } from './WorkedProjectCard';

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
    const studentData: any = user?.working?.length
        ? user.working[0]
        : user.project?.length
        ? user.project
        : null;
    console.log(studentData);
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
                            <WorkedProjectCard
                                userId={user?.id}
                                projectId={studentData?.uid}
                                category={studentData?.category}
                                projectName={studentData?.name}
                                companyName={studentData?.company?.name}
                                description={studentData?.description}
                                requirements={studentData?.requirements}
                                stateOfProject={studentData?.stateOfProject}
                                participants={studentData?.participants}
                                accepts={studentData?.accepts}
                            />
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
