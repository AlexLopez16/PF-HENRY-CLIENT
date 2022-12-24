import React from 'react'
import ProjectDetail from '../components/project/ProjectDetail'
import SearchBar from '../components/ui/SearchBar'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../reducers/rootReducer';
import { getProjectByID } from '../actions/projects';

export const ProjectPage = () => {

    const dispatch = useDispatch()
    const { projectId } = useSelector((state: State) => state.project)
    const {state, students, ...data} = projectId;
    const token = localStorage.getItem('token')
    
    // useEffect(() => {
    //     dispatch(getProjectByID())
    // })

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
