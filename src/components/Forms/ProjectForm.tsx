import { useState } from "react";
import { FC } from "react";
import { Grid, Button, Paper, IconButton, Typography } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import {
  TextField,
  InputLabel,
  FormControl,
  SelectChangeEvent,
  Select,
  MenuItem,
  OutlinedInput,
  Box,
  Chip,
  InputAdornment,
} from "@mui/material";
// import { PhotoCamera } from "@mui/icons-material";
// import { buttonStyle, spanStyle, typographyStyle } from "../../styles/Profile/SkillsFormStyles";
import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";

const ProjectForm: FC = () => {
  const listLanguage: string[] = [
    "Python",
    "Java",
    "JavaScript",
    "PHP",
    "C#",
    "C",
    "C++",
    "R",
    "Swfit",
    "Flutter",
    ".net",
    "MathLab",
    "Kotlin",
    "Cobol",
    "sql",
    "typescript",
    "AWS",
  ];
  const [language, setLanguage] = useState<string[]>([]);

  const employees: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  const [employee, setEmployee] = useState(1);

  const initialValues = {
    nameProject: "",
    description: "",
    languageOptions: [],
    imagen: [],
  };

  const validationSchema = yup.object().shape({
    nameEmpresa: yup.string().required("Nombre requerido"),
    description: yup.string().required("Descripcion requerida"),
  });

  const onSubmit = (values: any) => {
    values;
  };

  const handleChange = (event: SelectChangeEvent<typeof language>) => {
    setLanguage(
      typeof event.target.value === "string"
        ? event.target.value.split(",")
        : event.target.value
    );
  };

  const handleNumber = (event: SelectChangeEvent) => {
    setEmployee(Number(event.target.value));
  };
  interface Data {
    skill: string;
  }

  // const [input, setInput] = useState('')
  // const [skills, setSkills] = useState<Data[]>([])

  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setInput(event.target.value)
  // }

  // const handleClick = () => {
  //     setSkills([
  //         ...skills,
  //         {
  //             skill: input,
  //         }
  //     ])
  //     setInput('')
  // }

  // const removeSkill = (event: React.MouseEvent<HTMLButtonElement>) => {
  //     const id = (event.target as HTMLElement).id
  //     const filter = skills.filter(({ skill }) => skill !== id)
  //     setSkills(filter)
  // }

  return (
    <div>
      <Grid>
        <Paper
          elevation={10}
          style={{
            width: 400,
            height: "100%",
            padding: 20,
            margin: "50px auto",
          }}
        >
          <Grid textAlign="center">
            <h5>Crear proyecto</h5>
          </Grid>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form>
                <Field
                  as={TextField}
                  name="nameProject"
                  label="Nombre"
                  size="small"
                  sx={{ width: "100%", marginTop: 1 }}
                  helperText={
                    <ErrorMessage name="name">
                      {(message) => (
                        <span style={{ color: "red" }}>{message}</span>
                      )}
                    </ErrorMessage>
                  }
                />

                {/* 
                                <IconButton aria-label="upload picture" component="label" sx={{ marginLeft: 20 }}>
                                    <input hidden accept="image/*" type="file" />
                                    <PhotoCamera />


                                </IconButton> */}

                <Field
                  as={TextField}
                  id="outlined-multiline-flexible"
                  label="Descripcion"
                  multiline
                  maxRows={4}
                  name="description"
                  size="small"
                  sx={{ width: "100%", marginTop: 1 }}
                  variant="outlined"
                  helperText={
                    <ErrorMessage name="description">
                      {(message) => (
                        <span style={{ color: "red" }}>{message}</span>
                      )}
                    </ErrorMessage>
                  }
                />

                <Field
                  as={OutlinedInput}
                  id="outlined-multiline-flexible"
                  label="imagen"
                  name="description"
                fullWidth
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="label"
                        edge="end"
                      >
                        <input hidden accept="image/" type="file" />
                        <AttachFileRoundedIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                />

                {/* <Button variant="contained" component="label">
                  Upload
                  <input hidden accept="image/" multiple type="file" />
                </Button> */}

                <FormControl sx={{ width: "100%", marginTop: 1 }}>
                  <InputLabel id="demo-multiple-chip-label">
                    Requerimientos
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    label="requerimientos"
                    value={language}
                    onChange={handleChange}
                    input={
                      <OutlinedInput
                        id="select-multiple-chip"
                        label="requerimientos"
                      />
                    }
                    renderValue={(selected) => (
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                  >
                    {listLanguage.map((language) => (
                      <MenuItem key={language} value={language}>
                        {language}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl sx={{ width: "100%", marginTop: 1 }}>
                  <InputLabel id="demo-simple-select-label">
                    Estudiantes
                  </InputLabel>
                  <Select
                    id="demo-simple-select"
                    labelId="demo-simple-select-label"
                    label="Empleados"
                    value={employee.toString()}
                    onChange={handleNumber}
                  >
                    {employees.map((employee) => (
                      <MenuItem value={employee.toString()}>
                        {employee.toString()}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                {/* <div style={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: '10px',
                marginBottom: '20px'
            }}>
                <TextField
                    label="Habilidad"
                    variant="outlined"
                    sx={{ height:"100%", width: '350px', margin: '15px 5px' }}
                    placeholder='Ejemplo: JavaScript'
                    value={input}
                    onChange={handleInputChange}
                />
            

                <Button
                    style={buttonStyle}
                    variant='contained'
                    onClick={handleClick}
                    disabled={(input === '')}
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
                    skills.map(({ skill}) => (
                        <Typography
                            key={skill}
                            sx={ typographyStyle}
                            textAlign='center'
                        >
                            {skill}
                            <span style={spanStyle}
                          
                                id={skill}
                                onClick={removeSkill}
                            >
                                X
                            </span>
                        </Typography>
                    ))
                }
            </div> */}

                <Button
                  sx={{ marginTop: 10 }}
                  type="submit"
                  variant="contained"
                  fullWidth
                  color="primary"
                  disabled={props.isSubmitting}
                >
                  Crear Proyecto
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </div>
  );
};

export default ProjectForm;
