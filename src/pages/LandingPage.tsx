import { FC } from 'react';
import { Button, Typography, Box } from '@mui/material';
import style from '../styles/LandingPage.module.css';
import { Link } from 'react-router-dom';


const buttonSignUp = {
  alignItems: 'center',
  background: '#ffd700',
  border: 2,
  borderRadius: 8,
  color: '#111',
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
      background: '#272727',
      color: '#ffd700',
      border: 'none',
      TransitionEvent: 1,
    }
}
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
    }
}

const buttonSing = {
  display: 'block',
  position: 'absolute',
  right: 20,
  top: 10,
  borderRadius: 8,
  background: '#ffd700',
  color: '#111',
  border: 'none',
  '&:hover': {
    background: '#272727',
    border: 'none',
    color: '#ffd700',
    TransitionEvent: 1,
  }

}



const LandingPage: FC = () => {
  return (
    <>
    <div>
      <Link 
        to='/login'
        className={style.link}>
         <Button 
          className={style.button_sign} 
          sx={buttonSing} 
          variant='outlined'>
          Ingresar
         </Button>
      </Link> 

    </div> 
    
      <Box 
        height='100vh' 
        display='flex' 
        justifyContent='space-around' 
        sx={{background: '#e8ca68'}}>

            <div className={style.content_left}>
              <Typography variant='h1'>
                Welcome to NABIJASH
              </Typography>

              <Typography variant='h3'>
                Buscamos hacer crecer la comunidad henry y preparar a los alumnos para nuevos desafios
              </Typography>

              <div className={style.buttons_login}>
                
                <Link
                to= '/loginStudent'
                className={style.link}>
                  <Button
                  className={style.button_sign_in} 
                  sx={buttonSignIn} 
                  variant='outlined'>
                    Ser parte del proyecto
                  </Button>
                </Link>

                  <span>o</span>

                <Link 
                  to='/loginCompany'
                  className={style.link}>
                  <Button 
                    className={style.button_sign_up} 
                    sx={buttonSignUp} 
                    variant='outlined'>
                      Crear proyecto
                    </Button>
                </Link>


                
                <Link 
                  to='/projectForm'
              >
                  <Button 
                    variant='outlined'>
                      Crear proyecto de enserio
                    </Button>
                </Link>
                

              </div>
            </div> 

         
            <div className={style.content_right}></div>

      </Box>
    </>
  );
};

export default LandingPage;
