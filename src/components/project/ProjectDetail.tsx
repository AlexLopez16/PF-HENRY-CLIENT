import { FC } from "react";

import {
    Typography,
    Paper,
    List,
    Button,
} from "@mui/material";
import { Link,} from "react-router-dom";

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
    uid: string
}

const ProjectDetail: FC<ProjectProps> = ({ name, empresa, imagen, detalle, cantidadDeEstudiantes, lenguajes = ['Java'], estado, categoria, uid }: ProjectProps) => {

    const dispatch = useDispatch()
    let token = localStorage.getItem("token") || "";
    let rol = useSelector((state: State) => state.auth.data.rol);
    const { user } = useSelector((state: State) => state.student);


    const handlerApply = () => {
        dispatch(addStudentToProject(uid, token))
        console.log("aplicado");
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

                {rol === "TUDENT_ROL" ?
                    <Button
                        sx={{ marginTop: 10 }}
                        type="submit"
                        variant="contained"
                        fullWidth
                        color="primary"
                        onClick={handlerApply}
                        disabled={user.project?.length === 3}
                    >
                        aplicar
                    </Button>
                    :
                    <Link to={`/postulated/${uid}`}>

                        <Button
                            sx={{ marginTop: 10 }}
                            type="submit"
                            variant="contained"
                            fullWidth
                            color="primary"
                        >
                            Postulados
                        </Button>
                    </Link>
                }
            </Paper>
        </div>
    );
};

export default ProjectDetail;
