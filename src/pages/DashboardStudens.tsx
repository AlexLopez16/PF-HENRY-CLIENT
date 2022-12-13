import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProject } from "../actions/projects";
import ProjectCard from "../components/Card/ProjectCard";
import { State } from "../reducers/rootReducer"

const DashboardStudens: FC = () => {

  const dispatch = useDispatch()
  let token: string = localStorage.getItem('token');
  console.log(token);

  useEffect(() => {
    dispatch(getProject(token))
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

  const { projects } = useSelector((state: State) => state.project);
  const { projectsFilter } = useSelector((state: State) => state.project);



  let info;
  projectsFilter.length ? info = projectsFilter : info = projects
  console.log(info);


  // name -
  // Description
  // participants-
  // requirements-
  // students -
  // company

  return (
    <>
      {info.map((e: any) => (
        <div >
          <ProjectCard
            name={e.name}
            participants={e.participants}
            requirements={e.requirements}
            students={e.students}
            company={e.company}
            state={e.state}
          />
        </div>
      ))}


    </>

  );
};

export default DashboardStudens;