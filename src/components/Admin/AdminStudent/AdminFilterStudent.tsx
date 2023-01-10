import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../reducers/rootReducer';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { Navigate} from 'react-router-dom';
import { types } from '../../../types/types';
import { Container, IconButton, Input} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { getListStudents } from '../../../actions/student';


const styledInput = {
    position: 'relative',
    right: 10,
    '&:hover': {},
};

const AdminFilterStudent: FC = () => {
    const dispatch = useDispatch();
    const token: string | null = localStorage.getItem('token')
    const [search, setSearch] = useState('');

    const handlerchanges = (e: string) => {
        setSearch(e)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(getListStudents(token, false, 6, 0, search))
    }


    return ( 
        <Container>
                <Box
                    sx={{
                        width: 1350,
                        marginTop: '20px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between 5',
                        alignItems: 'center',
                    }}
                >
                    <div>
                        <form onSubmit={handleSubmit}>
                            <Input
                                placeholder="Buscar por nombre del alumno"
                                onChange={(e) => handlerchanges(e.target.value)}
                                sx={{
                                    styledInput,
                                    width: 330,
                                    marginLeft: 0,
                                }}
                                value={search}
                            ></Input>

                            <IconButton
                                aria-label="search"
                                sx={{ padding: 0, }}


                            >
                                {/* {search.length ? <HighlightOffIcon
                                    onClick={handleDelete}
                                /> : ""} */}
                            </IconButton>
                            <IconButton
                                type="submit"
                                aria-label="search"
                                sx={{ marginRight: 8 }}
                            >
                                <SearchIcon />
                            </IconButton>
                        </form>
                    </div>
                </Box>
        </Container>
    )
}


export default AdminFilterStudent;