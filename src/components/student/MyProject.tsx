/**
 * By Sciangula Hugo.
 * NOTA: aca el estudiante va a poder ver todos los detalles con respecto a los proyectos.
 */

import { Box, Container, Typography } from '@mui/material';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../reducers/rootReducer';
import { getStudentInfo } from '../../actions/student';

const MyProject: FC = () => {
    const dispatch = useDispatch();
    // Traemos el id del estado.
    const { auth, student } = useSelector((state: State) => state);
    // Traemos el token del local storage.
    const token = localStorage.getItem('token') || '';
    // Traemos toda la info del student.
    useEffect(() => {
        dispatch(getStudentInfo(auth.data.id, token));
    }, [dispatch]);
    // Definimos los objetos de informacion.
    // Aca hay que trabajar con typescript para que quede mas limpia la sintaxis.

    return (
        <Container maxWidth="lg">
            <Typography variant="h6" align="center" gutterBottom>
                Mi Proyecto. (Falta darle estilo)
            </Typography>
            <div style={{ backgroundColor: 'red' }}>
                {student.user.project &&
                    student.user.project.map((project) => (
                        <div
                            style={{
                                backgroundColor: 'green',
                                margin: '10px 0 0 0',
                            }}
                        >
                            <h2>{project.name}</h2>
                            <p>{project.description.slice(0, 100)}...</p>
                            <p>Participantes: {project.participants}</p>
                            <p>Estado: {project.stateOfProject}</p>
                        </div>
                    ))}
            </div>
        </Container>
    );
};

export default MyProject;
