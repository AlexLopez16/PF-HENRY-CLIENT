import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import { wrap } from 'module';
import { FC } from 'react';
import Header from '../components/NavbarLandingPage/HeaderLanding';

const AboutUsPage: FC = () => {
  return (
    <>
      <Header />
      <Box sx={{ backgroundColor: 'black' }}>
        <Typography
          variant='h3'
          sx={{ textAlign: 'center', pt: 20, pb: 4, color: 'white' }}
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
          desde ese momento no dejamos de trabajar juntos. Nos dimos cuenta que
          congeniamos de una maravillosa manera con resultados excepcionales.
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
          Nuestros objetivos siempre se destacan por la creación y desarrollo de
          herramientas útiles para que cualquier persona pueda incorporarse en
          el mundo de la programación. Así tambien, apuntamos a complementarnos
          de manera activa con todas las aptitudes de cada integrante del equipo
          fortaleciendonos y potenciandonos.
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
              flexWrap: 'wrap',
              gap: '100px',
              pb: 10,
              pt: 20,
              pl: 12,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
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
                sx={{ height: 300, width: 300 }}
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
                height: '400px',
                width: '300px',
                backgroundColor: '#1b384a',
                borderRadius: '20px',
                boxShadow:
                  'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
              }}
            >
              <CardMedia
                sx={{ height: 300, width: 300 }}
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
                height: '400px',
                width: '300px',
                backgroundColor: '#1b384a',
                borderRadius: '20px',
                boxShadow:
                  'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
              }}
            >
              <CardMedia
                sx={{ height: 300, width: 300 }}
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
                height: '400px',
                width: '300px',
                backgroundColor: '#1b384a',
                borderRadius: '20px',
                boxShadow:
                  'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
              }}
            >
              <CardMedia
                sx={{ height: 300, width: 300 }}
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
              flexWrap: 'wrap',
              gap: '100px',
              pb: 10,
              pl: 12,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
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
                sx={{ height: 300, width: 300 }}
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
                height: '400px',
                width: '300px',
                backgroundColor: '#1b384a',
                borderRadius: '20px',
                boxShadow:
                  'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
              }}
            >
              <CardMedia
                sx={{ height: 300, width: 300 }}
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
                height: '400px',
                width: '300px',
                backgroundColor: '#1b384a',
                borderRadius: '20px',
                boxShadow:
                  'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
              }}
            >
              <CardMedia
                sx={{ height: 300, width: 300 }}
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
                  Siempre hay que saber aprovechar las oportunidades que se dan
                  en nuestro camino. La vida es una sola y el tiempo no se
                  recupera. Soy perseverante y aplicado a mis objetivos.
                </Typography>
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
                sx={{ height: 300, width: 300 }}
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
                  sabe rendirse, por más que este casi todo perdido. Mis valores
                  y mi familia son los motivos por los cuales jamas bajaré los
                  brazos.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default AboutUsPage;
