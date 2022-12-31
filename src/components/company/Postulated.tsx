import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProjectByID } from '../../actions/projects';
import { State } from '../../reducers/rootReducer';
import StudentCard from '../student/StudentCard';

const Postulated: FC = () => {
    const dispatch = useDispatch();

    let token: string = localStorage.getItem('token') || '';
    let { id }: any = useParams();
    const [render, setRender] = useState(false);
    useEffect(() => {
        dispatch(getProjectByID(token, id));
    }, [dispatch]);

    let { projectId } = useSelector((state: State) => state.project);
    console.log('postulated', projectId);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        marginTop: 5,
                        alignSelf: 'center',
                        ml: 2,
                        fontWeight: 600,
                    }}
                >
                    Postulados
                </Typography>
                {projectId && projectId.students.length ? (
                    projectId.students.map((p: any) => (
                        <StudentCard
                            name={p.name}
                            email={p.email}
                            descripcion={p.description}
                            tecnologies={p.tecnologies}
                            image={p.image}
                            idstd={p._id}
                            working={p.working}
                            isAccepted={false}
                        />
                    ))
                ) : (
                    <Box sx={{ mt: 30 }}>
                        <Typography
                            variant="h6"
                            sx={{ marginTop: 5, alignSelf: 'center' }}
                        >
                            No hay estudiantes postulados
                        </Typography>
                    </Box>
                )}
            </div>

            <div>
                <Typography
                    variant="h5"
                    sx={{
                        marginTop: 5,
                        alignSelf: 'center',
                        ml: 22,
                        fontWeight: 600,
                    }}
                >
                    Aceptados
                </Typography>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                    }}
                >
                    {projectId && projectId.accepts.length ? (
                        projectId.accepts.map((p: any) => (
                            <StudentCard
                                name={p.name}
                                email={p.email}
                                descripcion={p.description}
                                tecnologies={p.tecnologies}
                                image={p.image}
                                idstd={p._id}
                                working={p.working}
                                isAccepted={true}
                            />
                        ))
                    ) : (
                        <Box sx={{ mt: 25 }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    marginTop: 5,
                                    alignSelf: 'center',
                                    marginLeft: 6,
                                }}
                            >
                                Todavia no haz aceptado estudiantes
                            </Typography>
                        </Box>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Postulated;
