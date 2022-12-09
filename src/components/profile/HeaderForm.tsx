import { Dispatch, FC, SetStateAction } from 'react';
import { Paper, IconButton, Avatar, Typography, TextField, Button } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';


import { avatarStyle, buttonStyle, container, iconStyle, paperStyle } from './../../styles/Profile/HeaderFormStyles';

interface Props {
    edit: { header: boolean, about: boolean, skills: boolean },
    setEdit: Dispatch<SetStateAction<{ header: boolean, about: boolean, skills: boolean }>>
}

export const HeaderForm: FC<Props> = ({ edit, setEdit }) => {

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
            <div style={container}>
                <div>
                    <Avatar sx={avatarStyle}>
                        <IconButton style={iconStyle} aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file" />
                            <PhotoCamera />
                        </IconButton>
                    </Avatar>
                </div>

                <div>
                    <Typography sx={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '10px' }}>
                        Información personal
                    </Typography>

                    <TextField label="Nombre Publico" variant="outlined" fullWidth sx={{ marginBottom: '10px' }} />
                    <TextField label="Pais" variant="outlined" fullWidth sx={{ marginBottom: '10px' }} />

                    <Button style={buttonStyle} variant='contained'>Guardar</Button>
                    <Button style={buttonStyle} variant='contained' onClick={handlerEdit}>Cancelar</Button>
                </div>
            </div>
        </Paper>
    )
}
