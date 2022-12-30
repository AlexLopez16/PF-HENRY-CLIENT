import { FC, useEffect } from 'react';
import {
    AppBar,
    Box,
    Button,
    Container,
    Toolbar,
    Typography,
} from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../reducers/rootReducer';
import AccountMenu from '../AdminBar/AdminBar';
import { getStudentInfo } from '../../actions/student';

const NavBar: FC = () => {
    const { data } = useSelector((state: State) => state.auth);
    const rol = data.rol;
    const dispatch = useDispatch();
    const token: string = localStorage.getItem('token') || '';

    useEffect(() => {
        rol === 'STUDENT_ROL' ? dispatch(getStudentInfo(data.id, token)) : null;
    }, [dispatch]);

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
        // {
        //     option: 'My Project',
        //     path: '/myproject',
        // },
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
                        <Box
                            sx={{
                                ml: 65,
                                display: { xs: 'none', md: 'flex' },
                            }}
                        ></Box>
                    </Box>
                    <AccountMenu />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;
