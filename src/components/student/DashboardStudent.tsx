import { FC } from 'react';
import { useSelector } from 'react-redux';

import { Alert, Stack, Box } from '@mui/material';

import ProjectCard from '../project/ProjectCard';
import { Filters } from '../ui/Filters';
import { State } from '../../reducers/rootReducer';

const DashboardStudent: FC = () => {
  const { projectsFilter } = useSelector((state: State) => state.project);
  let info = projectsFilter;

  return (
    <>
      <Filters />
      <Box>
        {info.length ? (
          info.map((e: any) => (
            <ProjectCard
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

export default DashboardStudent;
