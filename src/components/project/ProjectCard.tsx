import { FC } from 'react';
import { Box, Typography, Paper, Chip, Container, Grid } from '@mui/material';
import clip from 'text-clipper';
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom';
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
  companyId: string;
  state?: boolean;
  stateOfProject?: string;
  id: string;
  category?: string;
  image?: string[];
}

const ProjectCard: FC<CardProjectProps> = ({
  name,
  description,
  participants,
  requirements,
  students,
  company,
  companyId,
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
      <Container
        sx={{
          display: 'flex',
          alignContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
        <Paper
          elevation={10}
          style={{
            padding: 20,
            marginTop: 20,
            width: '90%',
            borderRadius: 15,
            backgroundColor: 'black',
            marginBottom: 15,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Container>
            <Container
              sx={{
                display: ' flex',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                flexWrap: 'wrap',
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
                  fontWeight: 'bold',
                }}
              >
                {name?.toUpperCase()}
              </Typography>
            </Container>
            <Container
              sx={{
                alignContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Paper
                color='primary'
                elevation={5}
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  textAlign: 'center',
                  justifyContent: 'space-evenly',
                  width: 200,
                  mb: 2,
                  backgroundColor: 'black',
                }}
              >
                <Link to={`/company/${companyId}`}>
                  <Button variant='outlined' startIcon={<BusinessIcon />}>
                    <Typography
                      variant='subtitle2'
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItem: 'center',
                        textAlign: 'center',
                        fontFamily: 'montserrat',
                        fontWeight: 'bold',
                        color: '#ffff01',
                      }}
                    >
                      {company?.toUpperCase()}
                    </Typography>
                  </Button>
                </Link>
              </Paper>
            </Container>
            <hr
              style={{
                marginBottom: 5,
              }}
            />
            <Container
              sx={{
                display: 'flex',
                alignContent: 'center',
                alignItems: 'flex-start',
                textAlign: 'center',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
              }}
            >
              <Typography
                variant='subtitle1'
                sx={{ color: '#e2e2e2', fontFamily: 'montserrat', mt: 2 }}
              >
                Requerimientos:
                {requirements.map(
                  (requirement: string | any, index: number | any) => (
                    <>
                      {' '}
                      <Chip
                        key={index}
                        color='primary'
                        size='small'
                        variant='outlined'
                        label={requirement}
                        sx={{
                          background:
                            tecnologies.indexOf(requirement) === -1
                              ? ''
                              : '#FFFF01',
                          color:
                            tecnologies.indexOf(requirement) === -1
                              ? '#fff'
                              : 'black',
                          display: 'flex',
                          fontFamily: 'montserrat',
                          fontWeight: 'bold',
                          mt: 2,
                          mb: 2,
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
                  mt: 2,
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
                      stateOfProj.indexOf(stateOfProject) === -1
                        ? ''
                        : '#FFFF01',
                    color:
                      stateOfProj.indexOf(stateOfProject) === -1
                        ? '#fff'
                        : 'black',
                    display: 'flex',
                    fontFamily: 'montserrat',
                    fontWeight: 'bold',
                    mt: 2,
                    mb: 2,
                  }}
                />
              </Typography>

              <Typography
                variant='subtitle1'
                sx={{ color: '#e2e2e2', fontFamily: 'montserrat', mt: 2 }}
              >
                {' '}
                Participantes:{' '}
                <Chip
                  variant='outlined'
                  label={`${students?.length}/${participants}`}
                  color='primary'
                  size='small'
                  sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    fontFamily: 'montserrat',
                    fontWeight: 'bold',
                    mt: 2,
                    mb: 2,
                    color: '#fff',
                  }}
                />
              </Typography>
            </Container>
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
                  variant='outlined'
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
        </Paper>
      </Container>
    </Grid>
  );
};

export default ProjectCard;
