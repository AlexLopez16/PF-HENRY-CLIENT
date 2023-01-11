import {
  Alert,
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  Paper,
  Rating,
  Stack,
  Typography,
} from '@mui/material';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getDetailCompany } from '../../actions/company';
import { State } from '../../reducers/rootReducer';
import bgComponents from '../../assets/bgComponents.png';
import bgDetailCompany from '../../assets/bgDetailCompany.png';
import { RatingProject } from '../project/RatingProject';
import Footer from '../../pages/LandingPage/Footer';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export const CompanyDetail: FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const { detail }: object | any = useSelector((state: State) => state.company);
  useEffect(() => {
    if (id && token) {
      dispatch(getDetailCompany(id, token));
    }
  }, [detail]);
  let company = null;
  if (detail) company = detail.company;

  const Navigate = useNavigate();
  const GoBack = () => {
    Navigate('/projects');
  };
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${bgComponents})`,
          width: '100%',
        }}
      >
        {detail ? (
          <Container
            sx={{
              mb: 10,
              pt: 10,
            }}
          >
            <Grid
              container
              direction='column'
              justifyContent='flex-start'
              alignItems='center'
            >
              <FormControl>
                <Button
                  startIcon={<ArrowBackIosNewIcon />}
                  onClick={GoBack}
                  size='small'
                  variant='contained'
                  color='secondary'
                  sx={{
                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                    fontFamily: 'montserrat',
                    fontWeight: 'bold',
                    mb: 10,
                  }}
                >
                  Regresar
                </Button>
              </FormControl>
            </Grid>
            <Paper
              elevation={10}
              sx={{
                backgroundImage: `url(${bgDetailCompany})`,
                p: 10,
                borderRadius: 15,
                mb: 30,
              }}
            >
              <Box>
                <Typography
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontFamily: 'montserrat',
                    color: '#ffff01',
                  }}
                  variant='h3'
                >
                  {company?.name}.
                </Typography>
                <Typography
                  variant='subtitle1'
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontFamily: 'poppins',
                    color: 'white',
                    fontStyle: 'italic',
                    mb: 5,
                  }}
                >
                  {company?.country}.
                </Typography>
              </Box>
              <Container
                sx={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                }}
              >
                {' '}
                {/*company name*/}
                <Box
                  sx={{
                    width: 'max-content',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    color: 'white',
                  }}
                >
                  <Typography
                    component='legend'
                    sx={{
                      fontFamily: 'montserrat',
                    }}
                  >
                    Rating de la empresa
                  </Typography>
                  <Box
                    sx={{
                      mt: 1,
                      p: '3px',
                      backgroundColor: 'white',
                      borderRadius: '50px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Rating
                      name='read-only'
                      readOnly
                      value={detail.ratingCompany}
                    />
                  </Box>
                </Box>{' '}
                {/*rating compañia*/}
                <Box
                  sx={{
                    width: 'max-content',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    color: 'white',
                  }}
                >
                  <Typography
                    component='legend'
                    sx={{
                      fontFamily: 'montserrat',
                    }}
                  >
                    Rating de los proyectos
                  </Typography>
                  <Box
                    sx={{
                      mt: 1,
                      p: '3px',
                      backgroundColor: 'white',
                      borderRadius: '50px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Rating
                      name='read-only'
                      readOnly
                      value={detail.ratingProjects}
                    />
                  </Box>
                  {/*rating project*/}
                </Box>
              </Container>
              <Box
                sx={{
                  width: '80%',
                  margin: '0 auto',
                }}
              >
                {company?.project &&
                  company?.project.map((e: any) => {
                    return (
                      <Paper
                        sx={{
                          width: '100%',
                          p: 2,
                          mt: 5,
                          borderRadius:5,
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                        elevation={10}
                      >
                        {e.name}

                        <Link
                          to={`/projects/${e._id}`}
                          style={{
                            textDecoration: 'none',
                            marginTop: 'auto',
                            fontFamily: 'poppins',
                          }}
                          target='_blank'
                        >
                          <Button
                            variant='contained'
                            type='submit'
                            size='small'
                            color='primary'
                            sx={{
                              fontFamily: 'poppins',
                              borderRadius:3,
                            }}
                          >
                            Mas Info +
                          </Button>
                        </Link>
                      </Paper>
                    );
                  })}
              </Box>

              <Box>
                {detail.reviews.map((review: any) => (
                  <RatingProject
                    avatar={review?.student?.image}
                    name={review?.student?.name}
                    lastName={review.student?.lastName}
                    description={review.description}
                    ratingCompany={review.ratingCompany}
                    ratingProject={review.ratingProject}
                    projectName={review?.project?.name}
                  />
                ))}
              </Box>
            </Paper>
          </Container>
        ) : (
          <Container>
            <Stack
              spacing={2}
              sx={{
                width: '100%',
                pb: 70,
                pt: 25,
                justifyContent: 'center',
                display: 'flex',
                alignContent: 'center',
              }}
            >
              <Alert
                severity='info'
                sx={{
                  justifyContent: 'center',
                  display: 'flex',
                  alignContent: 'center',
                  borderRadius: 50,
                  fontFamily: 'poppins',
                  color: 'black',
                }}
              >
                Empresa no encontrada!
              </Alert>
            </Stack>
          </Container>
        )}
        <Footer />
      </Box>
    </>
  );
};
