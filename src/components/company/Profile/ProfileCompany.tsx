import { FC, useState, useEffect } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../reducers/rootReducer';
import { HeaderFormCompany } from './HeaderFormCompany';
import { companyGetInfo } from '../../../actions/company';
import { HeaderCompany } from './HeaderCompany';
import Footer from '../../../pages/LandingPage/Footer';
import bgComponents from '../../../assets/bgComponents.png';

export const ProfileCompany: FC = () => {
  const [edit, setEdit] = useState({
    header: false,
  });

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
          height: '100%',
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
            pt: 5,
          }}
        >
          <Typography
            sx={{
              
              width: '80%',
              color: 'white',
              fontFamily: 'montserrat',
              fontSize: 35,
              backgroundColor: '#0C252F',
              borderRadius: 15,
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
              />
            )}
          </Grid>
        </Container>
        <Footer />
      </Box>
    </>
  );
};
