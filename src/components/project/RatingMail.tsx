import * as React from 'react';
import { styled } from '@mui/material/styles';
import Rating, { IconContainerProps } from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import {
  Box,
  Typography,
  Paper,
  CardHeader,
  Avatar,
  Button,
} from '@mui/material';
import bgComponents from '../../assets/bgComponents.png';
import { buttonStyle } from '../../styles/Profile/HeaderFormStyles';
import { useDispatch, useSelector } from 'react-redux';
import {
  Navigate,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { postReview } from '../../actions/revius';
import TextField from '@mui/material/TextField';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { PreLoader } from '../PreLoader/PreLoader';
import { SnackBar } from '../SnackBar/SnackBar';
import NavBar from '../NavBar/NavBar';
import Footer from '../../pages/LandingPage/Footer';

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons: {
  [index: string]: {
    icon: React.ReactElement;
    label: string;
    number: Number;
  };
} = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color='error' />,
    label: 'Very Dissatisfied',
    number: 1,
  },
  2: {
    icon: <SentimentDissatisfiedIcon color='error' />,
    label: 'Dissatisfied',
    number: 2,
  },
  3: {
    icon: <SentimentSatisfiedIcon color='warning' />,
    label: 'Neutral',
    number: 3,
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color='success' />,
    label: 'Satisfied',
    number: 4,
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color='success' />,
    label: 'Very Satisfied',
    number: 5,
  },
};

function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

export const RatingMail = () => {
  const [ratingProject, setRatingProject] = React.useState<number | null>(2);
  const [ratingCompany, setRatingCompany] = React.useState<number | null>(2);
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  type Values = {
    description: string;
  };

  const [queryParameters] = useSearchParams();

  let idProject: string | any = queryParameters.get('project');
  let name: string | any = queryParameters.get('student');
  let image: string | any = queryParameters.get('image');
  let project: string | any = queryParameters.get('projectName');
  let id: string | any = queryParameters.get('id');
  let tok: string | any = queryParameters.get('token');

  const initialValues = {
    description: '',
    ratingCompany: '',
    ratingProject: '',
  };

  const validationSchema = Yup.object().shape({
    description: Yup.string().required(
      '* Ingresa una descripción del proyecto',
    ),
  });

  const onSubmit = (values: string | any) => {
    const data = {
      description: values.description,
      ratingCompany: ratingCompany,
      ratingProject: ratingProject,
      id: id,
      idProject: idProject,
    };

    dispatch(postReview(data, tok));
    Navigate('/projects');
  };

  return (
    <>
    <SnackBar/>
      <NavBar />
      <Box
        sx={{
          backgroundImage: `url(${bgComponents})`,
          maxWidth: '1920px',
          pt: 15,
          pb: 30,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div>
          <PreLoader />
          <SnackBar />
          <Paper
            elevation={10}
            style={{
              width: 500,

              padding: 20,
              margin: '50px auto',
              borderRadius: 20,
              backgroundColor: 'white',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <CardHeader
                avatar={
                  <Avatar src={`${image}`} sx={{ width: 70, height: 70 }} />
                }
                title={`${name}`}
              />
            </Box>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form>
                <Box
                  sx={{
                    width: '100%',
                    maxWidth: 500,
                    color: 'white',
                    fontFamily: 'montserrat',
                  }}
                >
                  <div>
                    <Typography
                      variant='h6'
                      sx={{
                        color: 'white',
                        fontFamily: 'montserrat',
                      }}
                    >
                      {`${project}`}:
                    </Typography>
                  </div>
                  <div>
                    <Field
                      as={TextField}
                      name='description'
                      placeholder='Description'
                      label='Description'
                      size='small'
                      multiline
                      rows={3}
                      color='info'
                      sx={{
                        width: '100%',
                        margin: '10px 0',
                      }}
                      inputProps={{ maxLength: 300 }}
                      helperText={
                        <ErrorMessage name='description'>
                          {(message) => (
                            <span
                              style={{
                                color: '#d6423e',
                              }}
                            >
                              {message}
                            </span>
                          )}
                        </ErrorMessage>
                      }
                    />
                  </div>
                </Box>
                {/* <Form> */}
                {/* <Box sx={{ width: '100%', maxWidth: 500 }}>
                    <div>
                      <Typography variant='h6'>{`${project}`}:</Typography>
                    </div>
                    <div>
                      <Field
                        as={TextField}
                        name='description'
                        label='description'
                        size='small'
                        multiline
                        inputProps={{ maxLength: 200 }}
                        rows={5}
                        color='info'
                        sx={{ width: '100%', margin: '10px 0' }}
                        helperText={
                          <ErrorMessage name='description'>
                            {(message) => (
                              <span
                                style={{
                                  color: '#d6423e',
                                }}
                              >
                                {message}
                              </span>
                            )}
                          </ErrorMessage>
                        }
                      />
                    </div>
                  </Box> */}

                <Typography
                  component='legend'
                  sx={{
                    fontFamily: 'montserrat',
                  }}
                >
                  Nivel de satisfaccion con la empresa
                </Typography>
                <Rating
                  name='simple-controlled'
                  value={ratingCompany}
                  onChange={(event, newRatingCompany) => {
                    setRatingCompany(newRatingCompany);
                  }}
                />

                <div>
                  <Box>
                    <Typography
                      component='legend'
                      sx={{
                        fontFamily: 'montserrat',
                      }}
                    >
                      Nivel de satisfaccion del proyecto
                    </Typography>
                    <Rating
                      name='simple-controlled'
                      value={ratingProject}
                      onChange={(event, newRatingProject) => {
                        setRatingProject(newRatingProject);
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'right',
                    }}
                  >
                    <Button
                      type='submit'
                      style={{
                        fontFamily: 'poppins',
                        borderRadius: 5,
                      }}
                      variant='contained'
                    >
                      Enviar
                    </Button>
                  </Box>
                </div>
                {/* </Form> */}

              </Form>
            </Formik>
          </Paper>
        </div>
      </Box>
      <Footer />
    </>
  );
};
