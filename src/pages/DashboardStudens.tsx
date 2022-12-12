import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProject } from "../actions/projects";
import ProjectCard from "../components/Card/ProjectCard";
import { State } from "../reducers/rootReducer"

const DashboardStudens: FC = () => {

  const dispatch = useDispatch()

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRW1wcmVzYSIsImlkIjoiNjM5Njc2ZmNhOGM5Yzc4NDIyYjczNTdhIiwiaWF0IjoxNjcwODYxNDQyLCJleHAiOjE2NzA4Njg2NDJ9.76q1VIwChV-OU_srFnSn2TqgvfnbOcUqyJ6vRZv-hDE"



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
  // projectsFilter ||=[]


  let info;
  //  projectsFilter.length
  //  ? info=projectsFilter
  //  :info=projects 
  // if (!projectsFilter.length) { info = projectsFilter }
  // else { info = projects }


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