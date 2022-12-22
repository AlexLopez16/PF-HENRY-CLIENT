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
      <AppBar>
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
                console.log(value);
                setValue(value);
              }}
            >
              <Tab onClick={HomeClick} label='Inicio' />
              <Tab onClick={AboutClick} label='Nosotros' />
              <Tab onClick={ContactClick} label='Contacto' />
            </Tabs>
            <Button onClick={signInClick} variant='contained'>
              Login
            </Button>
          </>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
