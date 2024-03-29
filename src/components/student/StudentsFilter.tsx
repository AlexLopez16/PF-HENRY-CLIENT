import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    clearProjects,
    Filters,
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
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
// let state: string[] | undefined = undefined;
// let tecnologies: string[] | undefined = undefined;
// let typeOfOrder: string | undefined = undefined;
const styledInput = {
    position: 'relative',
    right: 10,
    '&:hover': {},
};

const StudentsFilter: FC = () => {
    const dispatch = useDispatch();
    let token = localStorage.getItem('token') || '';
    const [search, setSearch] = useState('');
    const [inputFilter, setInput] = useState({
        state: undefined,
        tecnologies: undefined,
        typeOfOrder: undefined,
        categorie: undefined,
    });

    const { category, filters } = useSelector((state: State) => state.project);
    const filtros = filters?.tecnologies || [];
    const categorys = category;

    useEffect(() => {
        dispatch(
            getProjectsFilter(
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
        return () => {
            dispatch(clearProjects({ projects: [], total: 0 }));
        };
    }, [dispatch, token, inputFilter]);

    const tecnologias = [
        '.Net',
        'Airflow',
        'Angular',
        'Assembler',
        'AWS',
        'Boostrap',
        'C',
        'C#',
        'C++',
        'Cobol',
        'CSS',
        'CSS3',
        'Django',
        'Docker',
        'Ethers.js',
        'Express',
        'Figma',
        'Firebase',
        'Flask',
        'Flutter',
        'GraphQL',
        'Java',
        'JavaScript',
        'jQuery',
        'Kotlin',
        'Laravel',
        'Lua',
        'Material UI',
        'MatLab',
        'MongoDB',
        'Mongoose',
        'MySQL',
        'Nest.js',
        'Next.js',
        'NodeJS',
        'NumPy',
        'Objective-C',
        'Pandas',
        'PHP',
        'PostgresSQL',
        'Python',
        'R',
        'React Native',
        'React',
        'Redux',
        'Ruby',
        'Solidity',
        'Swift',
        'TypeScript',
        'Vue',
    ];

    const stateOfProject = ['Reclutamiento', 'En desarrollo', 'Terminado'];

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
            getProjectsFilter(
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
      getProjectsFilter(
        inputFilter.typeOfOrder,
        inputFilter.tecnologies,
        token,
        '',
        inputFilter.categorie,
        inputFilter.state,
        6,
        0,
      ),
    );
    dispatch(
      Filters(
        inputFilter.typeOfOrder,
        inputFilter.tecnologies,
        '',
        inputFilter.categorie,
        inputFilter.state,
      ),
    );
  };
  return (
    <>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container
          sx={{
            marginTop: '20px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <div style={{ width: 260 }}>
            <Autocomplete
              onChange={(e, value) => {
                handlerchange('e', value);
              }}
              multiple={true}
              size='small'
              id='tags-outlined'
              options={stateOfProject}
              getOptionLabel={(option) => option}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  sx={{
                    '.MuiSvgIcon-root ': {
                      fill: 'black !important',
                    },
                    input: { color: 'white' },
                    mb: 1,
                  }}
                  {...params}
                  label='Filtar por Estado del proyecto '
                  placeholder='Estado del proyecto'
                />
              )}
            />
          </div>
          <div style={{ width: 255 }}>
            <Autocomplete
              sx={{}}
              onChange={(e, value) => {
                handlerchange('t', value);
              }}
              color='primary'
              multiple={true}
              size='small'
              id='tags-outlined'
              value={filtros}
              options={tecnologias}
              getOptionLabel={(option) => option}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  sx={{
                    '.MuiSvgIcon-root ': {
                      fill: 'black !important',
                    },
                    input: { color: 'white' },
                    mb: 1,
                  }}
                  {...params}
                  label='Filtar por Tecnologia'
                  placeholder='Tecnologia'
                />
              )}
            />
          </div>

          <div style={{ width: 255 }}>
            <Autocomplete
              onChange={(e, value) => {
                handlerchange('c', value);
              }}
              multiple={true}
              size='small'
              id='tags-outlined'
              options={categorys ? categorys : []}
              getOptionLabel={(option: any) => option}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  sx={{
                    '.MuiSvgIcon-root ': {
                      fill: 'black !important',
                    },
                    input: { color: 'white' },
                    mb: 1,
                  }}
                  {...params}
                  label='Filtar por Categoría '
                  placeholder='Categoría'
                />
              )}
            />
          </div>
          <div style={{ width: 255 }}>
            <FormControl sx={{ width: '100%', padding: 0, color: 'white' }}>
              <InputLabel
                id='vacantes-label'
                size='small'
                variant='outlined'
                sx={{
                  styledInput,
                  width: 245,
                  '& .MuiInputLabel-root': { color: '#ffff01' },
                  '& .MuiOutlinedInput-root': {
                    '& > fieldset': { borderColor: '#ffff01' },
                  },
                  input: { color: 'black ' },
                  mb: 1,
                }}
              >
                Ordenar por participantes
              </InputLabel>
              <Select
                size='small'
                sx={{
                  padding: 0,
                  '.MuiSvgIcon-root ': {
                    fill: 'black !important',
                  },
                  mb: 1,
                }}
                id='vacantes'
                labelId='vacantes-label'
                label='Ordenar por participantes'
                name='vacantes'
                onChange={(e, value) => {
                  handlerchange('o', value);
                }}
              >
                <MenuItem value={'desc'}>Mayor a Menor</MenuItem>

                <MenuItem value={'asc'}>Menor a Mayor</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Container>
      </Container>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 5,
        }}
      >
        <div
          style={{
            marginLeft: 10,
          }}
        >
          <form onSubmit={handleSubmit}>
            <Input
              color='primary'
              placeholder='Buscar por nombre del proyecto'
              onChange={(e) => handlerchanges(e.target.value)}
              sx={{
                styledInput,
                width: 245,
                '& .MuiInputLabel-root': { color: 'white' },
                '& .MuiOutlinedInput-root': {
                  '& > fieldset': { borderColor: 'white' },
                },
                input: { color: 'black ' },
              }}
              value={search}
            ></Input>
            <IconButton
              color='secondary'
              aria-label='search'
              sx={{ padding: 0 }}
            >
              {search.length ? <HighlightOffIcon onClick={handleDelete} /> : ''}
            </IconButton>
            <IconButton type='submit' aria-label='search' sx={{ padding: 0 }}>
              <SearchIcon />
            </IconButton>
          </form>
        </div>
      </Container>
    </>
  );
};

export default StudentsFilter;
