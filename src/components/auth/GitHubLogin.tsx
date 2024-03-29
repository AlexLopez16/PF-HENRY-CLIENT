import { FC } from 'react';
import { Link, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

export const GitHubLogin: FC = () => {
    const URI = process.env.REACT_APP_API || 'http://localhost:3001/api';

    return (
        <Link
            href={`https://github.com/login/oauth/authorize?client_id=95525d31acb43a93f942&redirect_uri=${URI}/auth?&scope=user:email`}
            underline="none"
        >
            <Button
                variant="contained"
                fullWidth
                color="secondary"
                
                style={{ textTransform: 'none', margin: '10px 0px', backgroundColor:'black',  
                boxShadow:
                'rgba(255, 255, 255, 255.16) 0px 1px 1px, rgb(255, 255, 255) 0px 0px 0px 1px',
            }}
            >
                <GitHubIcon sx={{ color: 'white', margin: '0px 5px', }} />
                <span style={{ color: 'white', fontFamily:'montserrat', fontWeight:'bold', marginLeft:10  }}>
                    Continuar con GitHub
                </span>
            </Button>
        </Link>
    );
};
