import { FC } from 'react';
import {
  Button,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import { useNavigate } from 'react-router';
import bg from '../../public/assets/bg.png';
import bgequipo from '../../public/assets/bgequipo.png';
import ContactForm from '../components/ui/ContactForm';

const LandingPage: FC = () => {
  const navigate = useNavigate();

  const signInClick = () => {
    navigate('/login');
  };
  const studentClick = () => {
    navigate('/signup/student');
  };
  const companyClick = () => {
    navigate('/signup/company');
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            pt: 10,
            pr: 20,
          }}
        >
          <Button
            size='small'
            variant='contained'
            onClick={signInClick}
            sx={{
              color: 'black',
              borderRadius: '10px',
            }}
          >
            Ingresar
          </Button>
        </Box>

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
              sx={{ textAlign: 'center', pt: 20, color: 'white' }}
            >
              OPORTUNIDADES PARA TODOS
            </Typography>
          </Box>

          <Typography
            variant='h5'
            sx={{
              textAlign: 'center',
              pl: 20,
              pr: 20,
              pb: 3,
              pt: 3,
              mb: 3,
              mt: 3,
              color: 'white',
              alignItems: 'center',
              width: '1800px',
            }}
          >
            NABIJASH ofrece una herramienta para que empresas y estudiantes se
            puedan conectar de forma segura y generar crear relaciones
            profesionales con grandes oportunidades laborales
          </Typography>
          <Button
            size='small'
            variant='contained'
            onClick={studentClick}
            sx={{
              borderRadius: '10px',
            }}
          >
            Ser parte del proyecto
          </Button>

          <Typography
            sx={{
              px: 2,
              color: 'white',
            }}
          >
            o
          </Typography>

          <Button
            size='small'
            variant='contained'
            onClick={companyClick}
            sx={{
              color: 'black',
              borderRadius: '10px',
            }}
          >
            Crear proyecto
          </Button>
        </Box>

        <Box
          sx={{
            backgroundColor: 'black',
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
              color: '#fcf75e',
            }}
          >
            EL OBJETIVO
          </Typography>
          <Box
            sx={{
              textAlign: 'right',
              display: 'inline-flex',
              mt: 10,
              color: '#fcf75e',
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
                color: '#fcf75e',
              }}
            >
              Nuestro propósito es lograr que empresas y estudiantes se
              conecten, por eso queremos ayudar directamente a esos talentos
              nacientes del bootcamp y empresas que estén dispuestas a
              participar de esta nueva propuesta.
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
                  height: '550px',
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
              ml: 46,
            }}
          >
            <img
              src='../../public/assets/objetivocompany.png'
              style={{
                height: '550px',
                borderRadius: '50px',
                boxShadow:
                  'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
              }}
            />
            <Typography
              sx={{
                p: 10,
                pr: 30,
                pl: 10,
                width: '50%',
                fontSize: 25,
                display: 'flex',
                justifyContent: 'space-evenly',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignContent: 'stretch',
                alignItems: 'center',
                color: '#fcf75e',
              }}
            >
              Proveemos todas las herramientas para que las empresas puedan
              elegir al candidato que reuna y cumpla con todos los requisitos
              solicitados.
            </Typography>
            <Box
              sx={{
                textAlign: 'right',
                display: 'inline-flex',
                mt: 10,
                color: '#fcf75e',
              }}
            ></Box>
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
                color: '#fcf75e',
              }}
            >
              Como usuarios, los estudiantes tendrán a disposicion todos los
              conocimientos y skills que la empresa solicita para sus distintos
              puestos a cubrir. En la plataforma tendrán filtros de experiencia,
              idiomas y demás conocimientos habituales en las busquedas
              laborales.
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
                  height: '550px',
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
            <Typography
              sx={{
                p: 10,
                pt: 15,
                width: '100%',
                fontSize: 30,
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                color: '#fcf75e',
              }}
            >
              Concluimos que, debemos aprovechar y utilizar los medios de
              comunicación actuales para agilizar todas las metodologías de
              inserciones laborales y crear potenciales trabajadores y
              brindarles la máxima visualización ante propuestas laborales que
              ofrezcan las empresas dentro de la plataforma.
            </Typography>
            <Typography
              sx={{
                p: 10,
                pt: 4,
                pb: 3,
                width: '100%',
                fontSize: 30,
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                color: '#fcf75e',
              }}
            >
              Otorgar a las empresas un punto de encuentro rápido y sencillo de
              talentos que se interesen en sus proyectos presentes y futuros,
              para formar parte de sus equipos de desarrollo. Brindando un
              detalle de roles y tareas a desempeñar. Cubriendo las necesidades
              de ambos usuarios, se generan las oportunidades para conectarse
              entre si y crear vinculos profesionales.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundImage: `url(${bgequipo})`,
          }}
        >
          <Typography
            variant='h3'
            sx={{ textAlign: 'center', pt: 8, pb: 4, color: 'white' }}
          >
            ¿Quienes crearon NABIJASH?
          </Typography>

          <Typography
            sx={{
              pt: 3,
              pl: 50,
              pr: 50,
              fontSize: 25,
              display: 'flex',
              justifyContent: 'center',
              textAlign: 'center',
              flexWrap: 'wrap',
              alignItems: 'center',
              color: 'white',
            }}
          >
            Somos un equipo que se creo durante el recorrido del bootcamp de
            Henry. No estabamos en los mismos grupos pero nos logramos enlazar y
            desde ese momento no dejamos de trabajar juntos. Nos dimos cuenta
            que congeniamos de una maravillosa manera con resultados
            excepcionales.
          </Typography>
          <Typography
            sx={{
              fontStyle: 'italic',
              pt: 15,
              pl: 50,
              pr: 50,
              fontSize: 25,
              fontWeight: 'bolder',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              color: 'white',
            }}
          >
            "Henry nos dió grandes compañeros y colegas del mundo IT."
          </Typography>
          <Typography
            sx={{
              pt: 15,
              pl: 50,
              pr: 50,
              fontSize: 25,
              display: 'flex',
              justifyContent: 'center',
              textAlign: 'center',
              flexWrap: 'wrap',
              alignItems: 'center',
              color: 'white',
            }}
          >
            Nuestros objetivos siempre se destacan por la creación y desarrollo
            de herramientas útiles para que cualquier persona pueda incorporarse
            en el mundo de la programación. Así tambien, apuntamos a
            complementarnos de manera activa con todas las aptitudes de cada
            integrante del equipo fortaleciendonos y potenciandonos.
          </Typography>
          <Box
            sx={{
              px: 12,
            }}
          >
            <Box
              sx={{
                flexDirection: 'row',
                display: 'inline-flex',
                gap: '100px',
                pb: 10,
                pt: 20,
              }}
            >
              <Card
                sx={{
                  height: '500px',
                  width: '350px',
                  backgroundColor: '#1b384a',
                  borderRadius: '20px',
                  boxShadow:
                    'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
                }}
              >
                <CardMedia
                  sx={{ height: 350 }}
                  component='img'
                  image='../../public/assets/team/rivo.png'
                  alt='profilephoto'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' color='white'>
                    Alejandro
                  </Typography>
                  <Typography variant='body2' color='white'>
                    Es muy satisfactorio lograr objetivos, y para ello hay que
                    esforzarse cada día más. Si necesitas ayuda con algo, dime.
                  </Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  height: '500px',
                  width: '350px',
                  backgroundColor: '#1b384a',
                  borderRadius: '20px',
                  boxShadow:
                    'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
                }}
              >
                <CardMedia
                  sx={{ height: 350 }}
                  component='img'
                  image='../../public/assets/team/nacho.png'
                  alt='profilephoto'
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='div'
                    color='white'
                  >
                    Ignacio N.
                  </Typography>
                  <Typography variant='body2' color='white'>
                    Soy una persona que le motiva la programación, soy capaz de
                    entender los conceptos con rapidez y me desenvuelvo con
                    facilidad dentro de un grupo.
                  </Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  height: '500px',
                  width: '350px',
                  backgroundColor: '#1b384a',
                  borderRadius: '20px',
                  boxShadow:
                    'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
                }}
              >
                <CardMedia
                  sx={{ height: 350 }}
                  component='img'
                  image='../../public/assets/team/ampi.png'
                  alt='profilephoto'
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='div'
                    color='white'
                  >
                    Amparo
                  </Typography>
                  <Typography variant='body2' color='white'>
                    Me considero una persona que se adapta fácilmente, me gusta
                    aprender tecnologías nuevas y buscar variadas soluciones
                    dependiendo el objetivo.
                  </Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  height: '500px',
                  width: '350px',
                  backgroundColor: '#1b384a',
                  borderRadius: '20px',
                  boxShadow:
                    'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
                }}
              >
                <CardMedia
                  sx={{ height: 350 }}
                  component='img'
                  image='../../public/assets/team/silvana.png'
                  alt='profilephoto'
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='div'
                    color='white'
                  >
                    Silvana
                  </Typography>
                  <Typography variant='body2' color='white'>
                    Me caracterizo por ser una persona comprometida, proactiva e
                    interesante. Me gusta aprender y trabajar en equipo.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box
              sx={{
                flexDirection: 'row',
                display: 'inline-flex',
                gap: '100px',
                pb: 10,
              }}
            >
              <Card
                sx={{
                  height: '500px',
                  width: '350px',
                  backgroundColor: '#1b384a',
                  borderRadius: '20px',
                  boxShadow:
                    'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
                }}
              >
                <CardMedia
                  sx={{ height: 350 }}
                  component='img'
                  image='../../public/assets/team/hugo.png'
                  alt='profilephoto'
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='div'
                    color='white'
                  >
                    Hugo
                  </Typography>
                  <Typography variant='body2' color='white'>
                    Cuando tengo una meta, doy el 100% de mis capacidades para
                    cumplirla, soy una persona muy comprometida y me apasiona
                    programar!
                  </Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  height: '500px',
                  width: '350px',
                  backgroundColor: '#1b384a',
                  borderRadius: '20px',
                  boxShadow:
                    'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
                }}
              >
                <CardMedia
                  sx={{ height: 350 }}
                  component='img'
                  image='../../public/assets/team/nachito.png'
                  alt='profilephoto'
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='div'
                    color='white'
                  >
                    Ignacio S.
                  </Typography>
                  <Typography variant='body2' color='white'>
                    Soy alguien que le gusta trabajar en grupo y se desenvuelve
                    bien entre sus compañeros. Además de adoptar las tecnologías
                    nuevas que se presenten en cada proyecto.
                  </Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  height: '500px',
                  width: '350px',
                  backgroundColor: '#1b384a',
                  borderRadius: '20px',
                  boxShadow:
                    'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
                }}
              >
                <CardMedia
                  sx={{ height: 350 }}
                  component='img'
                  image='../../public/assets/team/jona.png'
                  alt='profilephoto'
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='div'
                    color='white'
                  >
                    Jonathan
                  </Typography>
                  <Typography variant='body2' color='white'>
                    Siempre hay que saber aprovechar las oportunidades que se
                    dan en nuestro camino. La vida es una sola y el tiempo no se
                    recupera. Soy perseverante y aplicado a mis objetivos.
                  </Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  height: '500px',
                  width: '350px',
                  backgroundColor: '#1b384a',
                  borderRadius: '20px',
                  boxShadow:
                    'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
                }}
              >
                <CardMedia
                  sx={{ height: 350 }}
                  component='img'
                  image='../../public/assets/team/brian.png'
                  alt='profilephoto'
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='div'
                    color='white'
                  >
                    Brian
                  </Typography>
                  <Typography gutterBottom variant='body2' color='white'>
                    Me caracterizo por ser una persona perseverante la cual no
                    sabe rendirse, por más que este casi todo perdido. Mis
                    valores y mi familia son los motivos por los cuales jamas
                    bajaré los brazos.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>
      </Box>
      
      <ContactForm />
    </>
  );
};

export default LandingPage;
