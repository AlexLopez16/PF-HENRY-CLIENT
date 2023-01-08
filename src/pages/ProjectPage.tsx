import { useDispatch, useSelector } from 'react-redux';

import { State } from '../reducers/rootReducer';

import ProjectDetail from '../components/project/ProjectDetail';
import NavBar from '../components/NavBar/NavBar';
import { useParams } from 'react-router-dom';
import { getProjectByID } from '../actions/projects';

export const ProjectPage = () => {
    const { projectId } = useSelector((state: State) => state.project);
    const { state, students, ...data } = projectId;
    const params = useParams();
    const { id }: string | any = params;
    const dispatch = useDispatch();
    console.log(data?.name);
    // si no hay data, solicitamos la info del proyecto en especifico.
    if (!data?.name) {
        let token = localStorage.getItem('token') || '';
        dispatch(getProjectByID(token, id));
        console.log('no hay data');
    }

    return (
        <>
            <ProjectDetail
                name={data.name}
                empresa={data.company?.name}
                imagenes={data?.images}
                detalle={data.description}
                cantidadDeEstudiantes={data.participants}
                lenguajes={data.requirements}
                estado={data.stateOfProject}
                categoria={data.category}
                uid={data.uid}
            />
        </>
    );
};
