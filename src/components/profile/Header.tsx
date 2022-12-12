import { FC, Dispatch, SetStateAction } from 'react';
import { Paper, Grid, IconButton, Avatar, Typography, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';


import { paperStyle, iconStyle, container, avatarStyle } from '../../styles/Profile/HeaderStyles';
import { useSelector } from 'react-redux';
import { State } from '../../reducers/rootReducer';

interface Props {
    edit: { header: boolean, about: boolean, skills: boolean },
    setEdit: Dispatch<SetStateAction<{ header: boolean, about: boolean, skills: boolean }>>
    name?: string,
    lastName?: string,
    country?: string,
}

export const Header: FC<Props> = ({ edit, setEdit, name, lastName, country }) => {

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
                        {name?.slice(0, 1).toUpperCase()}
                    </Avatar>
                </div>

                <div>
                    <Typography
                        sx={{
                            fontSize: '30px',
                            fontWeight: 'bold'
                        }}
                    >
                        {name}&nbsp;{lastName}
                    </Typography>
                    <Typography>
                        {country}
                    </Typography>
                </div>
            </div>
        </Paper>
    )
}
