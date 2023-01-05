import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Filters,
    getAllProject,
    getCategory,
    // getProject,
    getProjectsFilter,
} from '../../actions/projects';
// import ProjectCard from '../project/ProjectCard';
import { State } from '../../reducers/rootReducer';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
// import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl/FormControl';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import Select from '@mui/material/Select/Select';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import { Box } from '@mui/system';
// import Alert from '@mui/material/Alert/Alert';
// import Stack from '@mui/material/Stack/Stack';
import {
    Navigate,
    //  useSearchParams
} from 'react-router-dom';
import { types } from '../../types/types';
import { Container, IconButton, Input, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// let state: string[] | undefined = undefined;
// let tecnologies: string[] | undefined = undefined;
// let typeOfOrder: string | undefined = undefined;
const styledInput = {
    position: 'relative',
    right: 10,
    '&:hover': {},
};
interface Filter {
    source?: string;
}

const AdminFilterProject: FC<Filter> = ({ source }) => {
    const dispatch = useDispatch();
    let token = localStorage.getItem('token') || '';
    const [search, setSearch] = useState('');
    const [inputFilter, setInput] = useState({
        state: undefined,
        tecnologies: undefined,
        typeOfOrder: undefined,
        categorie: undefined,
    });
    useEffect(() => {
        dispatch(
            getAllProject(
                inputFilter.typeOfOrder,
                inputFilter.tecnologies,
                token,
                search,
                inputFilter.categorie,
                inputFilter.state,
                6,
                0
            )
        );
        dispatch(getCategory(token));
        dispatch(
            Filters(
                inputFilter.typeOfOrder,
                inputFilter.tecnologies,
                search,
                inputFilter.categorie,
                inputFilter.state
            )
        );
    }, [dispatch, token, inputFilter]);

    const { category } = useSelector((state: State) => state.project);
    const categorys = category;

    const tecnologias = [
        'Python',
        'Java',
        'JavaScript',
        'PHP',
        'R',
        'Swfit',
        'Flutter',
        'Net',
        'MathLab',
        'Kotlin',
        'Cobol',
        'Sql',
        'TypeScript',
        'AWS',
        'Mongo',
        'NodeJS',
        'React',
        'Postgress',
    ];

    const stateOfProject = [
        'Reclutamiento',
        'En desarrollo',
        'Terminado',
        'En revision',
    ];

    // const { projects } = useSelector((state: State) => state.project);

    const { projectsFilter } = useSelector((state: State) => state.project);
    // const {page}=useSelector((state:State)=>state.project)
    // const limit=page*6;
    // const init=limit-6

    let info = projectsFilter;
    // console.log(info);

    const { status } = useSelector((state: State) => state.auth);
    //   console.log('logged', logged);
    if (status === 401) {
        // console.log('401', 401);
        localStorage.clear();
        dispatch({
            type: types.authLogin,
        });
        return <Navigate to="/login" />;
    }
    const handlerchanges = (e: any) => {
        setSearch(e);
    };
    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(
            getAllProject(
                inputFilter.typeOfOrder,
                inputFilter.tecnologies,
                token,
                search,
                inputFilter.categorie,
                inputFilter.state,
                undefined,
                undefined
            )
        );
        dispatch(
            Filters(
                inputFilter.typeOfOrder,
                inputFilter.tecnologies,
                search,
                inputFilter.categorie,
                inputFilter.state
            )
        );
    };

    const handlerchange = (e: string, value: any) => {
        if (e === 'e') {
            if (value.length) {
                // state = value;
                setInput({ ...inputFilter, state: value });
            } else {
                setInput({ ...inputFilter, state: undefined });
            }
        }
        if (e === 't') {
            if (value.length) {
                setInput({ ...inputFilter, tecnologies: value });
            } else {
                setInput({ ...inputFilter, tecnologies: undefined });
            }
        }
        if (e === 'o') {
            let val = value.props.value;
            if (val) {
                setInput({ ...inputFilter, typeOfOrder: val });
            } else {
                setInput({ ...inputFilter, typeOfOrder: undefined });
            }
        }
        if (e === 'c') {
            if (value.length) {
                setInput({ ...inputFilter, categorie: value });
            } else {
                setInput({ ...inputFilter, categorie: undefined });
            }
        }
    };

    return (
        <Container>
            {source && source === 'adminProjects' ? (
                <Box
                    sx={{
                        width: 1350,
                        // marginLeft: '-200px',
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
                                placeholder="Buscar por nombre del proyecto o compañia"
                                onChange={(e) => handlerchanges(e.target.value)}
                                sx={{
                                    styledInput,
                                    width: 330,
                                    marginLeft: -40,
                                }}
                                // value={inputFilter.search}
                            ></Input>
                            <IconButton
                                type="submit"
                                aria-label="search"
                                sx={{ marginRight: 12 }}
                            >
                                <SearchIcon />
                            </IconButton>
                        </form>
                    </div>{' '}
                    <div style={{ width: 255 }}>
                        <Autocomplete
                            onChange={(e, value) => {
                                handlerchange('c', value);
                            }}
                            multiple={true}
                            size="small"
                            id="tags-outlined"
                            options={categorys}
                            getOptionLabel={(option: any) => option}
                            filterSelectedOptions
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Filtar por Categoría "
                                    placeholder="Categoría"
                                />
                            )}
                        />
                    </div>{' '}
                    <div style={{ width: 255, marginLeft: 10 }}>
                        <Autocomplete
                            onChange={(e, value) => {
                                handlerchange('e', value);
                            }}
                            multiple={true}
                            size="small"
                            id="tags-outlined"
                            options={stateOfProject}
                            getOptionLabel={(option) => option}
                            filterSelectedOptions
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Filtar por Estado del proyecto "
                                    placeholder="Estado del proyecto"
                                />
                            )}
                        />
                    </div>
                </Box>
            ) : null}
        </Container>
    );
};

export default AdminFilterProject;