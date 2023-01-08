import { Grid } from '@mui/material';
import { FC, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInfoAdmin } from '../../../actions/Admin';
import { State } from '../../../reducers/rootReducer';
import { HeaderAdmin } from './HeaderAdmin';
import { HeaderFormAdmin } from './HeaderFormAdmin';


export const ProfileAdmin: FC = () => {
    const [edit, setEdit] = useState({
        header: false,
    })

    const dispatch = useDispatch()
    const { data } = useSelector((state: State) => state.auth)
    const { id } = data;
    const token = localStorage.getItem('token') || ''
    
    useEffect(() => {
        dispatch(getInfoAdmin(id, token))
    }, [dispatch])
    
    interface Props {
        name: string
    }
    
    const { user } = useSelector((state: State) => state.admin)
    const { name } = user as Props
    return (
        <Grid>
            {
                edit.header
                    ? <HeaderFormAdmin
                        edit={edit}
                        setEdit={setEdit}
                        name={name}
                    />
                    : <HeaderAdmin
                        edit={edit}
                        setEdit={setEdit}
                        name={name}
                    />
            }
        </Grid>
    )
}
