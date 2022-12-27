import { FC, Dispatch, SetStateAction } from 'react';
import { Paper, Grid, IconButton, Avatar, Typography, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';


import { paperStyle, iconStyle, container, avatarStyle } from '../../../styles/Profile/HeaderStyles';

interface Props {
    edit: { header: boolean },
    setEdit: Dispatch<SetStateAction<{ header: boolean}>>
    name?: string,
    country?: string,
    image?: string
}

export const HeaderCompany: FC<Props> = ({ edit, setEdit, name, country, image }) => {

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
                    <Avatar sx={avatarStyle} src={image}>
                        {name?.slice(0, 1).toUpperCase()}
                    </Avatar>
                </div>

                <div>
                    <Typography>
                        {country}
                    </Typography>
                </div>
            </div>
        </Paper>
    )
}
