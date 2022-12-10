import { Description } from "@mui/icons-material";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { string } from "yup";
import ProjectCard from "../components/Card/ProjectCard";
import { getProjects } from "../reducers/ProjectReducer";
import { State } from "../reducers/rootReducer"

const DashboardStudens: FC = () => {

  const dispatch = useDispatch()



  useEffect(() => {

    dispatch(getProjects())

  }, [dispatch])


  interface props {
    description?: string
    name?: string
    participants?: number
    requirements?: string[]
    state?: boolean
    students?: string[]
    uid?: string


  }

  const { project } = useSelector((state: State) => state.project);
  console.log(project);


  // name
  // Description
  // participants
  // requirements
  // students 
  // company

  return (
    <>
      {project.map((e:any) => (
        <ProjectCard
          name={e.name}
          // empresa={e.empresa}
          // imagen={e.imagen}
          // detalle={e.detalle}
          participants={e.participants}
          requirements={e.requirements}
          state={e.state}
        // email={e.email}
        />
      ))}
    </>
  );
};

export default DashboardStudens;