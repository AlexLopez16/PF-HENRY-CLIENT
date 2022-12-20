import { FC } from 'react';
import { Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router';
import nabijashbg from '../../public/assets/nabijashbg.png';
import Header from '../components/NavbarLandingPage/HeaderLanding';


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
              sx={{ textAlign: 'center', pt: 20, color: 'white', fontFamily: 'poppins' }}
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
              fontFamily:'montserrat'
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
              p: 1,
              mr: 2,
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
                fontFamily: 'montserrat'
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
          <Box
            sx={{
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              pt: '100px'
            }}
          >
            <img
              src='../../public/assets/s.webp'
              style={{
                height: '350px',
                borderRadius: '50px',
                boxShadow:
                  'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LandingPage;
