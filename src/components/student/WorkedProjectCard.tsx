import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Chip,
  Container,
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
    dispatch(unApplyStudent(userId, projectId, localStorage.getItem('token')));
  };
  return (
    <Paper
      elevation={10}
      sx={{
        p: 3,
        mt: 5,
        mb: 15,
        borderRadius: 5,
        backgroundColor: 'black',
        border: '1px solid white',
      }}
    >
      <Typography
        variant='h5'
        sx={{ color: 'white', fontFamily: 'montserrat', mb: 2 }}
      >
        {' '}
        {category.toUpperCase()}
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
          color: 'white',
          fontFamily: 'montserrat',
          fontWeight: 'bold',
        }}
        variant='h6'
      >
        {projectName.toUpperCase()}
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
            to={`/projects/${projectId}`}
            style={{
              textDecoration: 'none',
              marginTop: 'auto',
              fontFamily: 'poppins',
            }}
          ></NavLink>
        )}
      </Typography>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        {/* <Box
          sx={{
            display: 'block',
            backgroundColor: 'red',
            mb: 5,
            width:'50%',
            justifyContent: 'space-around',
            flexDirection:'column',
          }}
        > */}
        <Typography
          variant='subtitle1'
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'montserrat',
            color: 'white',
          }}
        >
          {description.slice(0, 500)}
        </Typography>
        <Typography variant='h5' sx={{ color: 'white', mt: 5 }}>
          Tecnologias:{' '}
          {requirements &&
            requirements.map((tecnology: string | any, index: number | any) => (
              <>
                {' '}
                <Chip
                  key={index}
                  label={tecnology}
                  color='primary'
                  size='small'
                  sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'black',
                    fontFamily: 'poppins',
                  }}
                />
              </>
            ))}
        </Typography>
        <Typography
          variant='h5'
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontFamily: 'montserrat',
          }}
        >
          Estado:{' '}
          <Chip
            size='small'
            label={stateOfProject}
            color='primary'
            sx={{
              display: 'flex',
              //   justifyContent: 'space-around',
              alignItems: 'center',
              color: 'black',
              fontFamily: 'poppins',
              m: 1,
            }}
          />
        </Typography>
      </Container>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: 5,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography
            variant='subtitle1'
            sx={{ color: 'white', fontFamily: 'poppins', p: 1 }}
          >
            {'Equipo:'}{' '}
          </Typography>

          <AvatarGroup max={participants}>
            {accepts &&
              accepts.map((person: object | any) => {
                return (
                  <Avatar
                    alt={person.name}
                    src={
                      person.image !== undefined ? person.image : person.name
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
        <Paper
          elevation={5}
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: 'max-content',
            p: 1,
          }}
        >
          <BusinessIcon fontSize='small' />
          <Typography
            variant='inherit'
            sx={{
              fontFamily: 'montserrat',
              display: 'flex',
              alignItems: 'center',
              pl: 1,
              pr: 1,
            }}
          >
            {companyName.toUpperCase()}
          </Typography>
        </Paper>
      </Container>
    </Paper>
  );
};
