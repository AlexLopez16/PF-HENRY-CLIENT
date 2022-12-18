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

  return (
    <React.Fragment>
      <AppBar sx={{ background: '#ffff01' }}>
        <Toolbar>
          <>
            <Tabs
              sx={{
                justifyContent: 'center',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignContent: 'space-around',
              }}
              indicatorColor='secondary'
              textColor='inherit'
              value={value}
              onChange={(e, value) => setValue(value)}
            >
              <Tab onClick={HomeClick} label='Inicio' />
              <Tab onClick={AboutClick} label='Nosotros' />
              <Tab onClick={ContactClick} label='Contacto' />
            </Tabs>
            <Button variant='contained'>Login</Button>
          </>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
