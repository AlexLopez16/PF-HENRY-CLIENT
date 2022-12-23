import { useDispatch, useSelector } from "react-redux";
import { getMyProjectsCompany } from "../../actions/projects";
import ProjectCard from "./ProjectCard";
import { State } from "../../reducers/rootReducer";

import { Box } from "@mui/system";
import Alert from "@mui/material/Alert/Alert";
import Stack from "@mui/material/Stack/Stack";
import { useEffect,FC } from "react";

// const styledInput = {
//   position: "relative",
//   right: 10,
//   "&:hover": {},
// };
export const MyProjectCompany: FC = () => {
  const dispatch = useDispatch();
  let token: String | null = localStorage.getItem("token");
  useEffect(() => {
    console.log("hola");
    dispatch(getMyProjectsCompany(token));
  }, [dispatch, token]);

  const { myProjectCompany} = useSelector((state: State) => state.project);
  let info = myProjectCompany;

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
      ></div>

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
            <Alert severity="info">No hay proyectos creados!</Alert>
          </Stack>
        )}
      </Box>
    </div>
  );
};
