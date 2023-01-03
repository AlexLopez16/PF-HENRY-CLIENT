import { Dispatch, FC, SetStateAction, useState } from 'react';
import { Paper, Typography, Button, TextField, MenuItem } from '@mui/material';
import { paperStyle, container, buttonStyle, typographyStyle, spanStyle } from '../../../styles/Profile/SkillsFormStyles';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../reducers/rootReducer';
import { updateStudentInfo } from '../../../actions/student';


interface Props {
    edit: { header: boolean, about: boolean, skills: boolean },
    setEdit: Dispatch<SetStateAction<{ header: boolean, about: boolean, skills: boolean }>>
    tecnologies: []
}

interface Data {
    skill: string,
    exp: string
}

export const SkillsForm: FC<Props> = ({ edit, setEdit, tecnologies }) => {
    const options = ['Principiante', 'Medio', 'Avanzado'];

    const dispatch = useDispatch()
    const { data } = useSelector((state: State) => state.auth)
    const { id } = data;
    const token = localStorage.getItem('token') || ''


    const tecnologias = [
        "Airflow",
        ".Net",
        "Angular",
        "Assembler",
        "AWS",
        "Boostrap",
        "C",
        "C#",
        "C++",
        "Cobol",
        "CSS",
        "CSS3",
        "Django",
        "Docker",
        "Ethers.js",
        "Express",
        "Figma",
        "Firebase",
        "Flask",
        "Flutter",
        "GraphQL",
        "Java",
        "JavaScript",
        "jQuery",
        "Kotlin",
        "Laravel",
        "Lua",
        "Material UI",
        "MatLab",
        "MongoDB",
        "Mongoose",
        "MySQL",
        "Nest.js",
        "Next.js",
        "NodeJS",
        "NumPy",
        "Objective-C",
        "Pandas",
        "PHP",
        "PostgresSQL",
        "Python",
        "R",
        "React Native",
        "React",
        "Ruby",
        "Solidity",
        "Swift",
        "TypeScript",
        "Vue",

        //con CTRL + Shift + P y selecciono en orden ascendente
    ];

    const handlerEdit = () => {
        setEdit({
            ...edit,
            skills: !edit.skills
        })
    }

    const [option, setOption] = useState('')
    const [input, setInput] = useState('')
    const [skills, setSkills] = useState<Data[]>(tecnologies)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOption(event.target.value);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }

    const handleClick = () => {
        setSkills([
            ...skills,
            {
                skill: input,
                exp: option
            }
        ])
        setOption('')
        setInput('')
    }

    const removeSkill = (event: React.MouseEvent<HTMLButtonElement>) => {
        const id = (event.target as HTMLElement).id
        const filter = skills.filter(({ skill }) => skill !== id)
        setSkills(filter)
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(updateStudentInfo(id, token, {
            tecnologies: skills
        }))
        setEdit({
            ...edit,
            skills: !edit.skills
        })
    }

    return (
        <Paper elevation={5} style={paperStyle}>
            <form onSubmit={onSubmit}>

                <div style={container}>

                    <Typography sx={{ fontWeight: 'bold' }} variant='h6'>
                        Habilidades
                    </Typography>
                    <div>
                        <Button
                            type='submit'
                            style={buttonStyle}
                            variant='contained'
                            disabled={skills.length === 0}
                        >
                            Guardar
                        </Button>
                        <Button
                            style={buttonStyle}
                            variant='contained'
                            onClick={handlerEdit}
                        >
                            Cancelar
                        </Button>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: '10px',
                    marginBottom: '20px'
                }}>
                    <TextField
                        select
                        size="small"
                        label="Tecnologias"
                        value={input}
                        onChange={handleInputChange}
                        sx={{ width: '200px', margin: '0px 10px' }}
                    >
                        {tecnologias.map((tecnologia) => (
                            <MenuItem key={tecnologia} value={tecnologia}>
                                {tecnologia}
                            </MenuItem>
                        ))}
                    </TextField>


                    <TextField
                        select
                        size="small"
                        label="Experiencia"
                        value={option}
                        onChange={handleChange}
                        sx={{ width: '200px', margin: '0px 10px' }}
                    >
                        {options.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Button
                        // style={buttonStyle}
                        variant='contained'
                        onClick={handleClick}
                        disabled={(input === '' || option === '')}
                    >
                        Agregar
                    </Button>
                </div>
                <div
                    style={{
                        width: '96%',
                        margin: '0px auto',
                        display: 'flex',
                        flexWrap: 'wrap'
                    }}
                >
                    {
                        skills.map(({ skill, exp }) => (
                            <Typography
                                key={skill}
                                sx={typographyStyle}
                                textAlign='center'
                            >
                                {skill}&nbsp;({exp})
                                <span style={spanStyle}
                                    id={skill}
                                    onClick={removeSkill}
                                >
                                    X
                                </span>
                            </Typography>
                        ))
                    }
                </div>
            </form>
        </Paper>
    )
}
