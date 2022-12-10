import { FC } from "react";

import {
  Box,
  Typography,
  Paper,
  CardMedia,
} from "@mui/material";

import Button from "@mui/material/Button"
import { Link } from "react-router-dom";
import MoreVertIcon from '@mui/icons-material/MoreVert';



interface CardProjectProps {

  name?: string,
  Description?: string,
  participants?: number
  requirements?: string[],
  students?: number,
  company?: string,
  state?:boolean
}


const ProjectCard: FC<CardProjectProps> = ({
  name,
  Description,
  participants,
  requirements,
  students,
  company,
  state
}: CardProjectProps) => {


  return (
    <Paper elevation={10} style={{ width: 400, height: "100%", padding: 20, margin: "50px auto" }}>

      <Typography sx={{ mb: 0.5 }}>
        <h2> {name} </h2>    </Typography>


      <Typography sx={{ mb: 0.5 }}>
        <h2> {Description} </h2>    </Typography>
      {/* <CardMedia
          component="img"
          height="140"
          image={imagen}
          alt="green iguana"
        /> */}

      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography variant="subtitle2"> Requerimientos: {requirements} </Typography>
          <Typography variant="subtitle2"> Participantes del proyecto: {participants}</Typography>
          <Typography variant="subtitle2">Estado:  </Typography>

        </div>
        <Link to="/projectDetail">
          <Button
            sx={{ ml: 'auto', fontWeight: 600, color: "yellow", background: "black", mt: 2 }}
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