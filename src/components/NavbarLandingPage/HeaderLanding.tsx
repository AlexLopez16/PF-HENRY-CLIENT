import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logoBlackNav from '../../assets/logoBlackNav.png';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  return (
    <AppBar
      position='static'
      color='primary'
      sx={{
        fontColor: 'black',
        fontFamily: 'poppins',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <img
          src={logoBlackNav}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '20%',
            width: '20%',
          }}
        />
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem>
                <Button
                color='primary'
                onClick={() => navigate('/login')}
                sx={{
                  fontFamily: 'poppins',
                }}
                variant='contained'
              >
                Ingresar
              </Button>
              </MenuItem>
              <MenuItem>
                <Button color='inherit'>
                  <Link to='/'>Inicio</Link>
                </Button>
              </MenuItem>
              <MenuItem>
                <Button color='inherit'>
                  <Link to='/aboutUs'>Nosotros</Link>
                </Button>
              </MenuItem>
              <MenuItem>
                <Button color='inherit'>
                  <Link to='/contact'>Contacto</Link>
                </Button>
              </MenuItem>
              <MenuItem>
                <Button
                  color='inherit'
                  onClick={() =>
                    window.open('https://blog.soyhenry.com/', '_blank')
                  }
                >
                  Blog
                </Button>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <MenuItem>
              <Button
                color='primary'
                sx={{
                  fontFamily: 'poppins',
                  color: 'black',
                }}
                variant='contained'
              >
                <Link
                  to='/'
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    fontFamily: 'poppins',
                  }}
                >
                  Inicio
                </Link>
              </Button>
            </MenuItem>
            <MenuItem>
              <Button
                color='primary'
                sx={{
                  fontFamily: 'poppins',
                  textDecoration: 'none',
                }}
                variant='contained'
              >
                <Link
                  to='/aboutUs'
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    fontFamily: 'poppins',
                  }}
                >
                  Nosotros
                </Link>
              </Button>
            </MenuItem>
            <MenuItem>
              <Button
                color='primary'
                onClick={() =>
                  window.open('https://blog.soyhenry.com/', '_blank')
                }
                sx={{
                  fontFamily: 'poppins',
                  textDecoration: 'none',
                }}
                variant='contained'
              >
                Blog
              </Button>
            </MenuItem>
            <MenuItem>
              <Button
                color='primary'
                sx={{
                  fontFamily: 'poppins',
                  textDecoration: 'none',
                }}
                variant='contained'
              >
                <Link
                  to='/contact'
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    fontFamily: 'poppins',
                  }}
                >
                  Contacto
                </Link>
              </Button>
            </MenuItem>
            <MenuItem>
              <Button
                color='secondary'
                onClick={() => navigate('/login')}
                sx={{
                  fontFamily: 'poppins',
                }}
                variant='contained'
              >
                Ingresar
              </Button>
            </MenuItem>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
