import { FC } from 'react';
import { Button, Typography, Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import style from '../styles/register.module.css';
import registerbg from '../../public/assets/registerbg.png';
import Header from '../components/NavbarLandingPage/HeaderLanding';

const buttonSignIn = {
  alignItems: 'center',
  background: 'black',
  borderRadius: 8,
  color: '#ffff01',
  cursor: 'pointer',
  fontSize: 14,
  height: 35,
  mt: 35,
  justifyContent: 'center',
  maxWidth: '100%',
  position: 'relative',
  userSelect: 'none',
  fontWeight: 500,
  '&:hover': {
    background: '#ffd700',
    border: 'none',
    color: '#272727',
    TransitionEvent: 1,
  },
};
export const Register: FC = () => {
  return (
    <>
    <Header/>
      <Box
        sx={{
          backgroundImage: `url(${registerbg})`,
          height: '940px',
          textAlign: 'center'
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
                <Button sx={buttonSignIn} variant='outlined'>
                  Estudiante
                </Button>
              </Link>
            </div>
            <div className={style.content_right}>
              <Link className={style.link} to='/signup/company'>
                <Button className={style.buttonRegister} sx={buttonSignIn} variant='outlined'
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
