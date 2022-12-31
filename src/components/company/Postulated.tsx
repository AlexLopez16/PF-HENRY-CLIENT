import { Typography } from '@mui/material';
import { Box, 
    // Container
 } from '@mui/system';
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

    useEffect(() => {
        dispatch(getProjectByID(token, id));
    }, [dispatch]);

    const [render, setRender] = useState(false);

    let { projectId } = useSelector((state: State) => state.project);
    // console.log('postulated', projectId);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
            }}
        >
            <div>
                <Typography
                    variant="h5"
                    sx={{
                        marginTop: 5,
                        alignSelf: 'center',
                        ml: 10,
                        fontWeight: 600,
                    }}
                >
                    Postulados
                </Typography>
                {projectId.students.length ? (
                    projectId.students.map((p: any) => (
                        <StudentCard
                            name={p.name}
                            email={p.email}
                            descripcion={p.description}
                            tecnologies={p.tecnologies}
                            image={p.image}
                            idstd={p._id}
                            working={p.working}
                            setRender={setRender}
                            render={render}
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
                        ml: 20,
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
                    {projectId.accepts.length ? (
                        projectId.accepts.map((p: any) => (
                            <StudentCard
                                name={p.name}
                                email={p.email}
                                descripcion={p.description}
                                tecnologies={p.tecnologies}
                                image={p.image}
                                idstd={p._id}
                                working={p.working}
                                setRender={setRender}
                                render={render}
                            />
                        ))
                    ) : (
                        <Box sx={{ mt: 30 }}>
                            <Typography
                                variant="h6"
                                sx={{ marginTop: 5, alignSelf: 'center' }}
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
