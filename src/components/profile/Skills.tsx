import { Dispatch, FC, SetStateAction } from 'react'
import { Paper, Typography, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import { DataSkills } from './DataSkills';

import { paperStyle, container, iconStyle } from '../../styles/Profile/SkillsStyles';

interface Props {
    edit: { header: boolean, about: boolean, skills: boolean },
    setEdit: Dispatch<SetStateAction<{ header: boolean, about: boolean, skills: boolean }>>
}

export const Skills: FC<Props> = ({ edit, setEdit }) => {

    const handlerEdit = () => {
        setEdit({
            ...edit,
            skills: !edit.skills
        })
    }

    return (
        <Paper
            elevation={5}
            style={paperStyle}
        >
            <div style={container}>

                <Typography sx={{ fontWeight: 'bold' }} variant='h6'>
                    Habilidades
                </Typography>
                <IconButton aria-label="settings" onClick={handlerEdit}>
                    <EditIcon sx={iconStyle} color='primary' fontSize='medium' />
                </IconButton>
            </div>
            <DataSkills />
        </Paper>
    )
}
