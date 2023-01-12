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
    dispatch(unApplyStudent(userId, projectId, localStorage.getItem('token')));
  };
  return (
    <Paper
      elevation={10}
      sx={{
        p: 3,
        mt: 5,
        borderRadius: 5,
        backgroundColor:'red'
      }}
    >
      <Typography
        variant='h5'
        sx={{ color: 'white', fontFamily: 'montserrat', mb: 2 }}
      >
        {' '}
        {category?.toUpperCase()}
      </Typography>
      <Typography
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: '#ffff01',
          fontFamily: 'montserrat',
        }}
        variant='h5'
      >
        {projectName?.toUpperCase()}
        {stateOfProject != 'Terminado' ? (
          <Button
            variant='contained'
            type='submit'
            size='small'
            color='secondary'
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
          >
            <Button
              variant='contained'
              type='submit'
              size='small'
              color='primary'
            >
              Ver
            </Button>
          </NavLink>
        )}
      </Typography>
      <Box
        sx={{
          display: 'block',
          mb: '10px',
        }}
      >
        <Typography
          variant='subtitle1'
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#ffff01',
            fontFamily: 'montserrat',
          }}
        >
          {description?.slice(0, 100)}
        </Typography>
        <Typography
          variant='subtitle1'
          sx={{
            color: 'white',
          }}
        >
          Estado:{' '}
          <Chip
            label={stateOfProject}
            color='primary'
            size='small'
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontFamily: 'montserrat',
            }}
          />
        </Typography>

        <Typography
          variant='subtitle1'
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#ffff01',
            fontFamily: 'montserrat',
          }}
        >
          Participantes:{' '}
          <Chip
            label={`${accepts?.length}/${participants}`}
            color='primary'
            size='small'
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
        <BusinessIcon fontSize='small' />
        <Typography
          variant='subtitle2'
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
