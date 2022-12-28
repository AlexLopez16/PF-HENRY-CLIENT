import { FC, useState, useEffect } from 'react';
import { Grid } from '@mui/material';



import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../reducers/rootReducer';
import { HeaderFormCompany } from './HeaderFormCompany';
import { companyGetInfo } from '../../../actions/company';
import { HeaderCompany } from './HeaderCompany';


export const ProfileCompany: FC = () => {
    const [edit, setEdit] = useState({
        header: false,
    })

    const dispatch = useDispatch()
    const { data } = useSelector((state: State) => state.auth)
    const { id } = data;
    const token = localStorage.getItem('token') || ''

    useEffect(() => {
        dispatch(companyGetInfo(id, token))
    }, [dispatch])

    interface Props {
        name: string
        country: string
        image: string
    }

    const { user } = useSelector((state: State) => state.company)
    const { name, country, image } = user as Props

    return (
        <Grid>
            {
                edit.header
                    ? <HeaderFormCompany
                        edit={edit}
                        setEdit={setEdit}
                        name={name}
                        country={country}
                    />
                    : <HeaderCompany
                        edit={edit}
                        setEdit={setEdit}
                        name={name}
                        country={country}
                        image={image}
                    />
            }
        </Grid>
    )
}
