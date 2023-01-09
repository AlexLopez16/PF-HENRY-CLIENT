import { useDispatch, useSelector } from 'react-redux';
import { clearProjects, getMyProjectsCompany } from '../../actions/projects';
import ProjectCard from './ProjectCard';
import { State } from '../../reducers/rootReducer';

import Alert from '@mui/material/Alert/Alert';
import Stack from '@mui/material/Stack/Stack';
import { useEffect, FC } from 'react';
import Pages from '../ui/Pagination';
import { Box, Container, Typography } from '@mui/material';
import { PreLoader } from '../PreLoader/PreLoader';
import ProjectCardMyCompany from './ProjectCardMyCompany';

import bgComponents from '../../assets/bgComponents.png';
import StudentsFilter from '../student/StudentsFilter';
import Footer from '../../pages/LandingPage/Footer';

export const MyProjectCompany: FC = () => {
    const dispatch = useDispatch();
    let token = localStorage.getItem('token') || '';
    useEffect(() => {
        dispatch(getMyProjectsCompany(token, 1));
        return () => {
            dispatch(clearProjects({ projects: [], total: 0 }));
        };
    }, [dispatch, token]);

    const { projectsFilter } = useSelector((state: State) => state.project);
    let info = projectsFilter;
    // console.log(info);

    return (
        <>
            <Box
                sx={{
                    backgroundImage: `url(${bgComponents})`,
                    pb: 15,
                    pt: 10,
                }}
            >
                <PreLoader />
                <Container
                    sx={{
                        alignContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                >
                    <Typography
                        sx={{
                            color: '#AEB3B4',
                            fontFamily: 'montserrat',
                            fontSize: 35,
                            backgroundColor: '#0C252F',
                            borderRadius: 15,
                            mb: 5,
                        }}
                    >
                        Mis Proyectos
                    </Typography>
                </Container>

                <Pages />
                <Container maxWidth="lg">
                    {info.length ? (
                        info.map((e: any) => (
                            <ProjectCardMyCompany
                                name={e.name}
                                participants={e.participants}
                                requirements={e.requirements}
                                students={e.accepts}
                                company={e.company.name}
                                state={e.state}
                                stateOfProject={e.stateOfProject}
                                id={e.uid}
                                category={e.category}
                                image={e.images}
                            />
                        ))
                    ) : (
                        <Stack sx={{ width: '100%' }} spacing={2}>
                            <Alert severity="info">
                                No hay proyectos creados!
                            </Alert>
                        </Stack>
                    )}
                </Container>
            </Box>
            <Footer />
        </>
    );
};
