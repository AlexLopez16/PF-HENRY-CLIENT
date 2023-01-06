import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  Box,
  Container,
} from '@mui/material';

import Header from '../../components/NavbarLandingPage/HeaderLanding';
import Footer from './Footer';

import aboutbg from '../../assets/aboutbg.png';
import Alejandro from '../../assets/team/rivo.png';
import Amparo from '../../assets/team/ampi.png';
import BrianPaez from '../../assets/team/brian.png';
import HugoS from '../../assets/team/hugo.png';
import Jonathan from '../../assets/team/jona.png';
import IgnacioSanchez from '../../assets/team/nachito.png';
import IgnacioNicoletti from '../../assets/team/nacho.png';
import Silvana from '../../assets/team/silvana.png';

const AboutUsPage: FC = () => {
  const navigate = useNavigate();

  const Ale = () => {
    navigate('/Ale');
  };
  const Ampi = () => {
    navigate('/Ampi');
  };
  const Brian = () => {
    navigate('/Brian');
  };
  const Hugo = () => {
    navigate('/Hugo');
  };
  const Jona = () => {
    navigate('/Jona');
  };
  const Nachito = () => {
    navigate('/Nachito');
  };
  const Nacho = () => {
    navigate('/Nacho');
  };
  const Sil = () => {
    navigate('/Sil');
  };

  return (
    <>
      <Header />
      <Box sx={{ backgroundImage: `url(${aboutbg})` }}>
        <Typography
          variant='h3'
          sx={{ textAlign: 'center', pt: 20, pb: 4, color: 'white' }}
        >
          ¿Quienes crearon NABIJASH?
        </Typography>
        <Container>
          <Typography
            variant='h5'
            sx={{
              pt: 4,
              pb: 5,
              textAlign: 'center',
              color: 'white',
              fontFamily: 'montserrat',
            }}
          >
            Somos un equipo que se creo durante el recorrido del bootcamp de
            Henry. No estabamos en los mismos grupos pero nos logramos enlazar y
            desde ese momento no dejamos de trabajar juntos. Nos dimos cuenta
            que congeniamos de una maravillosa manera con resultados
            excepcionales.
          </Typography>
          <Typography
            variant='h5'
            sx={{
              fontStyle: 'italic',
              pt: 4,
              pb: 5,
              textAlign: 'center',
              color: 'white',
              fontFamily: 'montserrat',
              fontWeight: 'bold',
            }}
          >
            "Henry nos dió grandes compañeros y colegas del mundo IT."
          </Typography>
          <Typography
            variant='h5'
            sx={{
              pt: 4,
              pb: 5,
              textAlign: 'center',
              color: 'white',
              fontFamily: 'montserrat',
            }}
          >
            Nuestros objetivos siempre se destacan por la creación y desarrollo
            de herramientas útiles para que cualquier persona pueda incorporarse
            en el mundo de la programación. Así tambien, apuntamos a
            complementarnos de manera activa con todas las aptitudes de cada
            integrante del equipo fortaleciendonos y potenciandonos.
          </Typography>
        </Container>
        <Box>
          <Container fixed>
            <Box
              sx={{
                flexDirection: 'row',
                display: 'inline-flex',
                flexWrap: 'wrap',
                gap: '100px',
                pb: 10,
                pt: 20,

                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Card
                sx={{
                  height: '400px',
                  width: '300px',
                  backgroundColor: '#1b384a',
                  borderRadius: '20px',
                  boxShadow:
                    'box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;',
                }}
              >
                <CardMedia
                  sx={{
                    height: 230,
                    width: 230,
                    borderRadius: '50%',
                    ml: '35px',
                    mt: '10px',
                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                  }}
                  component='img'
                  image={Alejandro}
                  alt='profilephoto'
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    color='white'
                    fontFamily='montserrat'
                    textAlign='center'
                    marginTop='20px'
                  >
                    Alejandro
                  </Typography>
                  <Typography
                    gutterBottom
                    variant='subtitle1'
                    color='white'
                    fontFamily='montserrat'
                    textAlign='center'
                  >
                    Full Stack Developer
                  </Typography>
                  <CardActions
                    sx={{
                      justifyContent: 'center',
                    }}
                  >
                    <Button
                      onClick={Ale}
                      size='small'
                      variant='contained'
                      color='secondary'
                      sx={{
                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                        fontFamily: 'montserrat',
                        fontWeight: 'bold',
                      }}
                    >
                      Detalle
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
              <Card
                sx={{
                  height: '400px',
                  width: '300px',
                  backgroundColor: '#1b384a',
                  borderRadius: '20px',
                  boxShadow:
                    'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
                }}
              >
                <CardMedia
                  sx={{
                    height: 230,
                    width: 230,
                    borderRadius: '50%',
                    ml: '35px',
                    mt: '10px',
                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                  }}
                  component='img'
                  image={IgnacioNicoletti}
                  alt='profilephoto'
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    color='white'
                    fontFamily='montserrat'
                    textAlign='center'
                    marginTop='20px'
                  >
                    Ignacio N.
                  </Typography>
                  <Typography
                    gutterBottom
                    variant='subtitle1'
                    color='white'
                    fontFamily='montserrat'
                    textAlign='center'
                  >
                    Full Stack Developer
                  </Typography>
                  <CardActions
                    sx={{
                      justifyContent: 'center',
                    }}
                  >
                    <Button
                      onClick={Nacho}
                      color='secondary'
                      size='small'
                      variant='contained'
                      sx={{
                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                        fontFamily: 'montserrat',
                        fontWeight: 'bold',
                      }}
                    >
                      Detalle
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
              <Card
                sx={{
                  height: '400px',
                  width: '300px',
                  backgroundColor: '#1b384a',
                  borderRadius: '20px',
                  boxShadow:
                    'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
                }}
              >
                <CardMedia
                  sx={{
                    height: 230,
                    width: 230,
                    borderRadius: '50%',
                    ml: '35px',
                    mt: '10px',
                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                  }}
                  component='img'
                  image={Amparo}
                  alt='profilephoto'
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    color='white'
                    fontFamily='montserrat'
                    textAlign='center'
                    marginTop='20px'
                  >
                    Amparo
                  </Typography>
                  <Typography
                    gutterBottom
                    variant='subtitle1'
                    color='white'
                    fontFamily='montserrat'
                    textAlign='center'
                  >
                    Full Stack Developer
                  </Typography>
                  <CardActions
                    sx={{
                      justifyContent: 'center',
                    }}
                  >
                    <Button
                      onClick={Ampi}
                      color='secondary'
                      size='small'
                      variant='contained'
                      sx={{
                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                        fontFamily: 'montserrat',
                        fontWeight: 'bold',
                      }}
                    >
                      Detalle
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
              <Card
                sx={{
                  height: '400px',
                  width: '300px',
                  backgroundColor: '#1b384a',
                  borderRadius: '20px',
                  boxShadow:
                    'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
                }}
              >
                <CardMedia
                  sx={{
                    height: 230,
                    width: 230,
                    borderRadius: '50%',
                    ml: '35px',
                    mt: '10px',
                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                  }}
                  component='img'
                  image={Silvana}
                  alt='profilephoto'
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    color='white'
                    fontFamily='montserrat'
                    textAlign='center'
                    marginTop='20px'
                  >
                    Silvana
                  </Typography>
                  <Typography
                    gutterBottom
                    variant='subtitle1'
                    color='white'
                    fontFamily='montserrat'
                    textAlign='center'
                  >
                    Full Stack Developer
                  </Typography>
                  <CardActions
                    sx={{
                      justifyContent: 'center',
                    }}
                  >
                    <Button
                      onClick={Sil}
                      color='secondary'
                      size='small'
                      variant='contained'
                      sx={{
                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                        fontFamily: 'montserrat',
                        fontWeight: 'bold',
                      }}
                    >
                      Detalle
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
              <Card
                sx={{
                  height: '400px',
                  width: '300px',
                  backgroundColor: '#1b384a',
                  borderRadius: '20px',
                  boxShadow:
                    'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
                }}
              >
                <CardMedia
                  sx={{
                    height: 230,
                    width: 230,
                    borderRadius: '50%',
                    ml: '35px',
                    mt: '10px',
                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                  }}
                  component='img'
                  image={HugoS}
                  alt='profilephoto'
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    color='white'
                    fontFamily='montserrat'
                    textAlign='center'
                    marginTop='20px'
                  >
                    Hugo
                  </Typography>
                  <Typography
                    gutterBottom
                    variant='subtitle1'
                    color='white'
                    fontFamily='montserrat'
                    textAlign='center'
                  >
                    Full Stack Developer
                  </Typography>
                  <CardActions
                    sx={{
                      justifyContent: 'center',
                    }}
                  >
                    <Button
                      onClick={Hugo}
                      color='secondary'
                      size='small'
                      variant='contained'
                      sx={{
                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                        fontFamily: 'montserrat',
                        fontWeight: 'bold',
                      }}
                    >
                      Detalle
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
              <Card
                sx={{
                  height: '400px',
                  width: '300px',
                  backgroundColor: '#1b384a',
                  borderRadius: '20px',
                  boxShadow:
                    'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
                }}
              >
                <CardMedia
                  sx={{
                    height: 230,
                    width: 230,
                    borderRadius: '50%',
                    ml: '35px',
                    mt: '10px',
                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                  }}
                  component='img'
                  image={IgnacioSanchez}
                  alt='profilephoto'
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    color='white'
                    fontFamily='montserrat'
                    textAlign='center'
                    marginTop='20px'
                  >
                    Ignacio S.
                  </Typography>
                  <Typography
                    gutterBottom
                    variant='subtitle1'
                    color='white'
                    fontFamily='montserrat'
                    textAlign='center'
                  >
                    Full Stack Developer
                  </Typography>
                  <CardActions
                    sx={{
                      justifyContent: 'center',
                    }}
                  >
                    <Button
                      onClick={Nachito}
                      color='secondary'
                      size='small'
                      variant='contained'
                      sx={{
                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                        fontFamily: 'montserrat',
                        fontWeight: 'bold',
                      }}
                    >
                      Detalle
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
              <Card
                sx={{
                  height: '400px',
                  width: '300px',
                  backgroundColor: '#1b384a',
                  borderRadius: '20px',
                  boxShadow:
                    'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
                }}
              >
                <CardMedia
                  sx={{
                    height: 230,
                    width: 230,
                    borderRadius: '50%',
                    ml: '35px',
                    mt: '10px',
                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                  }}
                  component='img'
                  image={BrianPaez}
                  alt='profilephoto'
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    color='white'
                    fontFamily='montserrat'
                    textAlign='center'
                    marginTop='20px'
                  >
                    Brian
                  </Typography>
                  <Typography
                    gutterBottom
                    variant='subtitle1'
                    color='white'
                    fontFamily='montserrat'
                    textAlign='center'
                  >
                    Full Stack Developer
                  </Typography>
                  <CardActions
                    sx={{
                      justifyContent: 'center',
                    }}
                  >
                    <Button
                      onClick={Brian}
                      color='secondary'
                      size='small'
                      variant='contained'
                      sx={{
                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                        fontFamily: 'montserrat',
                        fontWeight: 'bold',
                      }}
                    >
                      Detalle
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
              <Card
                sx={{
                  height: '400px',
                  width: '300px',
                  backgroundColor: '#1b384a',
                  borderRadius: '20px',
                  boxShadow:
                    'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
                }}
              >
                <CardMedia
                  sx={{
                    height: 230,
                    width: 230,
                    borderRadius: '50%',
                    ml: '35px',
                    mt: '10px',
                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                  }}
                  component='img'
                  image={Jonathan}
                  alt='profilephoto'
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    color='white'
                    fontFamily='montserrat'
                    textAlign='center'
                    marginTop='20px'
                  >
                    Jonathan
                  </Typography>
                  <Typography
                    gutterBottom
                    variant='subtitle1'
                    color='white'
                    fontFamily='montserrat'
                    textAlign='center'
                  >
                    Full Stack Developer
                  </Typography>
                  <CardActions
                    sx={{
                      justifyContent: 'center',
                    }}
                  >
                    <Button
                      onClick={Jona}
                      color='secondary'
                      size='small'
                      variant='contained'
                      sx={{
                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                        fontFamily: 'montserrat',
                        fontWeight: 'bold',
                      }}
                    >
                      Detalle
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Box>
          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  );
};
export default AboutUsPage;
