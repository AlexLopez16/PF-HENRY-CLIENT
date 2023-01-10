/**
 * Redisenado por Hugo.
 * PD: Si no te gusta nos podemos cagar bien a trompadas porque esta bien feo.
 */
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    // clearProject,
    clearProjects,
    // getCategory,
    // getProject,
    getProjectsFilter,
} from '../../actions/projects';
import ProjectCard from '../project/ProjectCard';
import { State } from '../../reducers/rootReducer';
// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';
// import Paper from '@mui/material/Paper';
// import FormControl from '@mui/material/FormControl/FormControl';
// import InputLabel from '@mui/material/InputLabel/InputLabel';
// import Select from '@mui/material/Select/Select';
// import MenuItem from '@mui/material/MenuItem/MenuItem';
import { Box } from '@mui/system';
import Alert from '@mui/material/Alert/Alert';
import Stack from '@mui/material/Stack/Stack';
import {
    Navigate,
    //  useSearchParams
} from 'react-router-dom';
import { types } from '../../types/types';
import {
    Container,
    //  IconButton, Input, Typography
} from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
import StudentsFilter from './StudentsFilter';
import Pages from '../ui/Pagination';
import { PreLoader } from '../PreLoader/PreLoader';
import Footer from '../../pages/LandingPage/Footer';

import bgComponents from '../../assets/bgComponents.png';

const ProjectsStudents: FC = () => {
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
        return () => {
            dispatch(clearProjects({ projects: [], total: 0 }));
        };
        // return () => {
        //     dispatch(clearProject());
        // };
        // dispatch(getCategory(token));
    }, [dispatch, token, inputFilter]);

    const { projectsFilter } = useSelector((state: State) => state.project);

    let info = projectsFilter;
    // console.log(info);

    const { status } = useSelector((state: State) => state.auth);

    console.log(projectsFilter);

    //   console.log('logged', logged);
    if (status === 401) {
        // console.log('401', 401);
        localStorage.clear();
        dispatch({
            type: types.authLogin,
        });
        return <Navigate to="/login" />;
    }

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
                <StudentsFilter />
                <Pages />
                <Container maxWidth="lg">
                    {info.length ? (
                        info.map((e: any) => (
                            <ProjectCard
                                key={e.uid} //agregue key
                                name={e.name}
                                participants={e.participants}
                                requirements={e.requirements}
                                students={e.accepts}
                                company={e.company?.name}
                                companyId={e.company?._id}
                                state={e.state}
                                stateOfProject={e.stateOfProject}
                                id={e.uid}
                                category={e.category}
                            />
                        ))
                    ) : (
                        <Stack sx={{ width: '100%' }} spacing={1}>
                            <Alert severity="info">
                                No hay proyectos con los filtros aplicados!
                            </Alert>
                        </Stack>
                    )}
                </Container>
            </Box>

            <Footer />
        </>
    );
};

export default ProjectsStudents;
