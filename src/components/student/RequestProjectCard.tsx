import { Box, Button, Chip, Container, Paper, Typography } from '@mui/material';
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
        p: 5,
        mt: 5,
        borderRadius: 5,
        backgroundColor: 'black',
        boxShadow:
          'rgba(255, 255, 255, 255.16) 0px 1px 4px, rgb(255, 255, 255) 0px 0px 0px 3px',
      }}
    >
      <Typography
        variant='h5'
        sx={{ fontFamily: 'montserrat',fontWeight:'bolder', mb: 3, color: '#ffff01' }}
      >
        {' '}
        {category?.toUpperCase()}
      </Typography>
      <hr
        style={{
          marginBottom: 20,
        }}
      />
      <Typography
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: '#ffff01',
          fontFamily: 'montserrat',
          fontWeight: 'bold',
        }}
        variant='h6'
      >
        {projectName?.toUpperCase()}
        {stateOfProject != 'Terminado' ? (
          <Button
            variant='contained'
            type='submit'
            size='small'
            color='secondary'
            onClick={() => handleClick(projectId)}
            sx={{
              fontFamily: 'poppins',
            }}
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
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
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
              color: 'white',
              fontFamily: 'poppins',
            }}
          >
            {description?.slice(0, 100)}
          </Typography>
          <Typography
            variant='subtitle1'
            sx={{ color: 'white', mt: 3, fontFamily: 'montserrat' }}
          >
            Estado:{' '}
            <Chip
              label={stateOfProject}
              color='secondary'
              size='small'
              variant='outlined'
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'montserrat',
                mt: 2,
              }}
            />
          </Typography>

          <Typography
            variant='subtitle1'
            sx={{
              display: 'flex',
              flexDirection:'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#ffff01',
              fontFamily: 'montserrat',
              mt: 3,
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
      </Container>
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
