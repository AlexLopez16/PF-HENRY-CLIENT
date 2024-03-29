/**
 * By Sciangula Hugo.
 * NOTA: aca el estudiante va a poder ver todos los detalles con respecto a los proyectos.
 * SE QUE FALTA MODULARIZARRRRRRRR :D, lo voy a hacer despues.
 */

import {
  Alert,
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../reducers/rootReducer';
import { getStudentInfo, unApplyStudent } from '../../actions/student';
import BusinessIcon from '@mui/icons-material/Business';
// Dejamos importado el link porque quiza despues se pueda mostrar el detalle de cada companero.
import { SnackBar } from '../SnackBar/SnackBar';
import { ProjectCardSkeleton } from './ProjectCardSkeleton';
import { WorkedProjectCard } from './WorkedProjectCard';
import { RequestProjectCard } from './RequestProjectCard';
import { PreLoader } from '../PreLoader/PreLoader';
import studentRegisterbg from '../../assets/studentRegister.png';
import Footer from '../../pages/LandingPage/Footer';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const MyProjectStudent: FC = () => {
  const dispatch = useDispatch();

  const { auth, student }: any = useSelector((state: State) => state);
  const { inProgress } = useSelector((state: State) => state.request);

  const token = localStorage.getItem('token') || '';

  useEffect(() => {
    dispatch(getStudentInfo(auth.data.id, token));
  }, [dispatch]);

  const { user }: any = student;

  const studentData: any = user?.working?.length
    ? user.working[0]
    : user.project?.length
    ? user.project
    : null;
  const handleClick = async (projectId: string | any) => {
    dispatch(unApplyStudent(user.id, projectId, localStorage.getItem('token')));
  };

  const navigate = useNavigate();

  const GoBack = () => {
    navigate('/projects');
  };

  return (
    <>
      {' '}
      <Box
        sx={{
          backgroundImage: `url(${studentRegisterbg})`,
          pb: 40,
          pt: 10,
        }}
      >
        <Container
          sx={{
            alignContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            flecDirection: 'column',
          }}
        >
          <Grid
            container
            direction='column'
            justifyContent='flex-start'
            alignItems='center'
          >
            <FormControl>
              <Button
                startIcon={<ArrowBackIosNewIcon />}
                onClick={GoBack}
                size='small'
                variant='contained'
                color='secondary'
                sx={{
                  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                  fontFamily: 'montserrat',
                  fontWeight: 'bold',
                  mb: 10,
                }}
              >
                Regresar
              </Button>
            </FormControl>
          </Grid>
          <SnackBar />
          <PreLoader />
          {inProgress ? (
            <ProjectCardSkeleton />
          ) : (
            <>
              {user.working?.length ? (
                <>
                  <WorkedProjectCard
                    userId={user?.id}
                    projectId={studentData?.uid}
                    category={studentData?.category}
                    projectName={studentData?.name}
                    companyName={studentData?.company?.name}
                    companyId={studentData?.company?._id}
                    description={studentData?.description}
                    requirements={studentData?.requirements}
                    stateOfProject={studentData?.stateOfProject}
                    participants={studentData?.participants}
                    accepts={studentData?.accepts}
                  />
                </>
              ) : user.project?.length ? (
                <>
                  <Container
                    sx={{
                      alignContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
                    <Typography
                      sx={{
                        color: 'black',
                        fontFamily: 'montserrat',
                        fontSize: 35,
                        backgroundColor: 'white',
                        borderRadius: 15,
                        mb: 10,
                      }}
                    >
                      Mis Proyectos
                    </Typography>
                  </Container>
                  <div>
                    {user?.project &&
                      user?.project?.map((project: any) => (
                        <RequestProjectCard
                          userId={user?.id}
                          projectId={project?.uid}
                          category={project?.category}
                          projectName={project?.name}
                          companyName={project?.company?.name}
                          companyId={studentData?.company?._id}
                          description={project?.description}
                          stateOfProject={project?.stateOfProject}
                          participants={project?.participants}
                          accepts={project?.accepts}
                        />
                      ))}
                  </div>
                </>
              ) : (
                <Stack
                  spacing={2}
                  sx={{
                    width: '100%',
                    pb: 50,
                    pt: 30,
                    justifyContent: 'center',
                    display: 'flex',
                    alignContent: 'center',
                  }}
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
                    No estas aplicando a ningun proyecto!
                  </Alert>
                </Stack>
              )}
            </>
          )}
        </Container>
        <Box />
      </Box>
      <Footer />
    </>
  );
};
export default MyProjectStudent;
