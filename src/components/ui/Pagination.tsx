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
import { getCompany } from '../../actions/company';

let limit;
let init;
const Pages: FC = () => {
    let location = useLocation();

    let dispatch = useDispatch();
    let token = localStorage.getItem('token') || '';
    const [definePage, setPage] = useState({ limit: 6, init: 0 });
    let { projectsFilter } = useSelector((state: State) => state.project);
    const { users, total1 } = useSelector((state: any) => state.student);
    const { user, total2 } = useSelector((state: any) => state.company);

    // let { myProjectCompany } = useSelector((state: State) => state.project);

    useEffect(() => {}, [projectsFilter, users, user]);
    const { total } = useSelector((state: State) => state.project);
    const { filters } = useSelector((state: State) => state.project);

    let numberOfPages;
    if (total1) {
        numberOfPages = Math.ceil(total1 / 6);
    }
    if (total) {
        numberOfPages = Math.ceil(total / 6);
    }
    if (total2) {
        numberOfPages = Math.ceil(total2 / 6);
    }
    const handlerClick = async (e: any, value: any) => {
        // setPage({limit:value*6,init:(value*6)-6})
        limit = 6;
        init = value * 6 - 6;
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
            location.pathname === '/AdminProject' ||
            location.pathname === '/dashboard/projects' ||
            location.pathname === '/dashboard/aceptProjects'
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

        if (
            location.pathname === '/adminStudent' ||
            location.pathname === '/dashboard/students'
        ) {
            dispatch(getListStudents(token, false, limit, init));
        }

        if (location.pathname === '/dashboard/companies') {
            dispatch(getCompany(token, false, limit, init));
        }
    };

    return (
        <Container sx={{ marginTop: 5, marginBottom: 5 }} maxWidth="lg">
            <Stack spacing={2}>
                <Pagination
                    size="small"
                    sx={{ alignSelf: 'center', fontStyle: 'bolder' }}
                    count={numberOfPages}
                    color="secondary"
                    onChange={handlerClick}
                />
            </Stack>
        </Container>
    );
};

export default Pages;
