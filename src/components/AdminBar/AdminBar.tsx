import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../reducers/rootReducer';
import { Link, useNavigate } from 'react-router-dom';
import { getStudentInfo } from '../../actions/student';
import { companyGetInfo } from '../../actions/company';
import { logout } from '../../actions/auth';
// import { Profile } from '../student/profile/Profile';

export default function AccountMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
      
    
    const dispatch = useDispatch();
    const { data } = useSelector((state: State) => state.auth);
    const { id, rol } = data;
    const { user }: any = useSelector((state: State) =>
    rol === 'STUDENT_ROL'
    ? state.student
    : state.company
    );//TODO: condicional para sacar datos de company
    
    const token = localStorage.getItem('token') || '';

    React.useEffect(() => {
        rol === 'STUDENT_ROL'
        ? dispatch(getStudentInfo(id, token))
        : dispatch(companyGetInfo(id, token))

    }, [dispatch]);
    const navigate = useNavigate();

    const handlerLogout = () => {
        localStorage.clear();
        dispatch(logout());
        navigate('/landing');
    };

    const handlerProfile = () => {
        rol === 'STUDENT_ROL'
            ? navigate('/profile')
            : navigate('/profileCompany');
    };

    return (
        <React.Fragment>
            <Box
                sx={{
                    justifyContent: 'right',
                    display: 'flex',
                    alignItems: 'right',
                    textAlign: 'center',
                }}
            >
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar
                            src={user.image}
                            sx={{ width: 32, height: 32 }}
                        ></Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem sx={{
                    pointerEvents: "none",
                    cursor: "default"
                }}>
                    <Avatar>
                        {/* <IconButton>
                            {user.name?.slice(0, 1).toUpperCase()}
                        </IconButton> */}
                    </Avatar>
                    Hola {user.name}
                </MenuItem>
                <Divider />

                <MenuItem onClick={handlerProfile}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Mi perfil
                </MenuItem>

                <MenuItem onClick={handlerLogout}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Cerrar sesion
                </MenuItem>
            
            </Menu>
        </React.Fragment>
    );
}
