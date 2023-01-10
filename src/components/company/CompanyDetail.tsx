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
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailCompany } from '../../actions/company';
import { State } from '../../reducers/rootReducer';
import bgComponents from '../../assets/bgComponents.png';
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
          padding: '20px',
          pb: 15,
          pt: 5,
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
                mb: 5,
                mt: 5,
              }}
            >
              Regresar
            </Button>
          </FormControl>
        </Grid>
        {detail ? (
          <Container maxWidth='lg'>
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around',
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      color: 'white',
                      fontfamily: 'motserrat',
                    }}
                    variant='h4'
                  >
                    {company?.name}.
                  </Typography>
                  <Typography
                    variant='subtitle1'
                    sx={{
                      color: 'black',
                      fontFamily: 'poppins',
                    }}
                  >
                    {company?.country}.
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      padding: '10px',
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
                        fontFamily: 'poppins',
                      }}
                    >
                      Rating de la empresa
                    </Typography>
                    <Box
                      sx={{
                        padding: '2px',
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
                  </Box>
                  <Box
                    sx={{
                      padding: '10px',
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
                        fontFamily: 'poppins',
                      }}
                    >
                      Rating de los proyectos
                    </Typography>
                    <Box
                      sx={{
                        padding: '2px',
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
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  pt: 5,
                  width: 600,
                  margin: '0 auto',
                }}
              >
                {company?.project &&
                  company?.project.map((e: any) => {
                    return (
                      <Paper
                        sx={{
                          padding: 2,
                          marginTop: 2,
                          display: 'flex',
                          justifyContent: 'space-between',
                          backgroundColor: 'black',
                        }}
                        elevation={5}
                      >
                        <Typography
                          sx={{
                            display: 'flex',
                            color: 'white',
                            fontFamily: 'montserrat',
                            fontWeight: 'bold',
                            alignItems: 'center',
                          }}
                        >
                          {e.name}
                        </Typography>
                        <Link
                          to={`/projects/${e._id}`}
                          style={{
                            textDecoration: 'none',
                            marginTop: 'auto',
                            fontFamily: 'poppins',
                            display: 'flex',
                          }}
                          target='_blank'
                        >
                          <Button
                            variant='contained'
                            type='submit'
                            size='small'
                            color='primary'
                            sx={{
                              boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                              fontFamily: 'montserrat',
                              fontWeight: 'bold',
                            }}
                          >
                            Más Info +
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
            </Box>
          </Container>
        ) : (
          <Stack
            spacing={2}
            sx={{
              width: '100%',
              pb: 70,
              pt: 15,
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
              {' '}
              Empresa no encontrada!
            </Alert>
          </Stack>
        )}
      </Box>
      <Footer />
    </>
  );
};
