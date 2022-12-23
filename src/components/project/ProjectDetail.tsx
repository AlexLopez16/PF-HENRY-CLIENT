import React, { FC } from "react";

import {
    Typography,
    Paper,
    List,
    Button,
} from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import { RadioGroupRating } from "./Rating";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../reducers/rootReducer";
import { addStudentToProject } from "../../actions/student";

interface ProjectProps {
    name?: string;
    empresa?: string;
    imagen?: string;
    detalle?: string;
    cantidadDeEstudiantes?: string;
    lenguajes?: string[];
    estado?: string;
    email?: string;
    categoria?: string,
    uid?: string
}

const ProjectDetail: FC<ProjectProps> = ({ name, empresa, imagen, detalle, cantidadDeEstudiantes, lenguajes = ['Java'], estado, email, categoria,  }: ProjectProps) => {

    const dispatch = useDispatch()

    let activo = false;//activa el boton/desactiva el boton de aplica

    //verifica si no esta asociado a mas de 3 projectos//
    const user: any = useSelector((state: State) => state.student);
    // user.user.students[0].project.length === 3
    // ? activo = false : true;
    //-----------------//




    let token: String | null = localStorage.getItem("token");

    let rol = useSelector((state: State) => state.auth.data.rol);
    // let rol="Company"


    const handlerApply = () => {
        console.log(token);

        dispatch(addStudentToProject(id, token))
        console.log("aplicado");
    }

    const handlerPostulated = () => {


    }


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

                {rol === "STUDENT_ROL" ?
                    <Button
                        sx={{ marginTop: 10 }}
                        type="submit"
                        variant="contained"
                        fullWidth
                        color="primary"
                        onClick={handlerApply}
                        disabled={activo}
                    >
                        aplicar
                    </Button>
                    :
                    <Button
                        sx={{ marginTop: 10 }}
                        type="submit"
                        variant="contained"
                        fullWidth
                        color="primary"
                        onClick={handlerPostulated}
                    // disabled={activo}
                    >
                        Postulados
                    </Button>
                }



            </Paper>
        </div>
    );
};

export default ProjectDetail;
