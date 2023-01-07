import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getAllProject,
    // clearProjects,
    getMyProjectsCompany,
    // getProject,
    getProjectsFilter,
} from '../../actions/projects';
import { State } from '../../reducers/rootReducer';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Container } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { getListStudents } from '../../actions/student';

let limit;
let init;
const Pages: FC = () => {
    let location = useLocation();
    // console.log(location);
    let dispatch = useDispatch();
    let token = localStorage.getItem('token') || '';
    const [definePage, setPage] = useState({ limit: 6, init: 0 });
    let { projectsFilter } = useSelector((state: State) => state.project);
    const { users, total1 } = useSelector((state: any) => state.student);

    // let { myProjectCompany } = useSelector((state: State) => state.project);

    useEffect(() => {}, [projectsFilter, users]);
    const { total } = useSelector((state: State) => state.project);
    const { filters } = useSelector((state: State) => state.project);
    // console.log(filters);
    let numberOfPages;
    if (total1) {
        numberOfPages = Math.ceil(total1 / 6);
    }
    if (total) {
        numberOfPages = Math.ceil(total / 6);
    }
    const handlerClick = async (e: any, value: any) => {
        // setPage({limit:value*6,init:(value*6)-6})
        limit = 6;
        init = value * 6 - 6;
        // console.log(e);
        if (
            location.pathname === '/dashboard' ||
            location.pathname === '/projects'
        ) {
            if (filters) {
                dispatch(
                    getProjectsFilter(
                        filters.typeOfOrder,
                        filters.tecnologies,
                        token,
                        filters.name,
                        filters.category,
                        filters.stateOfProject,
                        limit,
                        init
                    )
                );
            } else {
                dispatch(
                    getProjectsFilter(
                        undefined,
                        undefined,
                        token,
                        undefined,
                        undefined,
                        undefined,
                        limit,
                        init
                    )
                );
            }
        }
        if (location.pathname === '/myprojects') {
            dispatch(getMyProjectsCompany(token, value));
        }
        if (
            location.pathname === '/Adminacceptprojects' ||
            location.pathname === '/AdminProject'
        ) {
            if (filters) {
                dispatch(
                    getAllProject(
                        filters.typeOfOrder,
                        filters.tecnologies,
                        token,
                        filters.name,
                        filters.category,
                        filters.stateOfProject,
                        limit,
                        init
                    )
                );
            } else {
                dispatch(
                    getAllProject(
                        undefined,
                        undefined,
                        token,
                        undefined,
                        undefined,
                        undefined,
                        limit,
                        init
                    )
                );
            }
        }

        if (location.pathname === '/adminStudent') {
            dispatch(getListStudents(token, false, limit, init));
        }
    };

    return (
        <Container sx={{ marginTop: 2 }} maxWidth="lg">
            <Stack spacing={2}>
                <Pagination
                    sx={{ alignSelf: 'center' }}
                    count={numberOfPages}
                    color="primary"
                    onChange={handlerClick}
                />
            </Stack>
        </Container>
    );
};

export default Pages;
