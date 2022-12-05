import { FC } from 'react';
import { Button, Typography, Box } from '@mui/material';
import style from '../styles/LandingPage.module.css';


const buttonSignUp = {
    background: '#ffd700',
    border: 'none',
    color: '#252525',
    fontWeight: 700,
    '&:hover': {
      background: '#272727',
      border: 'none'
    }
}
const buttonSignIn = {
    background: '#252525',
    color: '#ffd700',
    border: 'none',
    fontWeight: 700,
    '&:hover': {
      background: '#272727',
      border: 'none'
    }
}


export const LandingPage: FC = () => {
  return (
    
      <Box 
        height='100vh' 
        display='flex' 
        justifyContent='space-around' 
        sx={{background: '#cccac5'}}>

            <div className={style.content_left}>
              <Typography>
                <h1>Welcome to the Henry app</h1>
              </Typography>
              <h3>Conectamos los mejores talentos independientes con las mejores empresas.</h3>

              <Button
              className={style.button_sign_in} 
              sx={buttonSignIn} 
              variant='outlined'>
                Ser parte del proyecto
              </Button>
              <span>or</span>
              <Button 
                className={style.button_sign_up} 
                sx={buttonSignUp} 
                variant='outlined'>
                  Crear proyecto
                </Button>
            </div> 
         
            <div className={style.content_right}></div>

      </Box>
    

    


  );
};
