import { FC } from 'react'
import { useParams } from "react-router-dom";
import { Box, Typography } from '@mui/material';

const AccountConfirm:FC = () => {
    const {token} = useParams()
    return (
        <Box display='flex' sx={{
            background: '#e8ca68',
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center'}}>
            <Typography variant='h3' sx={{width: '600px', fontWeight: 600,}}>NO TIENES UNA CUENTA VERIFICADA, POR FAVOR REVISA TU EMAIL</Typography>
        </Box>
    )
}

export default AccountConfirm;



