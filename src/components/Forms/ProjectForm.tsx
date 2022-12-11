import { FC } from "react";
import { Grid, Button, Paper, IconButton } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import {
    TextField,
    InputLabel,
    FormControl,
    Select,
    MenuItem,
    OutlinedInput,
    Box,
    Chip,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

const ProjectForm: FC = () => {
    const validationSchema = yup.object().shape({
        name: yup.string().required("Nombre requerido"),
        description: yup.string().required("Descripcion requerida"),
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            description: "",
            requerimientos: Array<string>(),
            participantes: 1
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
        }
    });


    const listLanguage: string[] = [
        'Python',
        'Java',
        'JavaScript',
        'PHP',
        'C#',
        'C',
        'C++',
        'R',
        'Swfit',
        'Flutter',
        '.net',
        'MathLab',
        'Kotlin',
        'Cobol',
        'sql',
        'typescript',
        'AWS',
    ];

    const employees: number[] = [1, 2, 3, 4, 5, 6, 7];

    return (
        <div>
            <Grid>
                <Paper elevation={10} style={{ width: 400, height: "100%", padding: 20, margin: "50px auto" }}>
                    <Grid textAlign="center">
                        <h5>
                            Crear proyecto
                        </h5>
                    </Grid>                    
                            <form onSubmit={formik.handleSubmit}>
                                <TextField                                    
                                    name="name"
                                    label="Nombre"
                                    size="small"
                                    sx={{ width: "100%", marginTop: 1 }}
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    helperText={formik.touched.name && formik.errors.name}
                                />

                                <IconButton aria-label="upload picture" component="label" sx={{ marginLeft: 20 }}>
                                    <input hidden accept="image/*" type="file" />
                                    <PhotoCamera />
                                </IconButton>

                                {/* <TextField
                                    name="UrlE"
                                    label="Url empresarial"
                                    size="small"
                                    sx={{ width: "100%", marginTop: 1 }}
                                    value={formik.values.description}
                                    onChange={formik.handleChange}
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    helperText={formik.touched.name && formik.errors.name}

                                /> */}

                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="Descripcion"
                                    multiline
                                    maxRows={4}
                                    name="description"
                                    size="small"
                                    sx={{ width: "100%", marginTop: 1 }}
                                    variant="outlined"
                                    value={formik.values.description}
                                    onChange={formik.handleChange}
                                    error={formik.touched.description && Boolean(formik.errors.description)}
                                    helperText={formik.touched.description && formik.errors.description}
                                />
                                
                                <FormControl sx={{ width: "100%", marginTop: 1 }}>
                                    <InputLabel id="requerimientos-label">Lenguaje</InputLabel>
                                    <Select
                                        labelId="requerimientos-label"
                                        id="requerimientos"
                                        multiple
                                        label="Nacionalidad"
                                        value={formik.values.requerimientos}
                                        name='requerimientos'
                                        onChange={formik.handleChange}                                    
                                        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                                        renderValue={(selected) => (
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                {selected.map((value) => (
                                                    <Chip key={value} label={value} />
                                                ))}
                                            </Box>
                                        )}
                                    >
                                        {listLanguage.map(language => (
                                            <MenuItem key={language} value={language}>{language}</MenuItem>
                                        ))}

                                    </Select>
                                </FormControl>

                                <FormControl sx={{ width: "100%", marginTop: 1 }}>
                                    <InputLabel id="participantes-label">Participantes</InputLabel>
                                    <Select
                                        id="participantes"
                                        labelId="participantes-label"
                                        label="Participantes"
                                        name='participantes'
                                        value={formik.values.participantes}
                                        onChange={formik.handleChange}
                                    >

                                        {employees.map(employee => (
                                            <MenuItem key={employee.toString()} value={employee.toString()}>{employee.toString()}</MenuItem>
                                        ))}

                                    </Select>
                                </FormControl>

                                <Button
                                    sx={{ marginTop: 5 }}
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    color="primary"
                                >
                                    Crear Proyecto
                                </Button>
                            </form>
                </Paper>
            </Grid>
        </div>
    );
};

export default ProjectForm;