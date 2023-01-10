import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

import {
    Typography,
    Paper,
    List,
    Button,
    ImageList,
    ImageListItem,
    Box,
    Container,
    FormControl,
    Grid,
} from '@mui/material';

import { State } from '../../reducers/rootReducer';
import { addStudentToProject } from '../../actions/student';
import { PreLoader } from '../PreLoader/PreLoader';
import { SnackBar } from '../SnackBar/SnackBar';
import { proyectFinal } from '../../actions/company';
import { getProjectByID } from '../../actions/projects';
import { RatingMail } from './RatingMail';
import { RatingProject } from './RatingProject';
import Footer from '../../pages/LandingPage/Footer';
import bgComponents from '../../assets/bgComponents.png';

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

    const GoBack = () => {
        navigate('/projects');
    };

    const handlerApply = () => {
        {
            projectId.questions.length
                ? navigate(`/postulatedForm/${uid}`)
                : dispatch(addStudentToProject(uid, token));
        }
    };

    const { id: idProject }: string | any = useParams();

    useEffect(() => {
        dispatch(getProjectByID(token, idProject));
    }, [dispatch]);

    const handelClick = () => {
        dispatch(proyectFinal(uid));
        dispatch(getProjectByID(token, uid));
    };

    let review = projectId.reviews;
    console.log(review);

    return (
        <>
            <Box
                sx={{
                    backgroundImage: `url(${bgComponents})`,
                    p: 20,
                    pt: 10,
                }}
            >
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <FormControl>
                        <Button
                            onClick={GoBack}
                            size="small"
                            variant="contained"
                            color="secondary"
                            sx={{
                                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                                fontFamily: 'montserrat',
                                fontWeight: 'bold',
                                mb: 10,
                            }}
                        >
                            Regresar
                        </Button>
                    </FormControl>
                </Grid>
                <div>
                    <PreLoader />
                    {rol === 'STUDENT_ROL' ? (
                        <SnackBar
                            successMsg="Aplicaste correctamente."
                            errorMsg="Error al aplicar."
                        />
                    ) : null}
                    <Container
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Paper
                            elevation={12}
                            style={{
                                height: 'fit-content',
                                padding: 50,
                                display: 'flex',
                                flexDirection: 'column',
                                backgroundColor: 'black',
                                borderRadius: 30,
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
                                        <Typography
                                            variant="h4"
                                            sx={{
                                                fontFamily: 'montserrat',
                                                color: 'white',
                                            }}
                                        >
                                            {name}
                                        </Typography>
                                    </List>

                                    <Typography
                                        sx={{
                                            fontFamily: 'montserrat',
                                            fontStyle: 'italic',
                                            pb: 2,
                                            color: 'white',
                                        }}
                                    >
                                        {empresa}
                                    </Typography>
                                    {/* <Container
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  > */}
                                    <List>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontFamily: 'montserrat',
                                                color: '#ffff01',
                                            }}
                                        >
                                            <b>Descripción: </b>
                                            <b
                                                style={{
                                                    color: 'white',
                                                    fontFamily: 'montserrat',
                                                    fontStyle: 'italic',
                                                }}
                                            >
                                                {detalle}
                                            </b>
                                        </Typography>
                                    </List>

                                    <List>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontFamily: 'montserrat',
                                                color: 'white',
                                            }}
                                        >
                                            <b style={{ color: '#ffff01' }}>
                                                Requerimientos:{' '}
                                            </b>{' '}
                                            <b
                                                style={{
                                                    color: 'white',
                                                    fontFamily: 'montserrat',
                                                    fontStyle: 'italic',
                                                }}
                                            >
                                                {lenguajes
                                                    ?.map(
                                                        (lenguaje) => lenguaje
                                                    )
                                                    .join(', ')}
                                            </b>
                                        </Typography>
                                    </List>

                                    <List>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontFamily: 'montserrat',
                                                color: 'white',
                                            }}
                                        >
                                            <b style={{ color: '#ffff01' }}>
                                                Participantes:{' '}
                                            </b>{' '}
                                            <b
                                                style={{
                                                    fontFamily: 'montserrat',
                                                    color: 'white',
                                                    fontStyle: 'italic',
                                                }}
                                            >
                                                {cantidadDeEstudiantes}
                                            </b>
                                        </Typography>
                                    </List>

                                    <List>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontFamily: 'montserrat',
                                                color: 'white',
                                            }}
                                        >
                                            <b style={{ color: '#ffff01' }}>
                                                Categoría:{' '}
                                            </b>
                                            <b
                                                style={{
                                                    fontFamily: 'montserrat',
                                                    color: 'white',
                                                    fontStyle: 'italic',
                                                }}
                                            >
                                                {' '}
                                                {categoria}
                                            </b>
                                        </Typography>
                                    </List>

                                    <List>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontFamily: 'montserrat',
                                                color: 'white',
                                            }}
                                        >
                                            <b style={{ color: '#ffff01' }}>
                                                Estado del proyecto:{' '}
                                            </b>
                                            <b
                                                style={{
                                                    fontFamily: 'montserrat',
                                                    color: 'white',
                                                    fontStyle: 'italic',
                                                }}
                                            >
                                                {estado}
                                            </b>
                                        </Typography>
                                    </List>
                                    {/* </Container> */}
                                </div>
                                {imagenes && (
                                    <div>
                                        <ImageList
                                            sx={{ width: 500, height: 250 }}
                                            cols={2}
                                            rowHeight={200}
                                        >
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
                                )}
                            </div>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
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
                                ) : id &&
                                  rol === 'COMPANY_ROL' &&
                                  projectId &&
                                  projectId?.company?._id &&
                                  id === projectId.company._id &&
                                  projectId.stateOfProject === 'Reclutando' ? (
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
                            </Box>

                            {rol === 'COMPANY_ROL' &&
                            projectId.stateOfProject !== 'Terminado' ? (
                                <Button
                                    onClick={handelClick}
                                    sx={{ marginTop: 5, width: '25%' }}
                                    type="submit"
                                    variant="contained"
                                    color="warning"
                                    style={{
                                        boxShadow:
                                            'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                                        fontFamily: 'montserrat',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Finalizar proyecto
                                </Button>
                            ) : (
                                ''
                            )}
                        </Paper>
                    </Container>
                    {rol === 'COMPANY_ROL' ||
                    (rol === 'STUDENT_ROL' &&
                        projectId.stateOfProject === 'Terminado' &&
                        review.length > 0)
                        ? review?.map((e: any) => (
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
            </Box>
            <Footer />
        </>
    );
};

export default ProjectDetail;
