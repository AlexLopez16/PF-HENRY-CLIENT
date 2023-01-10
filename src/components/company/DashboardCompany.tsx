import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProjectCard from '../project/ProjectCard';
import { clearProjects, getProject } from '../../actions/projects';
import { Box, Container } from '@mui/system';
import Pages from '../ui/Pagination';

// import StudentCard from "../student/StudentCard";

// import { Grid, Pagination } from '@mui/material';

const DashboardCompany: FC = () => {
    let token = localStorage.getItem('token');
    const dispatch = useDispatch();
    const { projectsFilter } = useSelector((state: any) => state.project);
    // console.log(projectsFilter);

    React.useEffect(() => {
        dispatch(getProject(token as string));
        return () => {
            dispatch(clearProjects({ projects: [], total: 0 }));
        };
    }, [dispatch]);

    return (
        <Box>
            <Pages />
            <Container maxWidth="lg" sx={{ marginLeft: 80 }}>
                {projectsFilter.length &&
                    projectsFilter.map((p: any) => (
                        <ProjectCard
                            key={p}
                            name={p.name}
                            //   description={p.description}
                            participants={p.participants}
                            requirements={p.requirements}
                            students={p.students}
                            company={p.company?.name}
                            stateOfProject={p.stateOfProject}
                            id={p.uid}
                            category={p.category}
                        />
                    ))}
            </Container>
            <Pages />
        </Box>
    );
};

export default DashboardCompany;
