import { Box, Button, Chip, Paper, Typography } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { unApplyStudent } from '../../actions/student';
import { NavLink } from 'react-router-dom';

interface RequestProjectCardProps {
    userId: string;
    projectId: string;
    category: string;
    projectName: string;
    companyId: string;
    companyName: string;
    description: string;
    stateOfProject: string;
    participants: number;
    accepts: [];
}

export const RequestProjectCard: FC<RequestProjectCardProps> = ({
    userId,
    projectId,
    category,
    projectName,
    companyId,
    companyName,
    description,
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
                {projectName?.toUpperCase()}
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
                        to={`/company/${companyId}`}
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
                <Typography variant="subtitle1" sx={{ color: '#898989' }}>
                    {description?.slice(0, 100)}
                    ...
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{
                        color: '#898989',
                    }}
                >
                    Estado:{' '}
                    <Chip label={stateOfProject} color="primary" size="small" />
                </Typography>

                <Typography variant="subtitle1" sx={{ color: '#898989' }}>
                    Participantes:{' '}
                    <Chip
                        label={`${accepts?.length}/${participants}`}
                        color="primary"
                        size="small"
                    />
                </Typography>
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
                    {companyName?.toUpperCase()}
                </Typography>
            </Paper>
        </Paper>
    );
};
