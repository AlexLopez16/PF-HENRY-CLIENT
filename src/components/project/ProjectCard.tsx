import { FC } from 'react';
import { Box, Typography, Paper, Chip } from '@mui/material';
import clip from 'text-clipper';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProjectByID } from '../../actions/projects';
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
                                        background: tecnologies.indexOf(requirement) === -1
                                            ? ''
                                            : '#FFFF01'
                                    }}
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
                            background: stateOfProj.indexOf(stateOfProject) === -1
                                ? ''
                                : '#FFFF01'
                        }}
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
