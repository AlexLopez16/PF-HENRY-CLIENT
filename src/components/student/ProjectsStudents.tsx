import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategory,
  getProject,
  getProjectsFilter,
} from "../../actions/projects";
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
import { IconButton, Input, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import StudentsFilter from "./StudentsFilter";



const ProjectsStudents: FC = () => {
  const dispatch = useDispatch();
  let token: String | null = localStorage.getItem("token");
  const [search, setSearch] = useState("");
  const [inputFilter, setInput] = useState({
    state: undefined,
    tecnologies: undefined,
    typeOfOrder: undefined,
    categorie: undefined,
  });
  useEffect(() => {
    console.log("bye")
    dispatch(
      getProjectsFilter(
        
        inputFilter.typeOfOrder,
        inputFilter.tecnologies,
        token,
        search,
        inputFilter.categorie,
        inputFilter.state
      )
    );
    // dispatch(getCategory(token));
  }, [dispatch, token, inputFilter]);

  const { projectsFilter } = useSelector((state: State) => state.project);

  let info = projectsFilter;
 

  const { status } = useSelector((state: State) => state.auth);
  //   console.log('logged', logged);
  if (status === 401) {
    console.log("401", 401);
    localStorage.clear();
    dispatch({
      type: types.authLogin,
    });
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <div
        style={{
          width: 1350,
          height: "10%",
          padding: 20,
          marginRight: "0px",
          marginLeft: "90px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <StudentsFilter />
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
              company={e.company?.name}
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

export default ProjectsStudents;
