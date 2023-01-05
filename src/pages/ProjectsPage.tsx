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
import ProjectsStudents from '../components/student/ProjectsStudents';

const ProjectsPage: FC = () => {
    // const dispatch = useDispatch();
    // const token = localStorage.getItem('token') || '';

    // const [search, setSearch] = useState('');
    // const [inputFilter, setInput] = useState({
    //     state: undefined,
    //     tecnologies: undefined,
    //     typeOfOrder: undefined,
    //     categorie: undefined,
    // });
    // useEffect(() => {
    //     dispatch(
    //         getProjectsFilter(
    //             inputFilter.typeOfOrder,
    //             inputFilter.tecnologies,
    //             token,
    //             search,
    //             inputFilter.categorie,
    //             inputFilter.state,
    //             6,
    //             0
    //         )
    //     );
    // }, [dispatch, token, inputFilter]);

    // const { projectsFilter } = useSelector((state: State) => state.project);

    // let info = projectsFilter;

    // const { status } = useSelector((state: State) => state.auth);

    // if (status === 401) {
    //     localStorage.clear();
    //     dispatch({
    //         type: types.authLogin,
    //     });
    //     return <Navigate to="/login" />;
    // }

    return (
        <Box>
            <ProjectsStudents />
        </Box>
    );
};

export default ProjectsPage;
