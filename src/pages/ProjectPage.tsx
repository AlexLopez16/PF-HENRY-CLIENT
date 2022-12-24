import React from 'react'
import ProjectDetail from '../components/project/ProjectDetail'
import SearchBar from '../components/ui/SearchBar'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../reducers/rootReducer';

export const ProjectPage = () => {

    const { projectId } = useSelector((state: State) => state.project)

    const {state, students, ...data} = projectId;

    const company = data.company?.name || 'Empresa';

    return (
        <>
            <SearchBar />
            <ProjectDetail
                name={data.name}
                empresa={company}
                // imagen={ejemplo.imagen}
                detalle={data.description}
                cantidadDeEstudiantes={data.participants}
                lenguajes={data.requirements}
                estado={data.stateOfProject}
                categoria={data.category}
                uid={data.uid}
            />
        </>
    )
}
