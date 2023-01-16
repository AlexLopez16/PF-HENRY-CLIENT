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
import { getAdmins } from '../../actions/Admin';
import { getAllReviews } from '../../actions/Admin';
import { AdminPanelSettingsSharp } from '@mui/icons-material';

let limit;
let init;
const Pages: FC = () => {
    let location = useLocation();

    let dispatch = useDispatch();
    let token = localStorage.getItem('token') || '';
    const [definePage, setPage] = useState({ limit: 6, init: 0 });
    let { projectsFilter, filters, total } = useSelector(
        (state: State) => state.project
    );
    const { users, total1 } = useSelector((state: any) => state.student);
    const { user, total2 } = useSelector((state: any) => state.company);

    const { reviews, total3, filterReview } = useSelector(
        (state: State) => state.review
    );
    const { admins, total4 } = useSelector((state: State) => state.admin);
    // let { myProjectCompany } = useSelector((state: State) => state.project);

    useEffect(() => {}, [projectsFilter, users, user, reviews, admins]);
    // const { total } = useSelector((state: State) => state.project);

    let numberOfPages;
    if (total1) {
        console.log('estudiante', total1);
        numberOfPages = Math.ceil(total1 / 6);
    }
    if (total) {
        console.log('proyectos', total);
        numberOfPages = Math.ceil(total / 6);
    }
    if (total2) {
        console.log('compania', total2);
        numberOfPages = Math.ceil(total2 / 6);
    }
    if (total3) {
        console.log('review', total3);
        numberOfPages = Math.ceil(total3 / 6);
    }
    if (total4) {
        console.log('admin', total4);
        numberOfPages = Math.ceil(total4 / 6);
    }
    const handlerClick = async (e: any, value: any) => {
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

        if (location.pathname === '/dashboard/admins') {
            dispatch(getAdmins(token, limit, init));
        }

        if (location.pathname === '/dashboard/getreviews') {
            dispatch(getAllReviews(token, limit, init, null));
            if (filterReview) {
                dispatch(getAllReviews(token, limit, init, filterReview));
            }
        }
    };

    return (
        <Container sx={{ marginTop: 5, marginBottom: 5 }} maxWidth="lg">
            <Stack spacing={2}>
                <Pagination
                    size="small"
                    sx={{ alignSelf: 'center', fontStyle: 'bolder' }}
                    count={numberOfPages}
                    color="primary"
                    onChange={handlerClick}
                    showFirstButton
                    showLastButton
                />
            </Stack>
        </Container>
    );
};

export default Pages;
