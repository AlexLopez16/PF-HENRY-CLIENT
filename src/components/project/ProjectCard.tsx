import { FC, useState, useEffect } from 'react';
import { Box, Typography, Paper, Chip } from '@mui/material';
import clip from 'text-clipper';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProjectByID, Filters, getProjectsFilter } from '../../actions/projects';
import BusinessIcon from '@mui/icons-material/Business';
import { State } from '../../reducers/rootReducer';

type CompanyData = {
    _id: string;
    name: string;
};

interface CardProjectProps {
    name?: string;
    description?: string | any;
    participants?: number;
    requirements?: any;
    students: string[] | undefined;
    company?: CompanyData | any;
    state?: boolean;
    stateOfProject?: string;
    id: string;
    category?: string;
    image?: string[];
}

const ProjectCard: FC<CardProjectProps> = ({
    name,
    description,
    participants, //lo que se necesitan para el proyecto
    requirements,
    students, //los aceptados por la empresa para el project
    company,
    stateOfProject,
    id,
    category,
}: CardProjectProps) => {

    const dispatch = useDispatch();
    const token = localStorage.getItem('token') || '';
    const clippedDescription = clip(description, 100);

    const { filters } = useSelector((state: State) => state.project);
    const tecnologies = filters?.tecnologies || []
    const stateOfProj = filters?.stateOfProject || []
    
    const handleClick = () => {
        dispatch(getProjectByID(token, id));
    };

    // FILTERS ON CARD
    const [filter, setFilter] = useState<string[]>([])
    const [filterState, setFilterState] = useState<string[]>([])

    useEffect(() => {
        dispatch(getProjectsFilter('', filter, token, '', [], filterState))
        dispatch(Filters('', filter, '', [], filterState))
    }, [filter, filterState])


    const handleFilter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const { innerText: requirement } = e.target as HTMLElement;

        if (!filter.includes(requirement)) {
            setFilter([
                ...filter,
                requirement
            ])
        }else{
            const remove = filter.filter(req => req !== requirement)
            setFilter(remove)
        }
    }

    const handlerState = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const { innerText: state } = e.target as HTMLElement;

        if(!filterState.includes(state)){
            setFilterState([
                ...filterState,
                state
            ])
        }else{
            const remove = filterState.filter(st => st !== state)
            setFilterState(remove)
        }

    }

    return (
        <Paper
            elevation={10}
            style={{
                padding: '20px',
                marginTop: '20px',
            }}
        >
            <Typography variant="subtitle2" sx={{ color: '#898989' }}>
                {' '}
                {category?.toUpperCase()}
            </Typography>

            <Typography
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
                variant="h6"
            >
                {name?.toUpperCase()}
                <NavLink
                    to="/project"
                    style={{ textDecoration: 'none', marginTop: 'auto' }}
                >
                    <Button
                        variant="contained"
                        type="submit"
                        size="small"
                        color="primary"
                        onClick={handleClick}
                    >
                        Mas info
                    </Button>
                </NavLink>
            </Typography>

            <Typography sx={{ m: 0.5 }}>{clippedDescription}</Typography>

            <Box sx={{ display: 'block', marginBottom: '10px' }}>
                <Typography variant="subtitle1" sx={{ color: '#898989' }}>
                    Requerimientos:
                    {requirements.map(
                        (requirement: string | any, index: number | any) => (
                            <div key={index}>
                                {' '}
                                <Chip                             
                                    size="small"
                                    label={requirement}
                                    sx={{
                                        cursor: 'pointer',
                                        '&:hover': {
                                            background: '#FFFF01'
                                        },
                                        background: tecnologies.indexOf(requirement) === -1
                                            ? ''
                                            : '#FFFF01'
                                    }}
                                    onClick={handleFilter}
                                />
                            </div>
                        )
                    )}
                </Typography>

                <Typography
                    variant="subtitle1"
                    sx={{
                        color: '#898989',
                    }}
                >
                    Estado:{' '}
                    <Chip
                        size="small"
                        label={stateOfProject}
                        sx={{
                            cursor: 'pointer',
                            '&:hover': {
                                background: '#FFFF01'
                            },
                            background: stateOfProj.indexOf(stateOfProject) === -1
                                ? ''
                                : '#FFFF01'
                        }}
                        onClick={handlerState}
                    />
                </Typography>

                <Typography variant="subtitle1" sx={{ color: '#898989' }}>
                    {' '}
                    Participantes:{' '}
                    <Chip
                        label={`${students?.length}/${participants}`}
                        size="small"
                    />
                </Typography>
            </Box>
            <Paper
                elevation={5}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: 'max-content',
                    padding: '2px 4px',
                }}
            >
                <BusinessIcon fontSize="small" />
                <Typography
                    variant="subtitle2"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        margin: '0 5px',
                    }}
                >
                    {company?.toUpperCase()}
                </Typography>
            </Paper>
        </Paper>
    );
};

export default ProjectCard;
