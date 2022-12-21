import { FC } from 'react';
import { Button, Typography, Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import style from '../styles/register.module.css';
import registerbg from '../../public/assets/registerbg.png';

const buttonSignIn = {
  alignItems: 'center',
  background: '#272727',
  border: 2,
  borderRadius: 8,
  color: '#ffd700',
  cursor: 'pointer',
  fontSize: 16,
  height: 48,
  justifyContent: 'center',
  maxWidth: '100%',
  p: '0 25px',
  position: 'relative',
  userSelect: 'none',
  fontWeight: 700,
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
      <Box
        height='100vh'
        display='flex'
        justifyContent='space-around'
        sx={{
          backgroundImage: `url(${registerbg})`,
        }}
      >
        {/* <div className={style.card_transition}>
        <Typography textAlign='center' variant='h4' color='primary'>
          Como empresa crea un proyecto o como alumno se parte de uno.
        </Typography>
      </div>
        <div className={style.content_left}>
          <Link className={style.link} to='/signup/student'>
            <Button sx={buttonSignIn} variant='outlined'>
              Estudiante
            </Button>
          </Link>
        </div>
        <div className={style.content_right}>
          <Link className={style.link} to='/signup/company'>
            <Button sx={buttonSignIn} variant='outlined'>
              Empresa
            </Button>
          </Link>
        </div> */}
      
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
          textAlign='center'
        >
          <Grid item xs={4}>
            <div className={style.content_left}>
              <Link className={style.link} to='/signup/student'>
                <Button sx={buttonSignIn} variant='outlined'>
                  Estudiante
                </Button>
              </Link>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={style.content_right}>
              <Link className={style.link} to='/signup/company'>
                <Button sx={buttonSignIn} variant='outlined' color='secondary'>
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
