import { FC, Dispatch, SetStateAction } from 'react';
import { Paper, Grid, IconButton, Avatar, Typography, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';


import { paperStyle, iconStyle, container, avatarStyle } from '../../styles/Profile/HeaderStyles';

interface Props {
    edit: { header: boolean, about: boolean, skills: boolean },
    setEdit: Dispatch<SetStateAction<{ header: boolean, about: boolean, skills: boolean }>>
}

export const Header: FC<Props> = ({ edit, setEdit }) => {

    const handlerEdit = () => {
        setEdit({
            ...edit,
            header: !edit.header
        })
    }

    return (
        <Paper
            elevation={5}
            style={paperStyle}
        >
            <Grid textAlign='right'>
                <IconButton aria-label="settings" onClick={handlerEdit}>
                    <EditIcon sx={iconStyle} color='primary' fontSize='medium' />
                </IconButton>
            </Grid>
            <div style={container}>
                <div>
                    <Avatar sx={avatarStyle}>
                        A
                    </Avatar>
                </div>

                <div>
                    <Typography
                        sx={{
                            fontSize: '30px',
                            fontWeight: 'bold'
                        }}
                    >
                        Antonio Alejandro Lopez Rodriguez
                    </Typography>
                    <Typography>
                        México
                    </Typography>
                </div>
            </div>
        </Paper>
    )
}
