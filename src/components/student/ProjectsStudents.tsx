/**
 * Redisenado por Hugo.
 * PD: Si no te gusta nos podemos cagar bien a trompadas porque esta bien feo.
 */
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearProjects, getProjectsFilter } from '../../actions/projects';
import ProjectCard from '../project/ProjectCard';
import { State } from '../../reducers/rootReducer';

import { Box } from '@mui/system';
import Alert from '@mui/material/Alert/Alert';
import Stack from '@mui/material/Stack/Stack';
import { Navigate } from 'react-router-dom';
import { types } from '../../types/types';
import { Container } from '@mui/material';

import StudentsFilter from './StudentsFilter';
import Pages from '../ui/Pagination';
import { PreLoader } from '../PreLoader/PreLoader';
import Footer from '../../pages/LandingPage/Footer';

import bgComponents from "../../assets/bgComponents.png";
import { Alert3 } from "../AlertMail/alertMailStudent";

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
        0,
      ),
    );
    return () => {
      dispatch(clearProjects({ projects: [], total: 0 }));
    };
  }, [dispatch, token, inputFilter]);

  const { projectsFilter } = useSelector((state: State) => state.project);

  let info = projectsFilter;

  interface props {
    status: number;
    data: {
      id: string;
      rol: string;
      email: any
    };
  }

  const { status, data }: props = useSelector((state: State) => state.auth);
  const { user } = useSelector((state: State) => state.student);

  useEffect(() => {
    data.rol === "STUDENT_ROL" && user.email === null
      ? Alert3(data.id)
      : ""
  }, [])

  if (status === 401) {
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
            <Stack
              sx={{
                width: "100%",
                pb: 70,
                pt: 15,
                justifyContent: "center",
                display: "flex",
                alignContent: "center",
              }}
              spacing={2}
            >
              <Alert
                severity="info"
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  alignContent: "center",
                  borderRadius: 50,
                  fontFamily: "poppins",
                  color: "black",
                }}
              >
                No hay proyectos con los filtros aplicados!
              </Alert>
            </Stack>
          )}
        </Container>
        <Pages />
      </Box>
      <Footer />
    </>
  );
};

export default ProjectsStudents;
