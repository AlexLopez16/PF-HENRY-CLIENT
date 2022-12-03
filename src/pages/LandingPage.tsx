import { FC } from 'react';
import { Button, Typography } from '@mui/material';
import style from '../styles/LandingPage.module.css';


const buttonSignUp = {
    background: 'yellow',
    border: 'none',
    color: 'black'
}
const buttonSignIn = {
    background: 'none',
    border: '1px solid black',
    color: 'black'
}

export const LandingPage: FC = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.content_left}>
          <Typography variant='h5'>
            <h1>Welcome to the Henry app</h1>
          </Typography>
          <h3>Mira mama soy un incompetente 2</h3>

          <Button className={style.button_sign_in} sx={buttonSignIn} variant='outlined'>Sign in</Button>
          <span>or</span>
          <Button className={style.button_sign_up} sx={buttonSignUp} variant='outlined'>Sing up</Button>
        </div>
        <div className={style.content_right}></div>
      </div>
    </div>
  );
};
