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
    return (
        <Box>
            <ProjectsStudents />
        </Box>
    );
};

export default ProjectsPage;
