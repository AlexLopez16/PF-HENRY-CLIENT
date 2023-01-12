import { FC, useEffect, useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../reducers/rootReducer';
import AccountMenu from '../AdminBar/AdminBar';
import { getStudentInfo } from '../../actions/student';
import { IconButton, MenuItem } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import logoBlackNav from '../../assets/logoBlackNav.png';
import Logo from '../../assets/NABIJASH.png';

const NavBar: FC = () => {
  const navigate = useNavigate();

  // Traemos el rol.
  const { data }: any = useSelector((state: State) => state.auth);
  const rol = data.rol;
  const dispatch = useDispatch();
  const token: string = localStorage.getItem('token') || '';

  useEffect(() => {
    rol === 'STUDENT_ROL' ? dispatch(getStudentInfo(data.id, token)) : null;
  }, [dispatch]);

  // Paths y opciones de boton para el student.
  const studentButtons = [
    {
      option: 'Proyectos',
      path: '/projects',
    },
    {
      option: 'Mis Proyectos',
      path: '/myprojects',
    },
  ];

  // Paths y opciones de boton para el company.
  const companyButtons = [
    {
      option: 'Proyectos',
      path: '/projects',
    },
    {
      option: 'Crear Proyecto',
      path: '/newproject',
    },
    {
      option: 'Mis Proyectos',
      path: '/myprojects',
    },
  ];

  // Paths y opciones de boton para el admin.
  const adminButtons = [
    {
      option: 'Dashboard',
      path: '/dashboard',
    },
    {
      option: 'Proyectos',
      path: '/projects',
    },
    // {
    //     option: 'My Project',
    //     path: '/myproject',
    // },
  ];

  // Paths para el usuario que tiene que verificar su cuenta.
  const verifyButtons = [
    {
      option: 'Verificar',
      path: '/verifyemail',
    },
  ];

  const buttonList =
    rol === 'STUDENT_ROL' && data.verify
      ? studentButtons
      : rol === 'COMPANY_ROL' && data.verify
      ? companyButtons
      : rol === 'ADMIN_ROL' && data.verify
      ? adminButtons
      : verifyButtons;

  //MENU RESPONSIVE
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position='sticky'
      color='primary'
      sx={{
        fontColor: 'black',
        fontFamily: 'poppins',
        display: 'flex',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Typography
          variant='h4'
          noWrap
          onClick={() => navigate('/projects')}
          sx={{
            display: 'flex',
            textDecoration: 'none',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          <img
            src={logoBlackNav}
            style={{
              height: 50,
              width: 150,
            }}
          />
        </Typography>
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
            }}
          >
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
              {buttonList.map((button) => (
                <Link key={button.option} to={button.path}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign='center'>{button.option}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Typography
            variant='h5'
            noWrap
            onClick={() => navigate('/projects')}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'montserrat',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            {/* LOGO */}
          </Typography>
          <Typography
            variant='h5'
            noWrap
            onClick={() => navigate('/projects')}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'montserrat',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          ></Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex', fontFamily: 'poppins' },
            }}
          >
            {buttonList.map((button) => (
              <Link key={button.option} to={button.path}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    m: 2,
                    color: 'black',
                    fontFamily: 'poppins',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    border: '1px solid black',
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColorHover: '#ffff01',
                    },
                  }}
                >
                  {button.option}
                </Button>
              </Link>
            ))}
          </Box>

          <AccountMenu />
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default NavBar;
