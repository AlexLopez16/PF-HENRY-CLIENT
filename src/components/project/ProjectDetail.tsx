import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    Typography,
    Paper,
    List,
    Button,
    ImageList,
    ImageListItem,
} from '@mui/material';

import { State } from '../../reducers/rootReducer';
import { addStudentToProject } from '../../actions/student';
import { PreLoader } from '../PreLoader/PreLoader';

interface ProjectProps {
    name?: string;
    empresa?: string;
    imagenes?: string[];
    detalle?: string;
    cantidadDeEstudiantes?: string;
    lenguajes?: string[];
    estado?: string;
    email?: string;
    categoria?: string;
    uid: string;
}

const ProjectDetail: FC<ProjectProps> = ({
    name,
    empresa,
    imagenes,
    detalle,
    cantidadDeEstudiantes,
    lenguajes = ['Java'],
    estado,
    categoria,
    uid,
}: ProjectProps) => {
    const dispatch = useDispatch();
    let token = localStorage.getItem('token') || '';
    const { user }: any = useSelector((state: State) => state.student);

    const handlerApply = () => {
        dispatch(addStudentToProject(uid, token));
    };

    return (
        <div>
            <PreLoader />
            <Paper
                elevation={12}
                style={{
                    width: 1000,
                    height: 'fit-content',
                    padding: 20,
                    margin: '100px auto',
                }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>

                    <div>

                        <List>
                            <Typography variant="h4">{name}</Typography>
                        </List>

                        <Typography>{empresa}</Typography>

                        <List>
                            <Typography variant="body1">
                                <b>Descripcion: </b>
                                {detalle}
                            </Typography>
                        </List>

                        <List>
                            <Typography variant="body1">
                                <b>Requerimientos: </b>{' '}
                                {lenguajes?.map((lenguaje) => lenguaje).join(', ')}
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
                                                src={item}
                                                alt={item}
                                            />
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                            </div>
                        )
                    }

                </div>

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
            </Paper>
        </div>
    );
};

export default ProjectDetail;
