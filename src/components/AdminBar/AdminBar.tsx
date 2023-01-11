import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Button } from "@mui/material";
// import Logout from '@mui/icons-material/Logout';
// import PortraitIcon from '@mui/icons-material/Portrait';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../reducers/rootReducer';
import {
    //  Link,
    useNavigate,
} from 'react-router-dom';
import { getStudentInfo } from '../../actions/student';
import { companyGetInfo } from '../../actions/company';
import { getInfoAdmin } from '../../actions/Admin';
import { logout } from '../../actions/auth';
// import { Profile } from '../student/profile/Profile';
// import { ProfileCompany } from '../company/Profile/ProfileCompany';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Premium } from '../Premium/Premium';
import FolderIcon from '@mui/icons-material/Folder';
// import { alert3 } from '../AlertMail/alertMailStudent';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import axios from 'axios';


export default function AccountMenu() {
    const API_URL = process.env.REACT_APP_API || 'http://localhost:3001/api';
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    type DataState = {
        data: {
            id: string
            rol: string
            verify: boolean
            email: string
        }
    }

    const dispatch = useDispatch();
    const { data }: DataState = useSelector((state: State) => state.auth);
    const { id, rol } = data;
    const { user }: any = useSelector((state: State) =>
        rol === 'STUDENT_ROL'
            ? state.student
            : rol === 'COMPANY_ROL'
                ? state.company
                : state.admin
    );
   

    const token = localStorage.getItem('token') || '';

    useEffect(() => {
        rol === 'STUDENT_ROL' && data.verify
            ? dispatch(getStudentInfo(id, token))
            : rol === 'COMPANY_ROL' && data.verify
                ? dispatch(companyGetInfo(id, token))
                : dispatch(getInfoAdmin(id, token));
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
            : rol === 'COMPANY_ROL'
                ? navigate('/profileCompany')
                : navigate('/dashboard/profileAdmin');
    };










    // FUNCION PREMIUM
    const [openModal, setOpenModal] = useState(false);

    const session_id = localStorage.getItem('session_id') || ''

    const adminSubscription = async () => {

    }

    return (
        <>

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
                            src={user?.image}
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
                <Box>
                    <MenuItem
                        sx={{
                            pointerEvents: 'none',
                            cursor: 'default',
                        }}
                    >
                        <Avatar src={user?.image} >{user?.name?.slice(0, 1)}</Avatar>
                        Hola {user?.name}
                    </MenuItem>
                    {data.verify && rol === 'STUDENT_ROL' ? (
                        <>
                            <MenuItem
                                sx={{
                                    pointerEvents: 'none',
                                    cursor: 'default',
                                    fontSize: 'small',
                                    marginLeft: 3,
                                }}
                            >
                                {/* <ListItemIcon>
                                <FolderIcon fontSize="small" />
                            </ListItemIcon> */}
                                Postulaciones: {user?.project?.length ? user?.project?.length : 0}/3
                            </MenuItem>
                        </>
                    ) : data.verify && rol === 'COMPANY_ROL' ? (
                        <>
                            <MenuItem
                                sx={{
                                    pointerEvents: 'none',
                                    cursor: 'default',
                                    fontSize: 'small',
                                    marginLeft: 3,
                                }}
                            >
                                {/* <ListItemIcon>
                                <FolderIcon fontSize="small" />
                            </ListItemIcon> */}
                                Proyectos: {user?.project?.length ? user?.project?.length : 0}/3
                            </MenuItem>
                        </>
                    ) : null}
                    <Divider />
                    {data.verify ? (
                        <>
                            <MenuItem onClick={handlerProfile}>
                                <ListItemIcon>
                                    <AccountBoxIcon fontSize="small" />
                                </ListItemIcon>
                                Mi perfil
                            </MenuItem>
                        </>
                    ) : null}

                    {rol === 'COMPANY_ROL' && data.verify && !user?.premium && (
                        <MenuItem onClick={() => setOpenModal(true)}>
                            <ListItemIcon>
                                <WorkspacePremiumIcon fontSize="small" />
                            </ListItemIcon>
                            Premium
                        </MenuItem>
                    )}

                    {rol === 'COMPANY_ROL' && data.verify && user?.premium && (
                        <form action={`${API_URL}/checkout/portal`} method="POST">
                            <input
                                type="hidden"
                                id="session-id"
                                name="session_id"
                                value={session_id as string}
                            />
                            <button
                                type="submit"
                                style={{border: 'none', background: 'inherit'}}
                            >
                                <MenuItem onClick={adminSubscription}>
                                    <ListItemIcon>
                                        <ManageAccountsIcon fontSize="small" />
                                    </ListItemIcon>
                                    Administrar Suscripción
                                </MenuItem>
                            </button>
                        </form>
                    )}

                    <MenuItem onClick={handlerLogout}>
                        <ListItemIcon>
                            <ExitToAppIcon fontSize="small" />
                        </ListItemIcon>
                        Cerrar sesion
                    </MenuItem>
                </Box>
            </Menu>

            <Premium openModal={openModal} setOpenModal={setOpenModal} />
        </>
    );
}
