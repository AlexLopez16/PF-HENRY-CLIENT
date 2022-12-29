import { FC, useState, useEffect } from 'react';
import { Grid } from '@mui/material';

import { Header } from './Header';
import { About } from './About';
import { Skills } from './Skills';
import { HeaderForm } from './HeaderForm';
import { AboutForm } from './AboutForm';
import { SkillsForm } from './SkillsForm';
import { useDispatch, useSelector } from 'react-redux';
import { getStudentInfo } from '../../../actions/student';
import { State } from '../../../reducers/rootReducer';

export const Profile: FC = () => {
    const [edit, setEdit] = useState({
        header: false,
        about: false,
        skills: false
    })

    const dispatch = useDispatch()
    const { data } = useSelector((state: State) => state.auth)
    const { id } = data;
    const token = localStorage.getItem('token') || ''

    useEffect(() => {
        dispatch(getStudentInfo(id, token))
    }, [dispatch])

    interface Props {
        description: string
        name: string
        lastName: string
        tecnologies: []
        country: string
        image: string
    }

    const { user } = useSelector((state: State) => state.student)
    const { description, name, lastName, country, tecnologies, image } = user as Props

    return (
        <Grid>
            {
                edit.header
                    ? <HeaderForm
                        edit={edit}
                        setEdit={setEdit}
                        name={name}
                        lastName={lastName}
                        country={country}
                    />
                    : <Header
                        edit={edit}
                        setEdit={setEdit}
                        name={name}
                        lastName={lastName}
                        country={country}
                        image={image}
                    />
            }
            {
                edit.about
                    ? <AboutForm
                        edit={edit}
                        setEdit={setEdit}
                        description={description}
                    />
                    : <About
                        edit={edit}
                        setEdit={setEdit}
                        description={description}
                    />
            }
            {
                edit.skills
                    ? <SkillsForm
                        edit={edit}
                        setEdit={setEdit}
                        tecnologies={tecnologies}
                    />
                    : <Skills
                        edit={edit}
                        setEdit={setEdit}
                    />
            }
        </Grid>
    )
}
