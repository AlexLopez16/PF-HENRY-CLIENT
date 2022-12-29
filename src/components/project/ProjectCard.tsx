import { FC } from 'react';

import { Box, Typography, Paper, CardMedia, Chip } from '@mui/material';
import clip from 'text-clipper';

import Button from '@mui/material/Button';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getProjectByID } from '../../actions/projects';
import { Container } from '@mui/system';

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
    image,
}: CardProjectProps) => {
    const dispatch = useDispatch();
    const token = localStorage.getItem('token') || '';
    const rol = localStorage.getItem('rol');
    const clippedDescription = clip(description, 100);

    const handleClick = () => {
        dispatch(getProjectByID(token, id));
    };

    return rol === 'STUDENT_ROL' ? (
        <Paper
            elevation={10}
            style={{
                width: '100vh',
                height: 'fit-content',
                padding: 20,
                marginLeft: 50,
                marginRight: 30,
                marginTop: 50,
                alignSelf: 'center',
            }}
        >
            <Typography
                sx={{
                    ml: 0.5,
                    color: '#898989',
                    justifyContent: 'space-between',
                }}
            >
                {category}
            </Typography>
            <Typography
                sx={{
                    m: 0.5,
                    fontWeight: 600,
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
                variant="h5"
            >
                {name}
                <NavLink
                    to="/project"
                    style={{ textDecoration: 'none', marginTop: 'auto' }}
                >
                    <Button
                        sx={{
                            ml: 'auto',
                            fontWeight: 600,
                            color: 'yellow',
                            background: 'black',
                            width: '100px',
                        }}
                        size="small"
                        color="primary"
                        variant="text"
                        onClick={handleClick}
                    >
                        Mas info
                    </Button>
                </NavLink>
            </Typography>

            <Typography sx={{ m: 0.5 }} variant="h6">
                {company}
            </Typography>

            <Typography sx={{ m: 0.5 }}>{clippedDescription}</Typography>

            <Box>
                <div>
                    <Typography
                        variant="subtitle1"
                        sx={{ m: 0.5, color: '#898989' }}
                    >
                        {' '}
                        Requerimientos:
                    </Typography>
                    {requirements.map((p: any) => (
                        <Chip label={p} sx={{ mb: 1, mr: 0.5 }} />
                    ))}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between 2',
                        }}
                    >
                        <Typography
                            variant="subtitle1"
                            sx={{
                                mt: 0.8,
                                color: '#898989',
                            }}
                        >
                            Estado:{' '}
                        </Typography>
                        <Typography variant="subtitle2" sx={{ m: 0.5 }}>
                            {' '}
                            <Chip label={stateOfProject} sx={{ mr: 0.5 }} />
                        </Typography>
                    </Box>
                    <Typography
                        variant="subtitle1"
                        sx={{ mb: 0.5, color: '#898989' }}
                    >
                        {' '}
                        Participantes:{' '}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ m: 0.5 }}>
                        {' '}
                        <Chip
                            label={`${students?.length}/${participants}`}
                            sx={{ mr: 0.5 }}
                        />
                        {/* {students?.length}/{participants}{' '} */}
                    </Typography>
                </div>
            </Box>
        </Paper>
    ) : (
        <Paper
            elevation={10}
            style={{
                width: '100vh',
                height: 'fit-content',
                padding: 20,
                marginLeft: 50,
                marginRight: 30,
                marginTop: 50,
                alignSelf: 'center',
            }}
        >
            <Typography
                sx={{
                    ml: 0.5,
                    color: '#898989',
                    justifyContent: 'space-between',
                }}
            >
                {category}
            </Typography>
            <Typography
                sx={{
                    m: 0.5,
                    fontWeight: 600,
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
                variant="h5"
            >
                {name}
                <NavLink
                    to="/project"
                    style={{ textDecoration: 'none', marginTop: 'auto' }}
                >
                    <Button
                        sx={{
                            ml: 'auto',
                            fontWeight: 600,
                            color: 'yellow',
                            background: 'black',
                            width: '100px',
                        }}
                        size="small"
                        color="primary"
                        variant="text"
                        onClick={handleClick}
                    >
                        Mas info
                    </Button>
                </NavLink>
            </Typography>

            <Typography sx={{ m: 0.5 }} variant="h6">
                {company}
            </Typography>

            <Typography sx={{ m: 0.5 }}>{clippedDescription}</Typography>

            <Box>
                <div>
                    <Typography
                        variant="subtitle1"
                        sx={{ m: 0.5, color: '#898989' }}
                    >
                        {' '}
                        Requerimientos:
                    </Typography>
                    {requirements.map((p: any) => (
                        <Chip label={p} sx={{ mb: 1, mr: 0.5 }} />
                    ))}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between 2',
                        }}
                    >
                        <Typography
                            variant="subtitle1"
                            sx={{
                                mt: 0.8,
                                color: '#898989',
                            }}
                        >
                            Estado:{' '}
                        </Typography>
                        <Typography variant="subtitle2" sx={{ m: 0.5 }}>
                            {' '}
                            <Chip label={stateOfProject} sx={{ mr: 0.5 }} />
                        </Typography>
                    </Box>
                    <Typography
                        variant="subtitle1"
                        sx={{ mb: 0.5, color: '#898989' }}
                    >
                        {' '}
                        Participantes:{' '}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ m: 0.5 }}>
                        {' '}
                        <Chip
                            label={`${students?.length}/${participants}`}
                            sx={{ mr: 0.5 }}
                        />
                        {/* {students?.length}/{participants}{' '} */}
                    </Typography>
                </div>
            </Box>
        </Paper>
    );
};

export default ProjectCard;
