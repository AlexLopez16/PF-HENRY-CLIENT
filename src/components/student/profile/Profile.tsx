import { FC, useState, useEffect } from 'react';
import { Box, Button, Container, FormControl, Grid, Typography } from '@mui/material';

import { Header } from './Header';
import { About } from './About';
import { Skills } from './Skills';
import { HeaderForm } from './HeaderForm';
import { AboutForm } from './AboutForm';
import { SkillsForm } from './SkillsForm';
import { useDispatch, useSelector } from 'react-redux';
import { getStudentInfo } from '../../../actions/student';
import { State } from '../../../reducers/rootReducer';
import { useNavigate } from 'react-router-dom';
import studentRegisterbg from '../../../assets/studentRegister.png';
import Footer from '../../../pages/LandingPage/Footer';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { PreLoader } from '../../PreLoader/PreLoader';

export const Profile: FC = () => {
  const [edit, setEdit] = useState({
    header: false,
    about: false,
    skills: false,
  });

  const Navigate = useNavigate();
  const GoBack = () => {
    Navigate('/projects');
  };

  const dispatch = useDispatch();
  const { data } = useSelector((state: State) => state.auth);
  const { id } = data;
  const token = localStorage.getItem('token') || '';

  useEffect(() => {
    dispatch(getStudentInfo(id, token));
  }, [dispatch]);

  interface Props {
    description: string;
    name: string;
    lastName: string;
    tecnologies: [];
    country: string;
    image: string;
    email: string;
    lenguage:[];
  }

  const { user } = useSelector((state: State) => state.student);
  const { description, name, lastName, country, tecnologies, image, email,lenguage } =
    user as Props;
console.log(lenguage);

  return (
    <Box
      sx={{
        backgroundImage: `url(${studentRegisterbg})`,
      }}
    >
      <PreLoader/>
      <Container
        maxWidth='md'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          pt: 10,
        }}
      >
        <Typography
          sx={{
            width: '80%',
            color: 'black',
            fontFamily: 'montserrat',
            fontSize: 35,
            backgroundColor: '#ffff01',
            borderRadius: 10,
            mt: 5,
          }}
        >
          Mi perfil
        </Typography>
      </Container>
      <Grid>
        {edit.header ? (
          <HeaderForm
            edit={edit}
            setEdit={setEdit}
            name={name}
            lastName={lastName}
            country={country}
            email={email}
            lenguage={lenguage}
          />
        ) : (
          <Header
            edit={edit}
            setEdit={setEdit}
            name={name}
            lastName={lastName}
            country={country}
            image={image}
            email={email}
            lenguage={lenguage}
           
          />
        )}
        {edit.about ? (
          <AboutForm edit={edit} setEdit={setEdit} description={description} />
        ) : (
          <About edit={edit} setEdit={setEdit} description={description} />
        )}
        {edit.skills ? (
          <SkillsForm edit={edit} setEdit={setEdit} tecnologies={tecnologies} />
        ) : (
          <Skills edit={edit} setEdit={setEdit} />
        )}
      </Grid>
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
              mt:5,
            }}
          >
            Regresar
          </Button>
        </FormControl>
      </Grid>
      <Footer/>
    </Box>
  );
};
