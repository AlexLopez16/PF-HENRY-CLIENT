
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProjectCard from "../project/ProjectCard";
import { getProject } from "../../actions/projects";
// import StudentCard from "../student/StudentCard";

const DashboardCompany: FC = () => {

    let token = localStorage.getItem("token");
    const dispatch = useDispatch();
    const { projects } = useSelector((state: any) => state.project)

    React.useEffect(()=>{
        dispatch(getProject(token as string))
    }, []);
    
    return (

        <div >
            {projects.map((p: any) =>
                <ProjectCard 
                    name={p.name}
                    description={p.description}
                    participants={p.participants}
                    requirements={p.requirements}
                    students={p.students}
                    company={p.company}
                    stateOfProject={p.stateOfProject}
                    id={p.id}
                    category={p.category}
                />)
            }

        </div>
    )


}

export default DashboardCompany;   