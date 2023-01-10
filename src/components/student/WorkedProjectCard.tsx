import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Chip,
    Paper,
    Typography,
} from '@mui/material';
import { FC } from 'react';
import BusinessIcon from '@mui/icons-material/Business';
import { useDispatch } from 'react-redux';
import { unApplyStudent } from '../../actions/student';
import { NavLink } from 'react-router-dom';

// Definimos la estructura de las props.
interface WorkedProjectCardProps {
    userId: string;
    projectId: string;
    category: string;
    projectName: string;
    companyName: string;
    companyId: string;
    description: string;
    requirements: string[];
    stateOfProject: string;
    participants: number;
    accepts: [];
}
//
export const WorkedProjectCard: FC<WorkedProjectCardProps> = ({
    userId,
    projectId,
    category,
    projectName,
    companyName,
    companyId,
    description,
    requirements,
    stateOfProject,
    participants,
    accepts,
}) => {
    const dispatch = useDispatch();
    const handleClick = async (projectId: string | any) => {
        dispatch(
            unApplyStudent(userId, projectId, localStorage.getItem('token'))
        );
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
                {category.toUpperCase()}
            </Typography>

            <Typography
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
                variant="h6"
            >
                {projectName.toUpperCase()}
                {stateOfProject != 'Terminado' ? (
                    <Button
                        variant="contained"
                        type="submit"
                        size="small"
                        color="primary"
                        onClick={() => handleClick(projectId)}
                    >
                        Cancelar
                    </Button>
                ) : (
                    <NavLink
                        to={`/projects/${projectId}`}
                        style={{
                            textDecoration: 'none',
                            marginTop: 'auto',
                            fontFamily: 'poppins',
                        }}
                        // target="_blanck"
                    >
                        <Button
                            variant="contained"
                            type="submit"
                            size="small"
                            color="primary"
                        >
                            Ver
                        </Button>
                    </NavLink>
                )}
            </Typography>
            <Box
                sx={{
                    display: 'block',
                    marginBottom: '10px',
                }}
            >
                <Typography
                    variant="subtitle1"
                    sx={{
                        color: '#898989',
                    }}
                >
                    {description.slice(0, 500)} ...
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#898989' }}>
                    Tecnologias:{' '}
                    {requirements &&
                        requirements.map(
                            (tecnology: string | any, index: number | any) => (
                                <>
                                    {' '}
                                    <Chip
                                        key={index}
                                        label={tecnology}
                                        color="primary"
                                        size="small"
                                    />
                                </>
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
                    <Chip size="small" label={stateOfProject} color="primary" />
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        // marginBottom: '10px',
                    }}
                >
                    <Typography variant="subtitle1" sx={{ color: '#898989' }}>
                        {'Equipo:'}{' '}
                    </Typography>

                    <AvatarGroup max={participants}>
                        {accepts &&
                            accepts.map((person: object | any) => {
                                return (
                                    <Avatar
                                        alt={person.name}
                                        src={
                                            person.image !== undefined
                                                ? person.image
                                                : person.name
                                        }
                                        sx={{
                                            width: 30,
                                            height: 30,
                                        }}
                                    />
                                );
                            })}
                    </AvatarGroup>
                </Box>
            </Box>
            <Paper
                elevation={5}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    // border: '1px solid',
                    width: 'max-content',
                    padding: '2px 4px',
                    // borderRadius: '4px',
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
                    {companyName.toUpperCase()}
                </Typography>
            </Paper>
        </Paper>
    );
};
