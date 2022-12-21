import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory, getProject, getProjectsFilter } from "../../actions/projects";
import ProjectCard from "../project/ProjectCard";
import { State } from "../../reducers/rootReducer";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl/FormControl";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import Select from "@mui/material/Select/Select";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import { Box } from "@mui/system";
import Alert from "@mui/material/Alert/Alert";
import Stack from "@mui/material/Stack/Stack";
import { Navigate, useSearchParams } from "react-router-dom";
import { types } from "../../types/types";

// let state: string[] | undefined = undefined;
// let tecnologies: string[] | undefined = undefined;
// let typeOfOrder: string | undefined = undefined;
const DashboardStudent: FC = () => {
  const dispatch = useDispatch();
  let token: String | null = localStorage.getItem("token");
  const [inputFilter, setInput] = useState({
    state: undefined,
    tecnologies: undefined,
    typeOfOrder: undefined,
    categorie: undefined,
  });
  useEffect(() => {
    // dispatch(getProject(token));
    dispatch(
      getProjectsFilter(
        inputFilter.typeOfOrder,
        inputFilter.tecnologies,
        token,
        undefined,
        inputFilter.categorie,
        inputFilter.state
      )
    );
    dispatch(getCategory(token))
  }, [dispatch, token, inputFilter]);
  // interface props {
  //   description?: string
  //   name?: string
  //   participants?: number
  //   requirements?: string[]
  //   state?: boolean
  //   students?: string[]
  //   uid?: string
  //   stateOfProject: string

  // }

  const { category} = useSelector((state: State) => state.project);
  const categorys = category;

  const tecnologias = [
    "Python",
    "Java",
    "JavaScript",
    "PHP",
    "R",
    "Swfit",
    "Flutter",
    "Net",
    "MathLab",
    "Kotlin",
    "Cobol",
    "Sql",
    "TypeScript",
    "AWS",
    "Mongo",
    "NodeJS",
    "React",
    "Postgress"
  ];

  const stateOfProject = ["Reclutamiento", "En desarrollo", "Terminado"];

  // const { projects } = useSelector((state: State) => state.project);

  const { projectsFilter } = useSelector((state: State) => state.project);
  let info = projectsFilter;
  

  const {status} = useSelector((state: State) => state.auth);
//   console.log('logged', logged);
  if (status===401){  
        console.log('401',401)
    localStorage.clear();   
    dispatch({
      type: types.authLogin,
    });
    return <Navigate to='/login' />
 }   

  

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
    // dispatch(
    //   getProjectsFilter(
    //     inputFilter.typeOfOrder,
    //     inputFilter.tecnologies,
    //     token,
    //     undefined,
    //     undefined,
    //     inputFilter.state
    //   )
    // );
  };

  return (
    <div>
      <div
        style={{
          width: 1100,
          height: "10%",
          padding: 20,
          marginRight: "0px",
          marginLeft: "200px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
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
              handlerchange("c", value);
            }}
            multiple={true}
            size="small"
            id="tags-outlined"
            options={categorys}
            getOptionLabel={(option) => option}
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
          <FormControl sx={{ width: "100%", padding: 0 }}>
            <InputLabel id="vacantes-label" size="small" sx={{ padding: 0 }}>
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
                handlerchange("o", value);
              }}
            >
              <MenuItem value={"desc"}>Mayor a Menor</MenuItem>

              <MenuItem value={"asc"}>Menor a Mayor</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <Box
        sx={{
          pl: 30,
        }}
      >
        {info.length ? (
          info.map((e: any) => (
            <ProjectCard
              name={e.name}
              participants={e.participants}
              requirements={e.requirements}
              students={e.students}
              company={e.company.name}
              state={e.state}
              stateOfProject={e.stateOfProject}
              id={e.uid}
              category={e.category}
            />
          ))
        ) : (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="info">
              No hay proyectos con los filtros aplicados!
            </Alert>
          </Stack>
        )}
      </Box>
    </div>
  );
};

export default DashboardStudent;
