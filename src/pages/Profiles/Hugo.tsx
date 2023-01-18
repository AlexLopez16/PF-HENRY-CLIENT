import { useNavigate } from 'react-router-dom';
import {
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  Box,
  Container,
} from '@mui/material';

import aboutbg from '../../assets/aboutbg.png';
import HugoS from '../../assets/team/hugo.png';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Footer from '../LandingPage/Footer';
export default function Hugo() {
  const navigate = useNavigate();

  const back = () => {
    navigate('/AboutUs');
  };
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${aboutbg})`,
        }}
      >
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            flexWrap: 'wrap',
          }}
        >
          <Typography
            sx={{
              textAlign: 'center',
              color: 'white',
              fontFamily: 'montserrat',
              fontSize: '20px',
              fontStyle: 'italic',
              mt: 15,
              backgroundColor: 'black',
              borderRadius: 5,
            }}
          >
            "Cuando tengo una meta, doy el 100% de mis capacidades para
            cumplirla, soy una persona muy comprometida y me apasiona
            programar!"
          </Typography>
          <Box
            sx={{
              height: '100%',
              width: '100%',
              backgroundColor: '#1b384a',
              borderRadius: '20px',
              boxShadow:
                'box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;',
              mt: 10,
            }}
          >
            <Typography
              gutterBottom
              variant='h5'
              color='white'
              fontFamily='montserrat'
              textAlign='center'
              marginTop='20px'
            >
              Hugo Sciangula
            </Typography>
            <Container
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'column',
                alignContent: 'center',
              }}
            >
              <CardMedia
                sx={{
                  height: 300,
                  width: 300,
                  borderRadius: 5,
                  mt: 2,
                  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                }}
                component='img'
                image={HugoS}
                alt='profilephoto'
              />
              <CardContent>
                <CardActions
                  sx={{
                    justifyContent: 'center',
                  }}
                >
                  <Button
                    href='https://github.com/sciangulahugo'
                    rel='noopener noreferrer'
                    target='_blank'
                    size='small'
                    variant='contained'
                    color='secondary'
                    sx={{
                      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                      fontFamily: 'montserrat',
                      fontWeight: 'bold',
                    }}
                  >
                    GitHub
                  </Button>
                  <Button
                    href='https://www.linkedin.com/in/sciangulahugo'
                    rel='noopener noreferrer'
                    target='_blank'
                    size='small'
                    variant='contained'
                    color='secondary'
                    sx={{
                      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                      fontFamily: 'montserrat',
                      fontWeight: 'bold',
                    }}
                  >
                    LinkedIn
                  </Button>
                </CardActions>
              </CardContent>
            </Container>
          </Box>

          <Button
            startIcon={<ArrowBackIosNewIcon />}
            onClick={back}
            size='small'
            variant='contained'
            color='secondary'
            sx={{
              boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
              fontFamily: 'montserrat',
              fontWeight: 'bold',
              mt: 8,
              mb: 10,
            }}
          >
            Regresar
          </Button>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
