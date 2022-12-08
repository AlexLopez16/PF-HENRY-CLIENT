import React, { FC } from "react";

import {
  Typography,
  Paper,
  List,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { RadioGroupRating } from "../Rating/Rating";
import { Box } from "@mui/system";





interface ProjectProps {
  name: String;
  empresa: String;
  imagen: String;
  detalle: String;
  cantidadDeEstudiantes:String;
  lenguajes: String;
  estado: String;
  email: String;
}

const ProjectDetail: FC<ProjectProps> = ({name,
    empresa,
    imagen,
    detalle,
    cantidadDeEstudiantes,
    lenguajes,
    estado,
    email}:ProjectProps) => {
  
   let activo = null
  estado === "reclutando"?activo=false:activo=true

  // const [open, setOpen] = React.useState(true);

  // const handleClick = () => {
  //   setOpen(!open);
  // };

  return (
    <div>
      <Paper
        elevation={12}
        style={{
          width: 1200,
          height: 1200,
          padding: 20,
          margin: "100px 70px 100px 150px",
          display: "inline-block",
        }}
      >
        <List>
          <Typography variant="body1">proyecto:{name}</Typography>
        </List>

        <List>
          <Typography variant="body1">empresa:{empresa}</Typography>
        </List>
      
          <Box>

        {imagen}
          </Box>
         

        <List>
          <Typography variant="body1">
            Detalle del proyecto :{detalle}
          </Typography>
        </List>
        <List>
              <Typography variant="body1">cantidadDeEstudiantes:{cantidadDeEstudiantes}</Typography>
            </List>

        <List>
          <List component="div" disablePadding>
           
            <List>
              <Typography variant="body1">
                Lenguajes:{lenguajes}
              </Typography>
            </List>
            <List>
              <Typography variant="body1">Estado:{estado}</Typography>
            </List>
            <List>
              <Typography variant="body1">E-mail:{email}</Typography>
            </List>
          </List>
        </List>

        <Button
          sx={{ marginTop: 10 }}
          type="submit"
          variant="contained"
          fullWidth
          color="primary" 
          disabled={activo}
        >
         aplicar
        </Button>

        <Link to ="/dashboardStudens">
        <Button
          sx={{ marginTop: 10 }}
          type="submit"
          variant="contained"
          fullWidth
          color="primary" 
          >
         otros proyectos
        </Button>
            </Link>
  
          <Box >

            <RadioGroupRating />
            
           
          </Box>
         
     
      </Paper>
    </div>
  );
};

export default ProjectDetail;
