import { FC } from 'react';
import { Box } from '@mui/material';
import UserItemsList from './userItemsList';
import { Outlet } from 'react-router-dom';
import Logo from '../../../assets/NABIJASH.png';
import AccountMenu from '../../AdminBar/AdminBar';
import { PreLoader } from '../../PreLoader/PreLoader';

const SideBar: FC = () => {
    return (
        <>
            <Box sx={{ display: 'flex', width: '100%', height: '100vh' }}>
                <Box
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        background: '#fff',
                        width: '350px',
                        height: '100vh',
                        color: '#272727',
                        boxShadow: 1,
                    }}
                >
                    <Box
                        display="flex"
                        sx={{
                            width: '100%',
                            height: '68px',
                            backgroundColor: 'black',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <img
                            src={Logo}
                            alt="Logo"
                            style={{
                                background: 'black',
                                width: 'auto',
                                maxHeight: '50px',
                            }}
                        />
                    </Box>
                    <UserItemsList />
                    <Box sx={{ position: 'absolute' }}>
                        <AccountMenu />
                    </Box>
                </Box>
                <Box
                    display={'flex'}
                    sx={{
                        ml: '350px',
                        p: '2em',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        minHeight: '100vh',
                    }}
                >
                    <Outlet />
                </Box>
            </Box>
        </>
    );
};

export default SideBar;
