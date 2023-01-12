import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Filters, getAllProject, getCategory } from '../../actions/projects';
import { State } from '../../reducers/rootReducer';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { Navigate } from 'react-router-dom';
import { types } from '../../types/types';
import { Container, IconButton, Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const styledInput = {
    position: 'relative',
    right: 10,
    '&:hover': {},
};
// interface Filter {
//     source?: string;
// }

const AdminFilterProject: FC = () => {
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

    const { projectsFilter } = useSelector((state: State) => state.project);
    // const {page}=useSelector((state:State)=>state.project)
    // const limit=page*6;
    // const init=limit-6

    let info = projectsFilter;

    const { status } = useSelector((state: State) => state.auth);

    if (status === 401) {
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

    const handleDelete = () => {
        setSearch('');
        dispatch(
            getAllProject(
                inputFilter.typeOfOrder,
                inputFilter.tecnologies,
                token,
                '',
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
                '',
                inputFilter.categorie,
                inputFilter.state
            )
        );
    };

    return (
            <Box
                sx={{
                    width: 'auto',
                    display: 'flex',
                    justifyContent: 'space-between',
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
                                marginLeft: 0,
                            }}
                            value={search}
                        ></Input>

                        <IconButton aria-label="search" sx={{ padding: 0 }}>
                            {search?.length ? (
                                <HighlightOffIcon onClick={handleDelete} />
                            ) : (
                                ''
                            )}
                        </IconButton>
                        <IconButton
                            type="submit"
                            aria-label="search"
                            sx={{ marginRight: 8 }}
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
                        options={categorys ? categorys : []}
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
    );
};

export default AdminFilterProject;
