import { FC } from "react";

import {
    Box,
    Typography,
    Paper,
    CardMedia,
} from "@mui/material";

import Button from "@mui/material/Button"
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getProjectByID } from "../../actions/projects";




interface CardProjectProps {
    
    name?: string,
    Description?: string,
    participants?: number
    requirements?: any,
    students:string[]|undefined,
    company?: string,
    state?: boolean
    stateOfProject?: string
    id: string
    category?:string
}


const ProjectCard: FC<CardProjectProps> = ({
    name,
    Description,
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

    const handleClick = () => {
        dispatch(getProjectByID(token, id))
        
    }

    return (
        <Paper elevation={10} style={{
            width: '100vh',
            height: "fit-content",
            padding: 20,
            marginLeft: 50,
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
                {company}
            </Typography>

            <Typography sx={{ mb: 0.5 }}>
                <h2> {Description} </h2>
            </Typography>

            <Box sx={{ display: 'flex' }}>
                <div>
                    <Typography variant="subtitle2">
                        Requerimientos: {requirements.join(", ")}
                    </Typography>
                    <Typography variant="subtitle2">Estado: {stateOfProject} </Typography>
                    <Typography variant="subtitle2">Category: {category} </Typography>
                    <Typography variant="subtitle2"> Participantes: {students.length}/{participants} </Typography>
                </div>
            </Box>
        </Paper>
    )
}

export default ProjectCard;