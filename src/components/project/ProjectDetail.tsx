import { FC } from 'react';

import {
    Typography,
    Paper,
    List,
    Button,
    // ImageList,
    // ImageListItem,
} from '@mui/material';
import { Link } from 'react-router-dom';

// import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../reducers/rootReducer';
import { addStudentToProject } from '../../actions/student';
import { PreLoader } from '../PreLoader/PreLoader';
import { SnackBar } from '../SnackBar/SnackBar';

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
    detalle,
    cantidadDeEstudiantes,
    lenguajes = ['Java'],
    estado,
    categoria,
    uid,
}: ProjectProps) => {
    const dispatch = useDispatch();
    let token = localStorage.getItem('token') || '';
    let rol = useSelector((state: State) => state.auth.data.rol);
    let id = useSelector((state: State) => state.auth.data.id);
    const { projectId } = useSelector((state: State) => state.project);
    const { user }: any = useSelector((state: State) => state.student);

    const handlerApply = () => {
        dispatch(addStudentToProject(uid, token));
        //revisar este console.log
        // console.log('aplicado');
    };

    return (
        <div>
            <PreLoader />
            {rol === 'STUDENT_ROL' ? (
                <SnackBar
                    successMsg="Aplicaste correctamente."
                    errorMsg="Error al aplicar."
                />
            ) : null}
            <Paper
                elevation={12}
                style={{
                    width: 1000,
                    height: 'fit-content',
                    padding: 20,
                    margin: '100px auto',
                }}
            >
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

                {rol === 'STUDENT_ROL' ? (
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
                ) : id &&
                  projectId &&
                  projectId?.company?._id &&
                  id === projectId.company._id ? (
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
                ) : null}
            </Paper>
        </div>
    );
};

export default ProjectDetail;
