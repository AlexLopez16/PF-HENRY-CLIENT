import { FC } from 'react';
import { Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router';
import nabijashbg from '../../../public/assets/nabijashbg.png';
import Header from '../../components/NavbarLandingPage/HeaderLanding';
import Footer from './Footer';

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
      <Box
        sx={{
          backgroundImage: `url(${nabijashbg})`,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            pt: 10,
            pr: 20,
          }}
        ></Box>

        <Box
          sx={{
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            textAlign: 'center',
          }}
        >
          <Box sx={{ pt: 25 }}>
            <img src='../../public/assets/NABIJASH.png ' height={150} />

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
              px: 50,
              pt: 5,
              pb: 5,
              textAlign: 'center',
              color: 'white',
              fontFamily: 'montserrat',
            }}
          >
            NABIJASH ofrece una herramienta para que empresas y estudiantes se
            puedan conectar de forma segura y crear relaciones profesionales con
            grandes oportunidades de crecimiento, aprendizaje y mucho más.
          </Typography>

          <Button
            size='small'
            variant='contained'
            onClick={studentClick}
            sx={{
              borderRadius: '10px',
              p: 1,
              mr: 2,
              fontFamily: 'poppins',
            }}
          >
            Ser parte del proyecto
          </Button>

          <Button
            size='small'
            variant='contained'
            onClick={companyClick}
            sx={{
              color: 'black',
              borderRadius: '10px',
              ml: 2,
              fontFamily: 'poppins',
            }}
          >
            Crear proyecto
          </Button>
        </Box>

        <Box
          sx={{
            pb: 10,
          }}
        >
          <Typography
            variant='h4'
            sx={{
              textAlign: 'center',
              mt: 25,
              pt: 8,
              pb: 4,
              color: 'white',
              fontFamily: 'Montserrat',
            }}
          >
            EL OBJETIVO
          </Typography>
          <Typography
            variant='h5'
            sx={{
              px: 50,
              pt: 5,
              pb: 5,
              textAlign: 'center',
              color: 'white',
              fontFamily: 'montserrat',
            }}
          >
            Trabajamos continuamente para transformar el mundo del trabajo
            promoviendo la autonomía, el desarrollo de talento y la igualdad de
            oportunidades para todos, desde donde sea.
          </Typography>
          <Box
            sx={{
              textAlign: 'right',
              display: 'inline-flex',
              mt: 10,
              color: 'white',
            }}
          >
            <Typography
              sx={{
                p: 10,
                pl: 50,
                pr: 10,
                width: '50%',
                fontSize: 25,
                display: 'flex',
                justifyContent: 'space-evenly',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignContent: 'stretch',
                alignItems: 'center',
                color: 'white',
                fontFamily: 'montserrat',
              }}
            >
             Nuestra propuesta es brindar a los alumnos la oportunidad de
              adquirir experiencia en proyectos reales y colaborar con talento digital a PyMES,
              Emprendedores, Asociaciones u ONG’s. Podrán disponer de un
              equipo de #Programadores y/o #DataScientists con dedicación
              full-time.
            </Typography>

            <Box
              sx={{
                alignItems: 'right',
                display: 'inline-flex',
                justifyContent: 'right',
                borderRadius: '50px',
              }}
            >
              <img
                src='../../public/assets/objetivo.png'
                style={{
                  height: '450px',
                  borderRadius: '50px',
                  boxShadow:
                    'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              textAlign: 'left',
              display: 'inline-flex',
              mt: 10,
              ml: '26%',
            }}
          >
            <img
              src='../../public/assets/objetivocompany.png'
              style={{
                height: '450px',
                borderRadius: '50px',
                boxShadow:
                  'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
              }}
            />
            <Typography
              sx={{
                p: 10,
                pr: 10,
                pl: 10,
                width: '50%',
                fontSize: 25,
                display: 'flex',
                justifyContent: 'space-evenly',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignContent: 'stretch',
                alignItems: 'center',
                color: 'white',
                fontFamily: 'montserrat',
              }}
            >
              Nuestra propuesta es brindar a los alumnos la oportunidad de
              adquirir experiencia en proyectos reales y colaborar con talento
              digital a PyMES, Emprendedores, Asociaciones u ONG’s. Podrán
              disponer de un equipo de #Programadores y/o #DataScientists con
              dedicación full-time.
            </Typography>
          </Box>
          <Box
            sx={{
              textAlign: 'right',
              display: 'inline-flex',
              mt: 10,
            }}
          >
            <Typography
              sx={{
                p: 10,
                pl: 50,
                pr: 10,
                width: '50%',
                fontSize: 25,
                display: 'flex',
                justifyContent: 'space-evenly',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignContent: 'stretch',
                alignItems: 'center',
                color: 'white',
                fontFamily: 'montserrat',
              }}
            >
              Como usuarios, los estudiantes tendrán a disposicion todos los
              conocimientos y skills que la empresa solicita para sus distintos
              puestos a cubrir. En la plataforma tendrán filtros de experiencia,
              idiomas y demás conocimientos habituales que son requeridos en el mundo IT-
            </Typography>
            <Box
              sx={{
                alignItems: 'right',
                display: 'inline-flex',
                justifyContent: 'right',
              }}
            >
              <img
                src='../../public/assets/objetivostudent.png'
                style={{
                  height: '450px',
                  borderRadius: '50px',
                  boxShadow:
                    'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <img
              src='../../../public/assets/bannerTextLanding.png'
              style={{
                marginTop: '50px',
              }}
            />
            <Box>
              <img
                src='../../../public/assets/bannerLanding.png'
                style={{
                  marginTop: '50px',
                }}
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  color: 'white',
                  mt: 10,
                  mb: 10,
                  fontFamily: 'montserrat',
                  fontSize: '35px',
                }}
              >
                Nuestros Valores
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'inline-flex',
                backgroundColor: 'black',
              }}
            >
              <Box>
                <Typography
                  sx={{
                    color: '#ffff01',
                  }}
                >
                  HUMILDAD
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
                    color: '#ffff01',
                  }}
                >
                  AUTONOMÍA
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
                  }}
                >
                  Decidimos proactivamente dónde desplegar nuestro talento, cómo
                  llevarlo a cabo y nos volvemos capitanes de las tareas que
                  priorizamos.
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: '#ffff01',
                  }}
                >
                  PASIÓN
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
                  }}
                >
                  Amamos lo que hacemos. Trabajamos, compartimos y vivimos la
                  misión de Workana, y por eso queremos siempre hacer más y
                  hacerlo mejor.
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: '#ffff01',
                  }}
                >
                  RESPETO
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
                  }}
                >
                  Somos relajados (y hasta políticamente incorrectos) pero
                  siempre nos movemos con respeto hacia los demás: hay un lugar
                  y un momento para todo.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'inline-flex',
                backgroundColor: 'black',
                mt: 5,
              }}
            >
              <Box>
                <Typography
                  sx={{
                    color: '#ffff01',
                  }}
                >
                  CREATIVIDAD
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
                    color: '#ffff01',
                  }}
                >
                  HONESTIDAD
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
                  }}
                >
                  Valoramos la sinceridad, la comunicación directa y el
                  feedback. Hay espacio para defender ideas en el mismo campo
                  donde se escuchan las ajenas.
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: '#ffff01',
                  }}
                >
                  RESPETO
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
                  }}
                >
                  Somos relajados (y hasta políticamente incorrectos) pero
                  siempre nos movemos con respeto hacia los demás: hay un lugar
                  y un momento para todo.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default LandingPage;
