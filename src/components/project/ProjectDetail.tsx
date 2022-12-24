import React, { FC } from "react";

import {
    Typography,
    Paper,
    List,
    Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { RadioGroupRating } from "./Rating";
import { Box } from "@mui/system";

interface ProjectProps {
    name?: string;
    empresa?: string;
    imagen?: string;
    detalle?: string;
    cantidadDeEstudiantes?: string;
    lenguajes?: string[];
    estado?: string;
    email?: string;
    categoria?: string
}

const ProjectDetail: FC<ProjectProps> = ({ name, empresa, imagen, detalle, cantidadDeEstudiantes, lenguajes = ['Java'], estado, email, categoria }: ProjectProps) => {

    let activo = null
    estado === "reclutando" ? activo = false : activo = true

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
                    height: 'fit-content',
                    padding: 20,
                    margin: "100px 70px 100px 150px",
                    display: "inline-block",
                }}
            >
                <List>
                    <Typography variant="h4">
                        {name}
                    </Typography>
                </List>

                <List>
                    <Typography variant="h5">
                        {empresa}
                    </Typography>
                </List>

                <Box>
                    {imagen}
                </Box>


                <List>
                    <Typography variant="body1">
                        <b>Descripcion: </b>
                        {detalle}
                    </Typography>
                </List>

                <List>
                    <Typography variant="body1">
                        <b>Requerimientos: </b> {lenguajes.join(', ')}
                    </Typography>
                </List>

                <List>
                    <Typography variant="body1">
                        <b>Participantes: </b> {cantidadDeEstudiantes}
                    </Typography>
                </List>

                <List>
                    <Typography variant="body1">
                        <b>Categoria: </b> {categoria}
                    </Typography>
                </List>

                <List>
                    <Typography variant="body1">
                        <b>Estado del proyecto: </b> {estado}
                    </Typography>
                </List>

                {/* <List>
                    <Typography variant="body1">E-mail:{email}</Typography>
                </List> */}

                <Button
                    sx={{ marginTop: 10 }}
                    type="submit"
                    variant="contained"
                    fullWidth
                    color="primary"
                    // disabled={activo}
                >
                    aplicar
                </Button>

                {/* <Link to="/dashboard">
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


                </Box> */}


            </Paper>
        </div>
    );
};

export default ProjectDetail;
