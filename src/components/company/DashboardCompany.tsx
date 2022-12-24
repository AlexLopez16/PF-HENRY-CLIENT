
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProjectCard from "../project/ProjectCard";
import { getProject } from "../../actions/projects";
import { Box } from "@mui/system";
// import StudentCard from "../student/StudentCard";

import { Grid } from "@mui/material";

const DashboardCompany: FC = () => {

    let token = localStorage.getItem("token");
    const dispatch = useDispatch();
    const { projects } = useSelector((state: any) => state.project)

    React.useEffect(()=>{
        dispatch(getProject(token as string))
    }, []);
    
    console.log(projects)
    return (
        <Grid container sx={{justifyContent: 'center'}}>
            {projects.map((p: any) =>
            <Grid item >
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
               key={p.id}
           />
           </Grid>
            )}
        </Grid>
       
    )


}

export default DashboardCompany;   