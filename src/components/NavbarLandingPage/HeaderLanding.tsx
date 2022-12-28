import React, { useState } from 'react';
import { AppBar, Button, Tab, Tabs, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router';

const Header = () => {
  const [value, setValue] = useState();
  const navigate = useNavigate();

  const AboutClick = () => {
    navigate('/AboutUs');
  };
  const HomeClick = () => {
    navigate('/landing');
  };

  const ContactClick = () => {
    navigate('/contact');
  };
  const signInClick = () => {
    navigate('/login');
  };

  return (
    <React.Fragment>
      <AppBar component='nav' position='sticky' color='primary'>
        <Toolbar
          sx={{
            justifyContent: 'space-between',
          }}
        >
          <>
            <Tabs
              indicatorColor='secondary'
              textColor='secondary'
              value={value}
              onChange={(e, value) => {
                setValue(value);
              }}
            >
              <Tab
                style={{
                  fontFamily: 'poppins',
                }}
                onClick={HomeClick}
                label='Inicio'
              />
              <Tab
                style={{
                  fontFamily: 'poppins',
                }}
                onClick={AboutClick}
                label='Nosotros'
              />
              <Tab
                style={{
                  fontFamily: 'poppins',
                }}
                onClick={ContactClick}
                label='Contacto'
              />
            </Tabs>
            <Button
              color='primary'
              style={{
                fontFamily: 'poppins',
              }}
              onClick={signInClick}
              variant='contained'
            >
              Ingresar
            </Button>
          </>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
