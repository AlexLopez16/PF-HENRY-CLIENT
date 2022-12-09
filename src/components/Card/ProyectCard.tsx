import { FC } from "react";

import {
  Box,
  Typography,
  Paper,
  CardMedia,
} from "@mui/material";

import Button from "@mui/material/Button"
import { Link } from "react-router-dom";


interface CardProjectProps{

name:string,
empresa:String,
imagen:String,
lenguajes:String,
cantidadDeEstudiantes:String,
estado:String
detalle:String
email:String
}


const ProjectCard: FC<CardProjectProps> = ({name,
  empresa,
  imagen,
  cantidadDeEstudiantes,
  lenguajes,
  estado,
  email
 }:CardProjectProps) => {


  return (
    <Paper elevation={10} style={{ width: 400, height: "100%", padding: 20, margin: "50px auto" }}>

      <Typography  sx={{ mb: 0.5}}>
        <h2> {name} </h2>    </Typography>
    
  
      <Typography  sx={{ mb: 0.5}}>
        <h2> {empresa} </h2>    </Typography>
      {/* <CardMedia
          component="img"
          height="140"
          image={imagen}
          alt="green iguana"
        /> */}

      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography variant="body2"> Requerimientos: {lenguajes} </Typography>
          <Typography variant= "h4"> Participantes del proyecto: {cantidadDeEstudiantes}</Typography>
          <Typography variant="body2">Estado: {estado} </Typography>

        </div>
        <Link to= "/projectDetail">
        <Button
          sx={{ ml: 'auto', fontWeight: 600 ,color:"yellow",background:"black",mt:2}}
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