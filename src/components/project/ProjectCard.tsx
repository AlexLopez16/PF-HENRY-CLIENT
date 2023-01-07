import { FC } from 'react';
import { Box, Typography, Paper, Chip, Container, Grid } from '@mui/material';
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
  const tecnologies = filters?.tecnologies || [];
  const stateOfProj = filters?.stateOfProject || [];

  const handleClick = () => {
    dispatch(getProjectByID(token, id));
  };

  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
    >
      <Paper
        elevation={10}
        style={{
          padding: 20,
          marginTop: 20,
          width: 650,
          borderRadius: 15,
          backgroundColor: 'black',
          marginBottom: 15
        }}
      >
        <Container fixed>
          <Container
            sx={{
              alignContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <Typography
              variant='subtitle2'
              sx={{
                color: 'white',
                pt: 2,
                pb: 2,
                alignItems: 'center',
                fontFamily: 'montserrat',
                fontStyle:'italic',
              }}
            >
              {' '}
              {category?.toUpperCase()}
            </Typography>
          </Container>
          <Container
            sx={{
              alignContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <Typography
              sx={{
                display: 'flex',
                fontSize: 25,
                color: '#ffff01',
                pb: 2,
                fontFamily: 'montserrat',
                alignItems: 'center',
                justifyContent: 'space-around',
                fontWeight: 'bold'
              }}
             
            >
              {name?.toUpperCase()}
            </Typography>
          </Container>
          <hr
            style={{
              marginBottom: 5,
            }}
          />
          {/* <Typography sx={{ m: 0.5 }}>{clippedDescription}</Typography> */}

          <Box
            sx={{
              display: 'flex',
              mb: 5,
              pb: 2,
              justifyContent: 'space-around',
            }}
          >
            <Typography variant='subtitle1' sx={{ color: '#e2e2e2' }}>
              Requerimientos:
              {requirements.map(
                (requirement: string | any, index: number | any) => (
                  <div key={index}>
                    {' '}
                    <Chip
                      color='primary'
                      size='small'
                      variant='outlined'
                      label={requirement}
                      sx={{
                        background:
                          tecnologies.indexOf(requirement) === -1
                            ? ''
                            : '#FFFF01',
                        display: 'inline-flex',
                        fontFamily: 'montserrat',
                      }}
                    />
                  </div>
                ),
              )}
            </Typography>

            <Typography
              variant='subtitle1'
              sx={{
                color: '#e2e2e2',
              }}
            >
              Estado:{' '}
              <Chip
                color='primary'
                size='small'
                variant='outlined'
                label={stateOfProject}
                sx={{
                  background:
                    stateOfProj.indexOf(stateOfProject) === -1 ? '' : '#FFFF01',
                }}
              />
            </Typography>

            <Typography
              variant='subtitle1'
              sx={{ color: '#e2e2e2', fontFamily: 'poppins' }}
            >
              {' '}
              Participantes:{' '}
              <Chip
                label={`${students?.length}/${participants}`}
                color='primary'
                size='small'
              />
            </Typography>
          </Box>
          <Paper
            color='primary'
            elevation={5}
            sx={{
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              justifyContent: 'center',
              width: 200,
              ml: 22,
              mb: 2,
            }}
          >
            <BusinessIcon fontSize='small' />
            <Typography
              variant='subtitle2'
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                ml: 1,
                fontFamily: 'montserrat',
              
              }}
            >
              {company?.toUpperCase()}
            </Typography>
          </Paper>

          <Container
            sx={{
              textAlign: 'center',
            }}
          >
            <NavLink
              to='/project'
              style={{
                textDecoration: 'none',
                marginTop: 'auto',
                fontFamily: 'poppins',
              }}
            >
              <Button
                sx={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'montserrat',
                  fontWeight: 'bold',
                }}
                variant='outlined'
                type='submit'
                size='small'
                color='primary'
                onClick={handleClick}
              >
                Mas info
              </Button>
            </NavLink>
          </Container>
        </Container>
      </Paper>

    </Grid>
  );
};

export default ProjectCard;
