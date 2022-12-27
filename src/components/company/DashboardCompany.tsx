import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProjectCard from "../project/ProjectCard";
import { getProject } from "../../actions/projects";
import { Box, Container } from "@mui/system";
import Pages from "../ui/Pagination";

// import StudentCard from "../student/StudentCard";

const DashboardCompany: FC = () => {
  let token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const { projectsFilter } = useSelector((state: any) => state.project);
  console.log( projectsFilter);

  React.useEffect(() => {
    dispatch(getProject(token as string));
  }, [dispatch]);

  return (
    <Box>
    <Pages/>
    <Container maxWidth="lg" sx={{marginLeft:65}}>
        
      {projectsFilter.length&&projectsFilter.map((p: any) => (
        <ProjectCard
          name={p.name}
        //   description={p.description}
          participants={p.participants}
          requirements={p.requirements}
          students={p.students}
          company={p.company?.name}
          stateOfProject={p.stateOfProject}
          id={p.uid}
          category={p.category}
        />
      ))}
    </Container>
    </Box>
  );
};

export default DashboardCompany;
