import React, { useState } from 'react';
import { AppBar, Button, Tab, Tabs, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router';

import logoBlackNav from '../../assets/logoBlackNav.png';

const Header = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  return (
    <AppBar position='sticky' color='primary' sx={{ fontColor: 'black' }}>
      <Toolbar
        sx={{
          justifyContent: 'space-between',
        }}
      >
        <img
          src={logoBlackNav}
          style={{
            justifyContent: 'center',
            height: '10%',
            width: '10%',
          }}
        />
        <div
          style={{
            paddingRight: '5%',
          }}
        >
          <Tab
            style={{
              fontFamily: 'poppins',
              fontSize: 17,
              color: 'black',
            }}
            onClick={() => navigate('/')}
            label='Inicio'
          />
          <Tab
            style={{
              fontFamily: 'poppins',
              fontSize: 17,
            }}
            onClick={() => navigate('/aboutUs')}
            label='Nosotros'
          />
          <Tab
            style={{
              fontFamily: 'poppins',
              fontSize: 17,
            }}
            onClick={() => navigate('/contact')}
            label='Contacto'
          />
        </div>
        <Button
          color='primary'
          style={{
            fontFamily: 'poppins',
          }}
          onClick={() => navigate('/login')}
          variant='contained'
        >
          Ingresar
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
