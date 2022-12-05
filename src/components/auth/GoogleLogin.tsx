import React, { FC } from 'react'
import { Button, Icon, Link } from '@mui/material';

export const GoogleLogin: FC = () => {
    return (
        <Link href='#google' underline='none'>
            <Button
                variant='outlined'
                fullWidth
                style={{ textTransform: 'none', margin: '5px 0px' }}
            >
                <Icon
                    style={{
                        backgroundImage: 'url(https://wkncdn.com/newx/assets/build/img/svg/icon-google-plus.4e58f2332.svg)',
                        backgroundRepeat: 'no-repeat',
                        marginTop: '5px'
                    }}
                />
                <span
                    style={{ color: '#3c3c3c', fontWeight: 'normal' }}
                >
                    Continuar con Google
                </span>
            </Button>
        </Link>
    )
}
