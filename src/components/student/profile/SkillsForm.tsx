import { Dispatch, FC, SetStateAction, useState } from 'react';
import {
  Paper,
  Typography,
  Button,
  TextField,
  MenuItem,
  Select,
  FormControl,
  SelectChangeEvent,
} from '@mui/material';
import {
  paperStyle,
  container,
  buttonStyle,
  typographyStyle,
  spanStyle,
} from '../../../styles/Profile/SkillsFormStyles';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../reducers/rootReducer';
import { updateStudentInfo } from '../../../actions/student';

interface Props {
  edit: { header: boolean; about: boolean; skills: boolean };
  setEdit: Dispatch<
    SetStateAction<{ header: boolean; about: boolean; skills: boolean }>
  >;
  tecnologies: [];
}

interface Data {
  skill?: string;
  exp?: string;
}

export const SkillsForm: FC<Props> = ({ edit, setEdit, tecnologies }) => {
  const options = ['Principiante', 'Medio', 'Avanzado'];

  const dispatch = useDispatch();
  const { data } = useSelector((state: State) => state.auth);
  const { id } = data;
  const token = localStorage.getItem('token') || '';

  let tecnologias = [
    'Airflow',
    '.Net',
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
    'Ruby',
    'Solidity',
    'Swift',
    'TypeScript',
    'Vue',

    //con CTRL + Shift + P y selecciono en orden ascendente
  ];

  const handlerEdit = () => {
    setEdit({
      ...edit,
      skills: !edit.skills,
    });
  };

  const [option, setOption] = useState('');
  const [input, setInput] = useState('');
  const [skills, setSkills] = useState<Data[]>(tecnologies);

  const handleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value as string);
  };

  const handleInputChange = (event: SelectChangeEvent) => {
    setInput(event.target.value as string);
  };

  const handleClick = () => {
    setSkills([
      ...skills,
      {
        skill: input,
        exp: option,
      },
    ]);
    setOption('');
    setInput('');
  };

  const removeSkill = (event: React.MouseEvent<HTMLButtonElement>) => {
    const id = (event.target as HTMLElement).id;
    const filter = skills.filter(({ skill }) => skill !== id);
    setSkills(filter);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      updateStudentInfo(id, token, {
        tecnologies: skills,
      }),
    );
    setEdit({
      ...edit,
      skills: !edit.skills,
    });
  };

  if (skills.length) {
    const skillsArray = skills.map(({ skill }) => skill)
    tecnologias = tecnologias.filter(tecnologia => !skillsArray.includes(tecnologia))
  }

  return (
    <Paper elevation={5} style={paperStyle}>
      <form onSubmit={onSubmit}>
        <div style={container}>
          <Typography
            sx={{
              fontFamily: 'montserrat',
              fontWeight: 'bold',
              color: '#ffff01',
              fontSize: 17,
            }}
            variant='h5'
          >
            Habilidades
          </Typography>
          <div>
            <Button
              size='small'
              type='submit'
              variant='contained'
              disabled={skills.length === 0}
              style={buttonStyle}
            >
              Guardar
            </Button>
            <Button
              size='small'
              variant='contained'
              onClick={handlerEdit}
              style={buttonStyle}
            >
              Cancelar
            </Button>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: '10px',
            marginBottom: '20px',
          }}
        >
          <FormControl
            variant='outlined'
            color='primary'
            sx={{
              width: '100%',
              marginTop: 1,
              marginBottom: 2,
              fontFamily: 'montserrat',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignContent: 'center',
            }}
          >
            <Select
              color='primary'
              size='small'
              value={input}
              onChange={handleInputChange}
              displayEmpty
              inputProps={{
                style: { color: 'white', fontFamily: 'montserrat' },
              }}
              sx={{
                width: '200px',
                margin: '0px 10px',
                color: 'white',
                boxShadow: 'rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset',
                '.MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                },
                '.MuiSvgIcon-root ': {
                  fill: 'white !important',
                },
                input: { color: 'white' },
              }}
            >
              <MenuItem value=''>
                <p>Tecnologías</p>
              </MenuItem>
              {tecnologias.map((tecnologia) => (
                <MenuItem key={tecnologia} value={tecnologia}>
                  {tecnologia}
                </MenuItem>
              ))}
            </Select>

            <Select
              color='primary'
              size='small'
              value={option}
              onChange={handleChange}
              displayEmpty
              inputProps={{
                style: { color: 'white', fontFamily: 'montserrat' },
              }}
              sx={{
                width: '200px',
                margin: '0px 10px',
                color: 'white',
                boxShadow: 'rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset',
                '.MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                },
                '.MuiSvgIcon-root ': {
                  fill: 'white !important',
                },
                input: { color: 'white' },
              }}
            >
              <MenuItem value=''>
                <p>Experiencia</p>
              </MenuItem>
              {options.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            variant='contained'
            onClick={handleClick}
            disabled={input === '' || option === ''}
            style={buttonStyle}
          >
            Agregar
          </Button>
        </div>
        <div
          style={{
            width: '96%',
            margin: '0px auto',
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {skills.map(({ skill, exp }) => (
            <Typography key={skill} sx={typographyStyle} textAlign='center'>
              {skill}&nbsp;({exp})
              <span style={spanStyle} id={skill} onClick={removeSkill}>
                X
              </span>
            </Typography>
          ))}
        </div>
      </form>
    </Paper>
  );
};
