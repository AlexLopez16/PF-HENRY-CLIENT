import { FC, Dispatch, SetStateAction } from 'react';
import { Paper, IconButton, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';

import { paperStyle, container, iconStyle } from '../../../styles/Profile/AboutStyles';
import { useSelector } from 'react-redux';
import { State } from '../../../reducers/rootReducer';

interface Props {
    edit: { header: boolean, about: boolean, skills: boolean },
    setEdit: Dispatch<SetStateAction<{ header: boolean, about: boolean, skills: boolean }>>
    description?: string
}

export const About: FC<Props> = ({ edit, setEdit, description }) => {

    const handlerEdit = () => {
        setEdit({
            ...edit,
            about: !edit.about
        })
    }
    
    return (
        <Paper
            elevation={5}
            style={paperStyle}
        >
            <div style={container}>
                <Typography sx={{ fontWeight: 'bold' }} variant='h6'>
                    Sobre mí
                </Typography>
                <IconButton aria-label="settings" onClick={handlerEdit}>
                    <EditIcon sx={iconStyle} color='primary' fontSize='medium' />
                </IconButton>
            </div>
            <Typography sx={{ marginLeft: '10px', marginRight: '50px' }}>
                {description}
            </Typography>
        </Paper>
    )
}
