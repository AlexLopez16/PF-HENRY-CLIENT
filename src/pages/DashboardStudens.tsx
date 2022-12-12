import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProject } from "../actions/projects";
import ProjectCard from "../components/Card/ProjectCard";
import { State } from "../reducers/rootReducer"

const DashboardStudens: FC = () => {

  const dispatch = useDispatch()

  const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ29tbnBhbnkyIiwiaWQiOiI2MzkyNzU3NGU3M2RkNjVmMzkwNDA4NTciLCJpYXQiOjE2NzA3MzM0MzIsImV4cCI6MTY3MDc0MDYzMn0.d88cV9USr-5OkWqfTcqmc124Q3FHPqKiWtB_Yg3FCGI"

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
  console.log(projects);

  return (
    <>
      {projects.map((e: any) => (
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