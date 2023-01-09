/**
 * By Sciangula Hugo.
 * NOTA: aca el estudiante va a poder ver todos los detalles con respecto a los proyectos.
 * SE QUE FALTA MODULARIZARRRRRRRR :D, lo voy a hacer despues.
 */

import { Alert, Container, Stack, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../reducers/rootReducer';
import { getStudentInfo, unApplyStudent } from '../../actions/student';
import BusinessIcon from '@mui/icons-material/Business';
// Dejamos importado el link porque quiza despues se pueda mostrar el detalle de cada companero.
import { SnackBar } from '../SnackBar/SnackBar';
import { ProjectCardSkeleton } from './ProjectCardSkeleton';
import { WorkedProjectCard } from './WorkedProjectCard';
import { RequestProjectCard } from './RequestProjectCard';

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
                                {user?.project &&
                                    user?.project?.map((project: any) => (
                                        <RequestProjectCard
                                            userId={user?.id}
                                            projectId={project?.uid}
                                            category={project?.category}
                                            projectName={project?.name}
                                            companyName={project?.company?.name}
                                            description={project?.description}
                                            stateOfProject={
                                                project?.stateOfProject
                                            }
                                            participants={project?.participants}
                                            accepts={project?.accepts}
                                        />
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
