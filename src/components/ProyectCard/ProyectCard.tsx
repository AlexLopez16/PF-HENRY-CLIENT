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

      <Typography variant="h6" sx={{ mb: 0.5, fontSize: "md" }}>
        Proyecto grupal de java Script
      </Typography>

      <CardMedia
          component="img"
          height="140"
          image="https://thumbs.dreamstime.com/z/c%C3%B3digo-fuente-de-escritorio-y-papel-pintado-por-lenguaje-programaci%C3%B3n-con-codi-124706065.jpg"
          alt="green iguana"
        />

      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography variant="body2">Description: aaaaaaaaaaaaaaa
          aaaaaa
          aaaaaaaaaaaaaaaaaaaa </Typography>
          <Typography variant="body2">Empleados: 1</Typography>

        </div>

        <Button
          sx={{ ml: 'auto', fontWeight: 600 ,color:"yellow",background:"black",mt:2}}
          size="small"
          color="primary"
          variant="text"
        >
          Aplica
        </Button>
      </Box>

    </Paper>
  )

}

export default ProjectCard;