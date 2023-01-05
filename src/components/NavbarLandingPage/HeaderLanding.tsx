import React, { useState } from 'react';
import { AppBar, Button, Tab, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router';

const Header = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  return (
      <AppBar component='nav' position='sticky' color='primary'>
        <Toolbar
          sx={{
            justifyContent: 'space-between',
          }}
        >
          <div>
              <Tab
                style={{
                  fontFamily: 'poppins',
                }}
                onClick={() => navigate('/')}
                label='Inicio'
              />
              <Tab
                style={{
                  fontFamily: 'poppins',
                }}
                onClick={() => navigate('/aboutUs')}
                label='Nosotros'
              />
              <Tab
                style={{
                  fontFamily: 'poppins',
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
