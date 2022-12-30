import React, { useState } from 'react';
import { AppBar, Button, Tab, Tabs, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router';

const Header = () => {
  const [value, setValue] = useState();
  const navigate = useNavigate();
  
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
            </Tabs>
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
          </>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
