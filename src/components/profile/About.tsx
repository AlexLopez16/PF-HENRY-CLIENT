import { FC, Dispatch, SetStateAction } from 'react';
import { Paper, IconButton, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';

import { paperStyle, container, iconStyle } from '../../styles/Profile/AboutStyles';

interface Props {
    edit: { header: boolean, about: boolean, skills: boolean },
    setEdit: Dispatch<SetStateAction<{ header: boolean, about: boolean, skills: boolean }>>
}

export const About: FC<Props> = ({ edit, setEdit }) => {

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

                <Typography sx={{ fontWeight: 'bold' }}>
                    <h3>Sobre mí</h3>
                </Typography>
                <IconButton aria-label="settings" onClick={handlerEdit}>
                    <EditIcon sx={iconStyle} color='primary' fontSize='medium' />
                </IconButton>
            </div>
            <Typography sx={{ marginLeft: '10px', marginRight: '50px' }}>
                Aute proident nisi nulla aliqua sunt. Proident exercitation eu eu dolor ullamco. Quis velit ea et veniam culpa esse labore fugiat reprehenderit eiusmod adipisicing proident officia aliquip.
                Aute proident nisi nulla aliqua sunt. Proident exercitation eu eu dolor ullamco. Quis velit ea et veniam culpa esse labore fugiat reprehenderit eiusmod adipisicing proident officia aliquip.
                Aute proident nisi nulla aliqua sunt. Proident exercitation eu eu dolor ullamco. Quis velit ea et veniam culpa esse labore fugiat reprehenderit eiusmod adipisicing proident officia aliquip.
            </Typography>
        </Paper>
    )
}
