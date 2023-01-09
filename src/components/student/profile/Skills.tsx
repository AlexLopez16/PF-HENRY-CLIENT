import { Dispatch, FC, SetStateAction } from 'react'
import { Paper, Typography, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import { DataSkills } from './DataSkills';

import {iconStyle } from '../../../styles/Profile/SkillsStyles';

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
            elevation={10}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                
                padding: 5,
                maxWidth: '50%',
                margin: '10px auto',
                backgroundColor: 'black',
                color: 'white',
                borderRadius: 15,
                boxShadow:
                  'rgba(255, 255, 255, 255.16) 0px 1px 4px, rgb(255, 255, 255) 0px 0px 0px 3px',
            }}
        >
            <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  fontSize: '20px',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px',
            }}>

                <Typography sx={{fontFamily:'montserrat' , fontWeight: 'bold', color:'#ffff01' }} variant='h5'>
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
