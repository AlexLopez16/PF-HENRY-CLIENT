import { FC } from "react";

import {
  Box,
  Typography,
  Paper,
  CardMedia,
} from "@mui/material";

import Button from "@mui/material/Button"
import { Link } from "react-router-dom";




interface CardProjectProps {

  name?: string,
  Description?: string,
  participants?: number
  requirements?: any,
  students?: number,
  company?: string,
  state?: boolean
}


const ProjectCard: FC<CardProjectProps> = ({
  name,
  Description,
  participants,//lo que se necesitan para el proyecto
  requirements,
  students,//los aceptados por la empresa para el project
  company,
  state
}: CardProjectProps) => {


  return (
    <Paper elevation={10} style={{ width: 400, height: "100%", padding: 20, marginLeft: 50, marginTop: 50 }}>

      <Typography sx={{ mb: 0.5 }} variant="h6">{name}</Typography>


      <Typography sx={{ mb: 0.5 }}>
        <h2> {Description} </h2>    </Typography>
      {/* <CardMedia
          component="img"
          height="140"
          // image="null"
          alt="green iguana"
        /> */}

      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography variant="subtitle2">
            Requerimientos: {requirements.join(", ")}
          </Typography>
          <Typography variant="subtitle2"> Participantes requeridos: {participants}</Typography>
          <Typography variant="subtitle2">Estado:  </Typography>
          <Typography variant="subtitle2"> aceptados: {students}/{participants} </Typography>
        </div>
        <Link to="/projectDetail">
          <Button
            sx={{ ml: 'auto', fontWeight: 600, color: "yellow", background: "black", top: 100 }}
            size="small"
            color="primary"
            variant="text"
          >
            Mas info
          </Button>
        </Link>
      </Box>

    </Paper>
  )

}

export default ProjectCard;