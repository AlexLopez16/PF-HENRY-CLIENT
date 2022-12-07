import { FC } from "react";

import {
  Box,
  Typography,
  Paper,
  CardMedia,
} from "@mui/material";

import Button from "@mui/material/Button"




const ProjectCard: FC = () => {


  return (
    <Paper elevation={10} style={{ width: 400, height: "100%", padding: 20, margin: "50px auto" }}>

      <Typography  sx={{ mb: 0.5}}>
       <h2> E-comers </h2>
       <h6> Mercado Libre </h6>
      </Typography>
      
      <CardMedia
          component="img"
          height="140"
          image="https://thumbs.dreamstime.com/z/c%C3%B3digo-fuente-de-escritorio-y-papel-pintado-por-lenguaje-programaci%C3%B3n-con-codi-124706065.jpg"
          alt="green iguana"
        />

      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography variant="body2"> Requerimientos: java </Typography>
          <Typography variant="body2">Partisipantes: 8</Typography>
          <Typography variant="body2">Estado: Reclutamiento </Typography>

        </div>
        
        <Button
          sx={{ ml: 'auto', fontWeight: 600 ,color:"yellow",background:"black",mt:2}}
          size="small"
          color="primary"
          variant="text"
        >
        Mas info
        </Button>
      </Box>

    </Paper>
  )

}

export default ProjectCard;