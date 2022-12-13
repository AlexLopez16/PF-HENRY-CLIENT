import { FC, useState } from "react"

import {
    InputLabel,
    FormControl,
    Select,
    MenuItem,
    Box,
    FormLabel,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Button,

} from "@mui/material";
import { useDispatch } from "react-redux";
import { getProjectsFilter } from "../../actions/projects";


const FiltroDashStudent: FC = () => {
    const dispatch = useDispatch();

    let token:string = localStorage.getItem('token');
    const [tecnologias, setTecnologias] = useState({

        Python: false,
        Java: false,
        JavaScript: false,
        PHP: false,
        R: false,
        Swfit: false,
        Flutter: false,
        Net: false,
        MathLab: false,
        Kotlin: false,
        Cobol: false,
        Sql: false,
        Typescript: false,
        AWS: false,
    })


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTecnologias({
            ...tecnologias,
            [event.target.name]: event.target.checked,
        });
    };


    const {

        Python,
        Java,
        JavaScript,
        PHP,
        R,
        Swfit,
        Flutter,
        Net,
        MathLab,
        Kotlin,
        Cobol,
        Sql,
        Typescript,
        AWS,
    } = tecnologias;

    const [order, setOrder] = useState()

    const handleOrder = (e: any) => {
        setOrder(e.target.value)

    }

    const handlesubmit = () => {

        let tecnologies = Object.keys(tecnologias).filter(el => tecnologias[el] === true);//me devuelve los true
        dispatch(getProjectsFilter(order, tecnologies, token))
    }

    return (
        <>
            <Box>
                <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                    <FormLabel component="legend">Tecnologias</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox checked={Python} onChange={handleChange} name="Python" />
                            }
                            label="Python"
                        />
                        {/* <FormControlLabel
                            control={
                                <Checkbox checked={java} onChange={handleChange} name="java" />
                            }
                            label="java"
                        /> */}
                        <FormControlLabel
                            control={
                                <Checkbox checked={JavaScript} onChange={handleChange} name="JavaScript" />
                            }
                            label="JavaScript"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={PHP} onChange={handleChange} name="PHP" />
                            }
                            label="PHP"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={Typescript} onChange={handleChange} name="Typescript" />
                            }
                            label="Typescript"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={Sql} onChange={handleChange} name="Sql"
                                />
                            }
                            label="Sql"
                        />
                    </FormGroup>
                </FormControl>

                <FormControl sx={{ width: "100%", marginTop: 1 }}>
                    <InputLabel id="vacantes-label">vacantes</InputLabel>
                    <Select
                        id="vacantes"
                        labelId="vacantes-label"
                        label="vacantes"
                        name='vacantes'

                        onChange={(e) => { handleOrder(e) }}
                    >

                        <MenuItem value={"mayor"}>mayor</MenuItem>

                        <MenuItem value={"menor"}>menor</MenuItem>


                    </Select>
                </FormControl>

                <Button
                    sx={{ marginTop: 5 }}
                    type="submit"
                    variant="contained"
                    fullWidth
                    color="primary"
                    onClick={handlesubmit}
                >
                    buscar
                </Button>
            </Box>

        </>
    )
};



export default FiltroDashStudent;