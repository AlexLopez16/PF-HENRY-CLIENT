import React, { FC } from 'react'
import { Link, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

export const GitHubLogin: FC = () => {
    return (
        <Link href='#gitHub' underline='none'>
            <Button
                variant='outlined'
                fullWidth
                style={{ textTransform: 'none', margin: '10px 0px' }}
            >
                <GitHubIcon sx={{ color: 'black', margin: '0px 5px' }} />
                <span
                    style={{ color: '#3c3c3c', fontWeight: 'normal' }}
                >
                    Continuar con GitHub
                </span>
            </Button>
        </Link>
    )
}
