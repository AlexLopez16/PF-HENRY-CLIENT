import { FC } from 'react';
import { Button, Typography, Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import style from '../styles/register.module.css';
import registerbg from '../assets/registerbg.png';
import Header from '../components/NavbarLandingPage/HeaderLanding';

export const Register: FC = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          backgroundImage: `url(${registerbg})`,
          height: '940px',
          textAlign: 'center',
        }}
      >
        <Grid
          container
          direction='column'
          justifyContent='center'
          alignItems='center'
        >
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
            }}
          >
            Como empresa crea un proyecto, o como alumno se parte de uno.
          </Typography>

          <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
          >
            <div className={style.content_left}>
              <Link className={style.link} to='/signup/student'>
                <Button
                  color='primary'
                  style={{
                    fontFamily: 'poppins',
                    marginTop: 280,
                    position: 'relative',
                  }}
                  variant='contained'
                >
                  Estudiante
                </Button>
              </Link>
            </div>
            <div className={style.content_right}>
              <Link className={style.link} to='/signup/company'>
                <Button
                  color='primary'
                  style={{
                    fontFamily: 'poppins',
                    marginTop: 280,
                    position: 'relative',
                  }}
                  variant='contained'
                >
                  Empresa
                </Button>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
