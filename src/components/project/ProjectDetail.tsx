import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

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
import { SnackBar } from '../SnackBar/SnackBar';
import { proyectFinal } from '../../actions/company';
import { getProjectByID } from '../../actions/projects';
import { RatingMail } from './RatingMail';
import { RatingProject } from './RatingProject';

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
    stateOfProject?: string[];
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
    let rol = useSelector((state: State | any) => state.auth.data.rol);
    let id = useSelector((state: State | any) => state.auth.data.id);
    const { projectId } = useSelector((state: State) => state.project);
    const { user }: any = useSelector((state: State) => state.student);

    const navigate = useNavigate();

    const handlerApply = () => {
        {
            console.log('aca');
            projectId.questions.length
                ? navigate(`/postulatedForm/${uid}`)
                : dispatch(addStudentToProject(uid, token));
        }
    };

    const handelClick = () => {
        dispatch(proyectFinal(uid));
        dispatch(getProjectByID(token, uid));
    };

    let review = projectId.reviews;
    console.log(projectId);
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
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                    }}
                >
                    <div>
                        <List>
                            <Typography variant="h4">{name}</Typography>
                        </List>

                        <Typography>{empresa}</Typography>

                        <List>
                            <Typography variant="body1">
                                <b>Descripcionn: </b>
                                {detalle}
                            </Typography>
                        </List>

                        <List>
                            <Typography variant="body1">
                                <b>Requerimientos: </b>{' '}
                                {lenguajes
                                    ?.map((lenguaje) => lenguaje)
                                    .join(', ')}
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
                    {imagenes && (
                        <div>
                            <ImageList
                                sx={{ width: 500, height: 280 }}
                                cols={2}
                                rowHeight={200}
                            >
                                {imagenes.map((item) => (
                                    <ImageListItem key={item}>
                                        <img src={item} alt={item} />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </div>
                    )}
                </div>

                {rol === 'STUDENT_ROL' &&
                projectId.stateOfProject !== 'Terminado' ? (
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
                ) : (id &&
                      projectId &&
                      projectId?.company?._id &&
                      id === projectId.company._id &&
                      projectId.stateOfProject === 'Terminado') ||
                  'En reclutamiento' ? (
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

                {rol === 'COMPANY_ROL' &&
                projectId.stateOfProject !== 'Terminado' ? (
                    <Button
                        onClick={handelClick}
                        sx={{ marginTop: 10 }}
                        type="submit"
                        variant="contained"
                        fullWidth
                        color="primary"
                    >
                        terminar proyecto
                    </Button>
                ) : (
                    ''
                )}
            </Paper>
            {rol === 'COMPANY_ROL' &&
            projectId.stateOfProject === 'Terminado' &&
            review.length > 0
                ? review.map((e: any) => (
                      <RatingProject
                          avatar={e.student?.image}
                          name={e.student?.name}
                          lastName={e.student?.lastName}
                          description={e.description}
                          ratingCompany={e.ratingCompany}
                          ratingProject={e.ratingProject}
                          projectName={e.project?.name}
                      />
                  ))
                : ''}
        </div>
    );
};

export default ProjectDetail;
