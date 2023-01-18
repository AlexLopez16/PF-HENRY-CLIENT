import { FC } from 'react';
import { Button, Typography, Box, Grid, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import style from '../styles/register.module.css';
import registerbg from '../assets/registerbg.png';
import Header from '../components/NavbarLandingPage/HeaderLanding';
import Footer from './LandingPage/Footer';

export const Register: FC = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${registerbg})`,
          pb: 50,
        }}
      >
        <Header />
        <Container>
          <Typography
            sx={{
              color: 'white',
              mt: 20,
              mb: 10,
              fontFamily: 'montserrat',
              fontSize: '25px',
              textAlign: 'center',
              justifyContent: 'center',
              display: 'flex',
              backgroundColor:'black',
              borderRadius:5,
            }}
          >
            Como empresa crea un proyecto, o como alumno se parte de uno.
          </Typography>

          <Container
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <div className={style.content_left}>
              <Link to='/signup/student'>
                <Button
                  color='primary'
                  sx={{
                    fontFamily: 'poppins',
                    marginTop: 30,
                    position: 'relative',
                  }}
                  variant='contained'
                >
                  Estudiante
                </Button>
              </Link>
            </div>
            <div className={style.content_right}>
              <Link to='/signup/company'>
                <Button
                  color='primary'
                  sx={{
                    fontFamily: 'poppins',
                    marginTop: 30,
                    position: 'relative',
                  }}
                  variant='contained'
                >
                  Empresa
                </Button>
              </Link>
            </div>
          </Container>
        </Container>
      </Box>
      <Footer />
    </>
  );
};
