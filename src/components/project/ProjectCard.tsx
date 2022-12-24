import { FC } from "react";

import { Box, Typography, Paper, CardMedia, Chip } from "@mui/material";
import clip from "text-clipper"

import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProjectByID } from "../../actions/projects";


type CompanyData = {
    "_id": string,
    "name": string
}

interface CardProjectProps {
    
    name?: string,
    description: string,
    participants?: number
    requirements?: any,
    students:string[]|undefined,
    company?: CompanyData,
    state?: boolean
    stateOfProject?: string
    id?: string
    category?:string
}

const ProjectCard: FC<CardProjectProps> = ({
    name,
    description,
    participants,//lo que se necesitan para el proyecto
    requirements,
    students,//los aceptados por la empresa para el project
    company,
    stateOfProject,
    id,
    category
}: CardProjectProps) => {

    const dispatch = useDispatch()
    const token = localStorage.getItem('token') || '';
    const rol = localStorage.getItem('rol');
    const clippedDescription = clip(description, 100)

  const handleClick = () => {
    dispatch(getProjectByID(token, id));
  };

    return  rol === 'STUDENT_ROL' ? 

        <Paper elevation={10} style={{
            width: '100vh',
            height: "fit-content",
            padding: 20,
            marginLeft: 50,
            marginRight:30,
            marginTop: 50
        }}>

            <Typography sx={{ mb: 0.5, display: 'flex', justifyContent: 'space-between' }} variant="h6">
                {name}
                <Link to="/project">
                    <Button
                        sx={{ ml: 'auto', fontWeight: 600, color: "yellow", background: "black", }}
                        size="small"
                        color="primary"
                        variant="text"
                        onClick={handleClick}
                    >
                        Mas info
                    </Button>
                </Link>
            </Typography>

            <Typography sx={{ mb: 0.5 }}>
                {company?.name}
            </Typography>

            <Typography sx={{ mb: 0.5 }}>
                <h2> {description} </h2>
            </Typography>

            <Box sx={{ display: 'flex' }}>
                <div>
                    <Typography variant="subtitle2">
                        Requerimientos: {requirements.join(", ")}
                    </Typography>
                    <Typography variant="subtitle2">Estado: {stateOfProject} </Typography>
                    <Typography variant="subtitle2">Category: {category} </Typography>
                    <Typography variant="subtitle2"> Participantes: {students?.length}/{participants} </Typography>
                </div>
            </Box>
        </Paper>

    : 
            
    <Paper elevation={10} style={{
        width: '350px',
        height: "500px",
        padding: 20,
        marginLeft: 50,
        marginTop: 50,
        display: 'flex',
        flexDirection: 'column'
    }}>


        <Typography  sx={{mb: 0.5, color: '#898989'}}>{category}</Typography>
        <Typography sx={{ m: 0.5 , fontWeight: 600}} variant='h5'>
            {name}            
        </Typography>

        <Typography sx={{ m: 0.5 }} variant="h6">
            {company?.name}
        </Typography>

        <Typography sx={{ m: 0.5 }}>
             {clippedDescription}
        </Typography>

        <Box>
            <div>
                <Typography variant="subtitle1" sx={{m: 0.5, color: '#898989'}}> Requerimientos:</Typography>
                {requirements.map((p: any) => <Chip label={p} sx={{mb: 1, mr: 0.5}}/>)}
                <Typography variant="subtitle1" sx={{m: 0.5, color: '#898989'}}>Estado: </Typography>
                <Typography variant="subtitle2" sx={{m: 0.5}}> {stateOfProject}</Typography>
                <Typography variant="subtitle1" sx={{mb: 0.5, color: '#898989'}}> Participantes: </Typography>
                <Typography variant="subtitle2" sx={{m: 0.5}}> {students?.length}/{participants} </Typography>
            </div>
        </Box> 

        <NavLink to="/project" style={{textDecoration: "none", marginTop: 'auto'}}>
                <Button
                    sx={{ ml: 'auto', fontWeight: 600, color: "yellow", background: "black", width: '100px'}}
                    size="small"
                    color="primary"
                    variant="text"
                    onClick={handleClick}
                >
                    Mas info
                </Button>
            </NavLink>
    </Paper>

}

export default ProjectCard;
