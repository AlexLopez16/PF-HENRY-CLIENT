import { FC } from 'react'
import { Link, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

export const GitHubLogin: FC = () => {

    const URI = process.env.REACT_APP_API || 'http://localhost:3001'

    return (
        <Link href={`https://github.com/login/oauth/authorize?client_id=87e69cf79c2019d84894&redirect_uri=${URI}/auth?&scope=user:email`}
            underline="none">
            <Button
                variant="contained"
                fullWidth
                color="secondary"
                style={{ textTransform: 'none', margin: '10px 0px' }}
            >
                <GitHubIcon sx={{ color: 'black', margin: '0px 5px' }} />
                <span style={{ color: '#3c3c3c', fontWeight: 'normal' }}>
                    Continuar con GitHub
                </span>
            </Button>
        </Link>
    );
};
