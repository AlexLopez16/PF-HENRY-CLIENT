import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Box, Stack, Alert } from '@mui/material';

import { Filters } from '../components/ui/Filters';
import ProjectCard from '../components/project/ProjectCard';
import { State } from '../reducers/rootReducer';
// import ProjectsStudents from '../components/student/ProjectsStudents';

const DashboardPage: FC = () => {
  const { projectsFilter } = useSelector((state: State) => state.project);
  return (
    <>
      <Filters />
      <Box>
        {projectsFilter.length ? (
          projectsFilter.map((e: any) => (
            <ProjectCard
              key={e.uid} //agregue key
              name={e.name}
              participants={e.participants}
              requirements={e.requirements}
              students={e.students}
              company={e.company.name}
              state={e.state}
              stateOfProject={e.stateOfProject}
              id={e.uid}
              category={e.category}
            />
          ))
        ) : (
          <Stack
            sx={{
              width: '100%',
              pb: 70,
              pt: 15,
              justifyContent: 'center',
              display: 'flex',
              alignContent: 'center',
            }}
            spacing={2}
          >
            <Alert
              severity='info'
              sx={{
                justifyContent: 'center',
                display: 'flex',
                alignContent: 'center',
                borderRadius: 50,
                fontFamily: 'poppins',
                color: 'black',
              }}
            >
              No hay proyectos con los filtros aplicados!
            </Alert>
          </Stack>
        )}
      </Box>
    </>
  );
};

export default DashboardPage;
