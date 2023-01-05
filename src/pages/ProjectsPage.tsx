import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../reducers/rootReducer';
import { Box, Container, Stack, Alert } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { getProjectsFilter } from '../actions/projects';
import ProjectCard from '../components/project/ProjectCard';
import StudentsFilter from '../components/student/StudentsFilter';
import { types } from './../types/types';
import Pages from '../components/ui/Pagination';
import { PreLoader } from '../components/PreLoader/PreLoader';

const ProjectsPage: FC = () => {
    const dispatch = useDispatch();
    const token = localStorage.getItem('token') || '';

    const [search, setSearch] = useState('');
    const [inputFilter, setInput] = useState({
        state: undefined,
        tecnologies: undefined,
        typeOfOrder: undefined,
        categorie: undefined,
    });
    useEffect(() => {
        dispatch(
            getProjectsFilter(
                inputFilter.typeOfOrder,
                inputFilter.tecnologies,
                token,
                search,
                inputFilter.categorie,
                inputFilter.state,
                6,
                0
            )
        );
    }, [dispatch, token, inputFilter]);

    const { projectsFilter } = useSelector((state: State) => state.project);

    let info = projectsFilter;

    const { status } = useSelector((state: State) => state.auth);

    if (status === 401) {
        localStorage.clear();
        dispatch({
            type: types.authLogin,
        });
        return <Navigate to="/login" />;
    }

    return (
        <Box>
            <PreLoader />
            <StudentsFilter />
            <Pages />
            <Container maxWidth="lg" sx={{ marginLeft: 50 }}>
                {info.length ? (
                    info.map((e: any) => (
                        <ProjectCard
                        key={e}
                            name={e.name}
                            participants={e.participants}
                            requirements={e.requirements}
                            students={e.students}
                            company={e.company?.name}
                            state={e.state}
                            stateOfProject={e.stateOfProject}
                            id={e.uid}
                            category={e.category}
                        />
                    ))
                ) : (
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        <Alert severity="info">
                            No hay proyectos con los filtros aplicados!
                        </Alert>
                    </Stack>
                )}
            </Container>
        </Box>
    );
};

export default ProjectsPage;
