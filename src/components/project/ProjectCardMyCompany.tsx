import { FC } from 'react';
import { Box, Typography, Paper, Chip, Grid, Container } from '@mui/material';
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

const ProjectCardMyCompany: FC<CardProjectProps> = ({
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
        sx={{
          display: 'flex',
          p: 5,
          mt: 2,
          mb: 2,
          width: '60%',
          borderRadius: 10,
          backgroundColor: 'black',
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
                fontStyle: 'italic',
              }}
            >
              {' '}
              {category?.toUpperCase()}
            </Typography>
            <Container />
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
                  fontWeight: 'bold',
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

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItem: 'center',
                textAlign: 'center',
                mb: 5,
                pb: 2,
              }}
            >
              <Typography
                variant='subtitle1'
                sx={{
                  color: '#e2e2e2',
                  fontFamily: 'montserrat',
                }}
              >
                Requerimientos:
                {requirements.map(
                  (requirement: string | any, index: number | any) => (
                    <>
                      {' '}
                      <Chip
                        key={index}
                        size='small'
                        variant='outlined'
                        label={requirement}
                        color='primary'
                        sx={{
                          background:
                            tecnologies.indexOf(requirement) === -1
                              ? ''
                              : '#FFFF01',
                          display: 'flex',
                          mt: 1,
                        }}
                      />
                    </>
                  ),
                )}
              </Typography>

              <Typography
                variant='subtitle1'
                sx={{
                  color: '#e2e2e2',
                  fontFamily: 'montserrat',
                }}
              >
                Estado:{' '}
                <Chip
                  size='small'
                  variant='outlined'
                  label={stateOfProject}
                  color='primary'
                  sx={{
                    display: 'flex',
                    background:
                      stateOfProj.indexOf(stateOfProject) === -1
                        ? ''
                        : '#FFFF01',
                    fontFamily: 'montserrat',
                  }}
                />
              </Typography>

              <Typography
                variant='subtitle1'
                sx={{
                  color: '#e2e2e2',
                  fontFamily: 'montserrat',
                }}
              >
                {' '}
                Participantes:{' '}
                <Chip
                  label={`${students?.length}/${participants}`}
                  color='primary'
                  variant='outlined'
                  size='small'
                  sx={{
                    display: 'flex',
                  }}
                />
              </Typography>
            </Box>
            <Container
              sx={{
                textAlign: 'center',
              }}
            >
              <NavLink
                to={`/projects/${id}`}
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
                  variant='contained'
                  type='submit'
                  size='small'
                  color='primary'
                  onClick={handleClick}
                >
                  Mas info +
                </Button>
              </NavLink>
            </Container>
          </Container>
        </Container>
      </Paper>
    </Grid>
  );
};

export default ProjectCardMyCompany;
