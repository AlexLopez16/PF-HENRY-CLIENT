import { FC, Dispatch, SetStateAction } from 'react';
import { Paper, Typography, Button, TextField } from '@mui/material';
import { paperStyle, container, buttonStyle } from '../../styles/Profile/AboutFormStyles';

interface Props {
    edit: { header: boolean, about: boolean, skills: boolean },
    setEdit: Dispatch<SetStateAction<{ header: boolean, about: boolean, skills: boolean }>>
}

export const AboutForm: FC<Props> = ({ edit, setEdit }) => {

    const handlerEdit = () => {
        setEdit({
            ...edit,
            about: !edit.about
        })
    }

    return (
        <Paper elevation={5} style={paperStyle}>
            <div style={container}>

                <Typography sx={{ fontWeight: 'bold' }}>
                    <h3>Sobre mí</h3>
                </Typography>
                <div>
                    <Button style={buttonStyle} variant='contained'>Guardar</Button>
                    <Button style={buttonStyle} variant='contained' onClick={handlerEdit}>Cancelar</Button>
                </div>
            </div>
            <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                placeholder='Este texto va a ser visto en tu perfil'
                defaultValue='Aute proident nisi nulla aliqua sunt. Proident exercitation eu eu dolor ullamco. Quis velit ea et veniam culpa esse labore fugiat reprehenderit eiusmod adipisicing proident officia aliquip. Aute proident nisi nulla aliqua sunt. Proident exercitation eu eu dolor ullamco. Quis velit ea et veniam culpa esse labore fugiat reprehenderit eiusmod adipisicing proident officia aliquip. Aute proident nisi nulla aliqua sunt. Proident exercitation eu eu dolor ullamco. Quis velit ea et veniam culpa esse labore fugiat reprehenderit eiusmod adipisicing proident officia aliquip.'
                fullWidth
                sx={{ maxWidth: '98%', margin: '0px 10px' }}
            />
        </Paper>
    )
}
