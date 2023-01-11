import { FC, useState, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../reducers/rootReducer';
import { HeaderFormCompany } from './HeaderFormCompany';
import { companyGetInfo } from '../../../actions/company';
import { HeaderCompany } from './HeaderCompany';
import Footer from '../../../pages/LandingPage/Footer';
import bgComponents from '../../../assets/bgComponents.png';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
export const ProfileCompany: FC = () => {
  const [edit, setEdit] = useState({
    header: false,
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
    dispatch(companyGetInfo(id, token));
  }, [dispatch]);

  interface Props {
    name: string;
    country: string;
    image: string;
    website: string;
  }

  const { user } = useSelector((state: State) => state.company);
  const { name, country, image, website } = user as Props;

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${bgComponents})`,
        }}
      >
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
              color: 'white',
              fontFamily: 'montserrat',
              fontSize: 35,
              backgroundColor: '#0C252F',
              borderRadius: 10,
              mb: 5,
              mt: 5,
            }}
          >
            Mi perfil
          </Typography>
        </Container>
        <Container>
          <Grid>
            {edit.header ? (
              <HeaderFormCompany
                edit={edit}
                setEdit={setEdit}
                name={name}
                country={country}
                website={website}
              />
            ) : (
              <HeaderCompany
                edit={edit}
                setEdit={setEdit}
                name={name}
                country={country}
                image={image}
                website={website}
              />
            )}
          </Grid>
        </Container>
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
                mb: 15,
              }}
            >
              Regresar
            </Button>
          </FormControl>
        </Grid>
        <Footer />
      </Box>
    </>
  );
};
