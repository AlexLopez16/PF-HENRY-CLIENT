import { FC, useState } from 'react'
import { Grid } from '@mui/material';

import { Header } from './Header';
import { About } from './About';
import { Skills } from './Skills';
import { HeaderForm } from './HeaderForm';
import { AboutForm } from './AboutForm';
import { SkillsForm } from './SkillsForm';


export const Profile: FC = () => {
    const [edit, setEdit] = useState({
        header: false,
        about: false,
        skills: false
    })
    return (
        <Grid>
            {
                edit.header
                    ? <HeaderForm
                        edit={edit}
                        setEdit={setEdit}
                    />
                    : <Header
                        edit={edit}
                        setEdit={setEdit}
                    />
            }
            {
                edit.about
                    ? <AboutForm
                        edit={edit}
                        setEdit={setEdit}
                    />
                    : <About
                        edit={edit}
                        setEdit={setEdit}
                    />
            }
            {
                edit.skills
                    ? <SkillsForm
                        edit={edit}
                        setEdit={setEdit}
                    />
                    : <Skills
                        edit={edit}
                        setEdit={setEdit}
                    />
            }
        </Grid>
    )
}
