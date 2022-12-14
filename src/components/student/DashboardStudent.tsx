import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProject } from "../../actions/projects";
import ProjectCard from "../project/ProjectCard";
import { State } from "../../reducers/rootReducer"

const DashboardStudent: FC = () => {

  const dispatch = useDispatch()
  let token = localStorage.getItem('token') || '';

  useEffect(() => {
    dispatch(getProject(token))
  }, [dispatch])

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

  const { projects } = useSelector((state: State) => state.project);
  const { projectsFilter } = useSelector((state: State) => state.project);

  let info = projectsFilter.length ? projectsFilter : projects

  return (
    <div>
      {info.map((e: any) => (
        <ProjectCard
          name={e.name}
          participants={e.participants}
          requirements={e.requirements}
          students={e.students}
          company={e.company.name}
          state={e.state}
          stateOfProject={e.stateOfProject}
          id={e.uid}
        />
      ))}


    </div>

  );
};

export default DashboardStudent;