import { FC } from "react";

import {
    Typography,
    Paper,
    List,
    Button,
    ImageList,
    ImageListItem,
} from "@mui/material";

interface ProjectProps {
    name?: string;
    empresa?: string;
    imagenes?: string[];
    detalle?: string;
    cantidadDeEstudiantes?: string;
    lenguajes?: string[];
    estado?: string;
    categoria?: string
}

const ProjectDetail: FC<ProjectProps> = ({ name, empresa, imagenes, detalle, cantidadDeEstudiantes, lenguajes, estado, categoria }: ProjectProps) => {
    return (
        <div>
            <Paper
                elevation={12}
                style={{
                    width: 1000,
                    height: 'fit-content',
                    padding: 20,
                    margin: "100px auto",
                }}
            >

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div>
                        <List>
                            <Typography variant="h4">
                                {name}
                            </Typography>
                        </List>

                        <Typography>
                            {empresa}
                        </Typography>

                        <List>
                            <Typography variant="body1">
                                <b>Descripcion: </b>
                                {detalle}
                            </Typography>
                        </List>

                        <List>
                            <Typography variant="body1">
                                <b>Requerimientos: </b> {lenguajes?.map(lenguaje => lenguaje).join(', ')}
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
                    </div>
                    {
                        imagenes && (
                            <div>
                                <ImageList sx={{ width: 500, height: 280 }} cols={2} rowHeight={200}>
                                    {imagenes.map((item) => (
                                        <ImageListItem key={item}>
                                            <img
                                                src={`${item}?w=164&h=164&fit=crop&auto=format`}
                                                srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item}
                                                loading="lazy"
                                            />
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                            </div>
                        )
                    }
                </div>

                <Button
                    sx={{ marginTop: 5 }}
                    type="submit"
                    variant="contained"
                    fullWidth
                    color="primary"
                >
                    Aplicar
                </Button>
            </Paper>
        </div>
    );
};

export default ProjectDetail;
