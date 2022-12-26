import { useSelector } from 'react-redux';

import { State } from '../reducers/rootReducer';

import ProjectDetail from '../components/project/ProjectDetail'
import SearchBar from '../components/ui/SearchBar'

export const ProjectPage = () => {

    const { projectId } = useSelector((state: State) => state.project)
    const {state, students, ...data} = projectId;

    return (
        <>
            <SearchBar />
            <ProjectDetail
                name={data.name}
                empresa={data.company?.name}
                imagenes={data?.images}
                detalle={data.description}
                cantidadDeEstudiantes={data.participants}
                lenguajes={data.requirements}
                estado={data.stateOfProject}
                categoria={data.category}
            />
        </>
    )
}
