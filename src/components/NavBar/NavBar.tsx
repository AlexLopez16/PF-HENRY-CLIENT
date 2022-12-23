import { FC } from 'react';
import {
    AppBar,
    Box,
    Button,
    Container,
    Toolbar,
    Typography,
} from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { State } from '../../reducers/rootReducer';
import AccountMenu from '../AdminBar/AdminBar';

const NavBar: FC = () => {
    // Traemos el rol.
    //const rol = localStorage.getItem('rol');
    const { data } = useSelector((state: State) => state.auth);
    const rol = data.rol;

    // Paths y opciones de boton para el student.
    const studentButtons = [
        {
            option: 'Dashboard',
            path: '/dashboard',
        },
        {
            option: 'Projects',
            path: '/projects',
        },
        {
            option: 'My Project',
            path: '/myprojects',
        },
    ];

    // Paths y opciones de boton para el company.
    const companyButtons = [
        {
            option: 'Dashboard',
            path: '/dashboard',
        },
        {
            option: 'Projects',
            path: '/projects',
        },
        {
            option: 'Create Project',
            path: '/newproject',
        },
        {
            option: 'My Projects',
            path: '/myprojects',
        },
        {
            option: 'Request',
            path: '/requests',
        },
    ];

    // Paths y opciones de boton para el admin.
    const adminButtons = [
        {
            option: 'Dashboard',
            path: '/dashboard',
        },
        {
            option: 'Projects',
            path: '/projects',
        },
        {
            option: 'My Project',
            path: '/myproject',
        },
    ];

    const buttonList: any =
        rol === 'STUDENT_ROL'
            ? studentButtons
            : rol === 'COMPANY_ROL'
            ? companyButtons
            : rol === 'ADMIN_ROL'
            ? adminButtons
            : null;

    return (
        <AppBar position="sticky" sx={{ bgcolor: '#ffff01' }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    {/* <AdbIcon
                        sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
                    /> */}
                    <NavLink style={{ textDecoration: 'none' }} to="/dashboard">
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                    </NavLink>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                        {buttonList &&
                            buttonList.map((button: any) => (
                                <NavLink
                                    style={{ textDecoration: 'none' }}
                                    to={button.path}
                                >
                                    <Button
                                        sx={{
                                            my: 2,
                                            color: 'black',
                                            display: 'block',
                                        }}
                                    >
                                        {button.option}
                                    </Button>
                                </NavLink>
                            ))}
                            <AccountMenu/>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;
