import { FC, useState } from "react";
import { Grid, Button, Paper, IconButton } from "@mui/material";
import { Field, useFormik } from "formik";
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
import { useDispatch } from "react-redux";
import { registerProject } from "../../actions/projects";
import InputAdornment from "@mui/material/InputAdornment";
import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";
import axios from "axios";

const ProjectForm: FC = () => {
  const validationSchema = yup.object().shape({
    name: yup.string().required("Nombre requerido"),
    description: yup.string().required("Descripcion requerida"),
  });
  const dispatch = useDispatch();
  
  const token =localStorage.getItem("token") || ""

     const formik = useFormik({
    initialValues: {
      name: "",
      description: "",

      requirements: Array<string>(),
      participants: 1,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(registerProject(values, token));
    },
  });

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

  const employees: number[] = [1, 2, 3, 4, 5, 6, 7];


const [image,setImage]=useState("");
const [loading,setLoading]=useState(false);

const uploadImage = async (value:any) =>{

    const files = value.target.files;
    const data = new FormData();
    data.append("file",files[0]);
    data.append("upload preset", "images");
    setLoading(true);
    const res = await axios.post("https://api.cloudinary.com/v1_1/dpdkjun0n/image/upload",data)
    const file = await res.data
   
    setImage(file.secure_url)
    setLoading(false)



}



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

            {/* <IconButton aria-label="upload picture" component="label" sx={{ marginLeft: 20 }}>
                                    <input hidden accept="image/*" type="file" />
                                    <PhotoCamera />
                                </IconButton> */}

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
              sx={{ width: "100%", marginTop: 1, marginBottom: 1 }}
              variant="outlined"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
            />

            <OutlinedInput
              id="outlined-multiline-flexible"
              label="Archivos"
              name="archivos"
              fullWidth
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                    edge="end"
                    onChange={uploadImage}
                  >
                    <input hidden accept="image/" type="file" />
                    <AttachFileRoundedIcon />
                  </IconButton>
                </InputAdornment>
              }
            />

            <FormControl sx={{ width: "100%", marginTop: 1 }}>
              <InputLabel id="requirements-label">Lenguaje</InputLabel>
              <Select
                labelId="requirements-label"
                id="requirements"
                multiple
                label="requirements"
                value={formik.values.requirements}
                name="requirements"
                onChange={formik.handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
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
              <InputLabel id="participants-label">Participantes</InputLabel>
              <Select
                id="participants"
                labelId="participants-label"
                label="Participantes"
                name="participants"
                value={formik.values.participants}
                onChange={formik.handleChange}
              >
                {employees.map((employee) => (
                  <MenuItem
                    key={employee.toString()}
                    value={employee.toString()}
                  >
                    {employee.toString()}
                  </MenuItem>
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
