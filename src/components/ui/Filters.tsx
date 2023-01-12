import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Input, Autocomplete, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

import { getCategory, getProjectsFilter } from '../../actions/projects';
import { State } from '../../reducers/rootReducer';

import { valueOrDefault } from 'chart.js/dist/helpers/helpers.core';
export const Filters = () => {
    const dispatch = useDispatch();
    let token = localStorage.getItem("token") || "";
    const [inputFilter, setInput] = useState({
        state: undefined,
        tecnologies: undefined,
        typeOfOrder: undefined,
        categorie: undefined,
        search: undefined,
    });
    useEffect(() => {
        dispatch(
            getProjectsFilter(
                inputFilter.typeOfOrder,
                inputFilter.tecnologies,
                token,
                inputFilter.search,
                inputFilter.categorie,
                inputFilter.state
            )
        );
        dispatch(getCategory(token));
    }, [dispatch, token, inputFilter]);

    const { category } = useSelector((state: State) => state.project);
    const categorys = category;

    const tecnologias = [
        ".Net",
        "Airflow",
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
    ];

    const stateOfProject = ['Reclutamiento', 'En desarrollo', 'Terminado'];

    const handlerchange = (e: string, value: any) => {
        if (e === "e") {
            if (value.length) {
                // state = value;
                setInput({ ...inputFilter, state: value });
            } else {
                setInput({ ...inputFilter, state: undefined });
            }
        }
        if (e === "t") {
            if (value.length) {
                setInput({ ...inputFilter, tecnologies: value });
            } else {
                setInput({ ...inputFilter, tecnologies: undefined });
            }
        }
        if (e === "o") {
            let val = value.props.value;
            if (val) {
                setInput({ ...inputFilter, typeOfOrder: val });
            } else {
                setInput({ ...inputFilter, typeOfOrder: undefined });
            }
        }
        if (e === "c") {
            if (value.length) {
                setInput({ ...inputFilter, categorie: value });
            } else {
                setInput({ ...inputFilter, categorie: undefined });
            }
        }
        if (e === "n") {
            if (value) {
                setInput({ ...inputFilter, search: value });
            } else {
                setInput({ ...inputFilter, search: undefined });
            }
        }
    }

    return (
        <div 
            style={{
                padding: 20,
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
            }}
        >
            
            <div style={{ width: 255}}>
                <Autocomplete
                    onChange={(e, value) => {
                        handlerchange("t", value);
                    }}
                    multiple={true}
                    size="small"
                    id="tags-outlined"
                    options={tecnologias}
                    getOptionLabel={(option) => option}
                    filterSelectedOptions
                    renderInput={(params) => (
                        <TextField 
                            {...params}
                            label="Filtar por Tecnologia "
                            placeholder="Tecnologia"
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
                    size="small"
                    id="tags-outlined"
                    color='secondary'
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
            </div>
            <div style={{ width: 255 }}>
                <Autocomplete
                    onChange={(e, value) => {
                        handlerchange("e", value);
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
            <div style={{ width: 255 }}>
                <FormControl sx={{ width: '100%', padding: 0 }}>
                    <InputLabel
                        id="vacantes-label"
                        size="small"
                        sx={{ padding: 0 }}
                    >
                        Ordenar por participantes
                    </InputLabel>
                    <Select
                        size="small"
                        sx={{ padding: 0 }}
                        id="vacantes"
                        labelId="vacantes-label"
                        label="vacantes"
                        name="vacantes"
                        onChange={(e, value) => {
                            handlerchange('o', value);
                        }}
                    >
                        <MenuItem value={'desc'}>Mayor a Menor</MenuItem>
                        <MenuItem value={"asc"}>Menor a Mayor</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div style={{ marginLeft: 10 }}>
                <Input
                    placeholder="Search..."
                    onChange={(e) => handlerchange("n", e.target.value)}
                    sx={{
                        position: "relative",
                        right: 10,
                        "&:hover": {},
                    }}
                    value={inputFilter.search}
                />
            </div>
        </div>
    )
}
