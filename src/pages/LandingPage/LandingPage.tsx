import { FC, useState } from 'react';
import { useNavigate } from 'react-router';
import ScrollToTop from 'react-scroll-to-top';
import { Button, Typography, Box, Grid, Container } from '@mui/material';
import Header from '../../components/NavbarLandingPage/HeaderLanding';
import Footer from './Footer';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import bgLanding from '../../assets/bgLanding.png';
import logo from '../../assets/NABIJASH.png';
import objetivo from '../../assets/objetivo.png';
import objetivoCompany from '../../assets/objetivocompany.png';
import objetivoStudent from '../../assets/objetivostudent.png';
import bannerLanding from '../../assets/bannerLanding.png';
import Carousel from './Carousel';


const LandingPage: FC = () => {
  const navigate = useNavigate();

  const studentClick = () => {
    navigate('/signup/student');
  };
  const companyClick = () => {
    navigate('/signup/company');
  };




  return (
    <>
      <Header />
      <Grid direction='column' justifyContent='center' alignItems='center'>
        <Box
          sx={{
            backgroundImage: `url(${bgLanding})`,
            maxWidth: '1920px',
          }}
        >
          <ScrollToTop
            smooth
            style={{ backgroundColor: '#ffff01' }}
            component={
              <p
                style={{
                  backgroundColor: '#ffff01',
                  fontSize: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 20,
                }}
              >
                <ArrowUpwardIcon />
              </p>
            }
          />
          <Container>
            <Box
              sx={{
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                textAlign: 'center',
              }}
            >
              <Box sx={{ pt: 10, minWidth: 250 }}>
                <img src={logo} />

                <Typography
                  variant='h4'
                  sx={{
                    textAlign: 'center',
                    pt: 20,
                    color: 'white',
                    fontFamily: 'Montserrat',
                    fontWeight: 'bold',
                  }}
                >
                  OPORTUNIDADES PARA TODOS
                </Typography>
              </Box>

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
                NABIJASH ofrece una herramienta para que empresas y estudiantes
                se puedan conectar de forma segura y crear relaciones
                profesionales con grandes oportunidades de crecimiento,
                aprendizaje y mucho más.
              </Typography>
              <Container style={{ marginTop: 50 }}>
                <Button
                  size='medium'
                  variant='contained'
                  onClick={studentClick}
                  sx={{
                    display: 'inline-flex',
                    borderRadius: 7,
                    fontFamily: 'poppins',
                    mt:2,
                  }}
                >
                  Ser parte del proyecto
                </Button>
                <span>....</span>
                <Button
                  size='medium'
                  variant='contained'
                  onClick={companyClick}
                  sx={{
                    display: 'inline-flex',
                    color: 'black',
                    borderRadius: 7,
                    fontFamily: 'poppins',
                    mt:2,
                  }}
                >
                  Crear proyecto
                </Button>
              </Container>
            </Box>
          </Container>
          <Box>
            <Container>
              <Grid
                direction='column'
                justifyContent='center'
                alignItems='center'
                sx={{
                  mt: 20,
                  backgroundColor: '#1b384a',
                  textAlign: 'center',
                  color: 'white',
                  fontFamily: 'montserrat',
                  pb: 4,
                  pt: 4,
                  borderRadius: 10,
                }}
              >
                <Typography
                  variant='h4'
                  sx={{
                    textAlign: 'center',
                    pb: 4,
                    color: 'white',
                    fontFamily: 'poppins',
                  }}
                >
                  EL OBJETIVO
                </Typography>

                <Typography
                  variant='h5'
                  sx={{
                    pb: 5,
                    textAlign: 'center',
                    color: 'white',
                    fontFamily: 'montserrat',
                  }}
                >
                  Trabajamos continuamente para transformar el mundo del trabajo
                  promoviendo la autonomía, el desarrollo de talento y la
                  igualdad de oportunidades para todos, desde donde sea.
                </Typography>
              </Grid>
            </Container>

            <Container>
              <Typography
                variant='h5'
                sx={{
                  mt: 10,
                  pb: 5,
                  textAlign: 'center',
                  color: 'white',
                  fontFamily: 'montserrat',
                  lineHeight: '2.5rem'
                }}
              >
                Nuestra propuesta es brindar a los alumnos la oportunidad de
                adquirir experiencia en proyectos reales y colaborar con talento
                digital a PyMES, Emprendedores, Asociaciones u ONG’s. Podrán
                disponer de un equipo de #Programadores y/o #DataScientists con
                dedicación Full-Time.
              </Typography>
            </Container>
            <Grid container alignItems='center' justifyContent='center'>
              <img
                src={objetivo}
                style={{
                  height: 400,
                  borderRadius: 40,
                  boxShadow:
                    'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  alignContent: 'center',
                }}
              />
            </Grid>

            <Container>
              <Typography
                variant='h5'
                sx={{
                  mt: 10,
                  pb: 5,
                  textAlign: 'center',
                  color: 'white',
                  fontFamily: 'montserrat',
                  lineHeight: '2.5rem'
                }}
              >
                Lograr que empresas y estudiantes se conecten, por eso queremos
                ayudar directamente a esos talentos nacientes del bootcamp y
                compañias que estén dispuestas a participar en esta propuesta.
              </Typography>
              <Grid container alignItems='center' justifyContent='center'>
                <img
                  src={objetivoCompany}
                  style={{
                    height: 400,
                    borderRadius: 40,
                    boxShadow:
                      'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
                  }}
                />
              </Grid>
            </Container>
            <Container>
              <Typography
                variant='h5'
                sx={{
                  mt: 10,
                  pb: 5,
                  textAlign: 'center',
                  color: 'white',
                  fontFamily: 'montserrat',
                  lineHeight: '2.5rem'
                }}
              >
                Como usuarios, los estudiantes tendrán a disposicion todos los
                conocimientos y skills que la empresa solicita para sus
                distintos puestos a cubrir. En la plataforma tendrán filtros de
                experiencia, idiomas y demás conocimientos habituales que son
                requeridos en el mundo IT.
              </Typography>
              <Grid container alignItems='center' justifyContent='center'>
                <img
                  src={objetivoStudent}
                  style={{
                    height: 400,
                    borderRadius: 40,
                    boxShadow:
                      'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
                  }}
                />
              </Grid>
            </Container>
            <Container>
              <Typography
                variant='h4'
                sx={{
                  mt: 20,
                  backgroundColor: '#1b384a',
                  textAlign: 'center',
                  color: 'white',
                  fontFamily: 'montserrat',
                  padding: 4,
                  borderRadius: 10,
                  lineHeight: '3rem'
                }}
              >
                Concluimos que, debemos aprovechar y utilizar los medios de
                comunicación actuales para agilizar todas las metodologías de
                inserciones laborales y crear potenciales trabajadores y
                brindarles la máxima visualización ante propuestas laborales que
                ofrezcan las empresas dentro de la plataforma.
              </Typography>
            </Container>
            <Container>
              <Grid container alignItems='center' justifyContent='center'>
                <img
                  src={bannerLanding}
                  style={{
                    marginTop: 100,
                    borderRadius: 40,
                    boxShadow:
                      'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
                    minWidth: 15,
                  }}
                />
              </Grid>
            </Container>
            <Grid container alignItems='center' justifyContent='center'>
              <Typography
                sx={{
                  color: 'white',
                  mt: 15,
                  mb: 3,
                  fontFamily: 'montserrat',
                  fontSize: '35px',
                }}
              >
                Nuestros Valores
              </Typography>
            </Grid>
            <Container
              sx={{
                pb: 10,
              }}
            >
              <Grid container alignItems='center' justifyContent='center'>
                <Box>
                  <Typography
                    sx={{
                      textAlign: 'center',
                      fontFamily: 'Montserrat',
                      color: '#ffff01',
                      pt: 5,
                    }}
                  >
                    HUMILDAD
                  </Typography>
                  <Typography
                    sx={{
                      width: 300,
                      fontSize: 15,
                      display: 'flex',
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      color: 'white',
                      fontFamily: 'montserrat',
                      mt: 1,
                      px: 2,
                      textAlign: 'center',
                    }}
                  >
                    Somos parte de un todo. Por eso, compartimos información,
                    reconocemos nuestros errores y nos conocemos a fondo para
                    sacar lo mejor de nosotros.
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      textAlign: 'center',
                      fontFamily: 'Montserrat',
                      color: '#ffff01',
                      pt: 5,
                    }}
                  >
                    AUTONOMÍA
                  </Typography>
                  <Typography
                    sx={{
                      width: 300,
                      fontSize: 15,
                      display: 'flex',
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      color: 'white',
                      fontFamily: 'montserrat',
                      mt: 1,
                      px: 2,
                      textAlign: 'center',
                    }}
                  >
                    Decidimos proactivamente dónde desplegar nuestro talento,
                    cómo llevarlo a cabo y nos volvemos capitanes de las tareas
                    que priorizamos.
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      textAlign: 'center',
                      fontFamily: 'Montserrat',
                      color: '#ffff01',
                      pt: 5,
                    }}
                  >
                    PASIÓN
                  </Typography>
                  <Typography
                    sx={{
                      width: 300,
                      fontSize: 15,
                      display: 'flex',
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      color: 'white',
                      fontFamily: 'montserrat',
                      mt: 1,
                      px: 2,
                      textAlign: 'center',
                    }}
                  >
                    Amamos lo que hacemos. Trabajamos y por eso queremos siempre hacer más y
                    hacerlo mejor.
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      textAlign: 'center',
                      fontFamily: 'Montserrat',
                      color: '#ffff01',
                      pt: 5,
                    }}
                  >
                    RESPETO
                  </Typography>
                  <Typography
                    sx={{
                      width: 300,
                      fontSize: 15,
                      display: 'flex',
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      color: 'white',
                      fontFamily: 'montserrat',
                      mt: 1,
                      px: 2,
                      textAlign: 'center',
                    }}
                  >
                    Somos relajados (y hasta políticamente incorrectos) pero
                    siempre nos movemos con respeto hacia los demás: hay un
                    lugar y un momento para todo.
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      textAlign: 'center',
                      fontFamily: 'Montserrat',
                      color: '#ffff01',
                      pt: 5,
                    }}
                  >
                    CREATIVIDAD
                  </Typography>
                  <Typography
                    sx={{
                      width: 300,
                      fontSize: 15,
                      display: 'flex',
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      color: 'white',
                      fontFamily: 'montserrat',
                      mt: 1,
                      px: 2,
                      textAlign: 'center',
                    }}
                  >
                    ¿Hacer siempre lo mismo? No, gracias. Buscamos alternativas
                    creativas que nos permitan optimizar los resultados. El
                    aprendizaje es continuo.
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      textAlign: 'center',
                      fontFamily: 'Montserrat',
                      color: '#ffff01',
                      pt: 5,
                    }}
                  >
                    FLEXIBILIDAD
                  </Typography>
                  <Typography
                    sx={{
                      width: '300px',
                      fontSize: 15,
                      display: 'flex',
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      color: 'white',
                      fontFamily: 'montserrat',
                      mt: 1,
                      px: 2,
                      textAlign: 'center',
                    }}
                  >
                    No le tememos al cambio. Por eso no entramos en crisis
                    cuando lo vivimos: reconocemos los desafíos y los
                    transformamos en oportunidades.
                  </Typography>
                </Box>
              </Grid>
            </Container>
          </Box>
          <Grid
            container
            alignItems='center'
            justifyContent='center'
            flexDirection='column'
          >
            <Typography
              variant='h3'
              sx={{
                color: '#ffff01',
                mt: 20,
                mb: 3,
                fontFamily: 'Poppins',
                fontSize: '35px',
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
              }}
            >
              {/* El futuro; creado por Henry’s */}
              Empresas que confían en NABIJASH
            </Typography>
            <Container sx={{}}>
              <Grid
                container
                alignItems='center'
                justifyContent='center'
                flexDirection='column'
              >
                {/* <Typography
                  variant='h5'
                  sx={{
                    width: 750,
                    pt: 4,
                    pb: 5,
                    alignItems: 'center',
                    textAlign: 'center',
                    color: 'white',
                    fontFamily: 'montserrat',
                    lineHeight: '2.5rem'
                  }}
                >
                  Estamos orgullosos de poder satisfacer las necesidades de
                  todos nuestros clientes que, con confianza avalan nuestro
                  desempeño.
                </Typography> */}
              </Grid>
            </Container>
          </Grid>
          <Carousel />
        </Box>
      </Grid>
      <Footer />
    </>
  );
};

export default LandingPage;
