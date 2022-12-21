import {
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  FormControl,
  Grid,
} from '@mui/material';
import { Box, Container } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import aboutbg from '../../../public/assets/aboutbg.png';

export default function Nachito() {
  const navigate = useNavigate();

  const back = () => {
    navigate('/AboutUs');
  };
  return (
    <Grid
      container
      direction='column'
      justifyContent='flex-start'
      alignItems='center'
      sx={{
        backgroundImage: `url(${aboutbg})`,
        height: '870px',
      }}
    >
     
      <FormControl
        sx={{
          px: 50,
          mt: 10,
        }}
      >
        <Typography
          sx={{
            textAlign: 'center',
            color: 'white',
            fontFamily: 'montserrat',
            fontSize: '20px',
            fontStyle: 'italic',
          }}
        >
          "Soy alguien que le gusta trabajar en grupo y se desenvuelve bien
          entre sus compañeros. Además de adoptar las tecnologías nuevas que se
          presenten en cada proyecto."
        </Typography>
      </FormControl>
      <Box
        sx={{
          height: '450px',
          width: '450px',
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
          Ignacio Sanchez Girard
        </Typography>
        <CardMedia
          sx={{
            height: '300px',
            width: '300px',
            borderRadius: '20px',
            mt: '10px',
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            ml: 9.3,
          }}
          component='img'
          image='../../public/assets/team/nachito.png'
          alt='profilephoto'
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='subtitle1'
            color='white'
            fontFamily='montserrat'
            textAlign='center'
          ></Typography>
          <CardActions
            sx={{
              justifyContent: 'center',
            }}
          >
            <Button
              href='https://github.com/IgnacioSanchezGirard'
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
              href='https://www.linkedin.com/in/ignacio-sanchez-/'
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
          <Container
            sx={{
              textAlign: 'center',
            }}
          ></Container>
        </CardContent>
      </Box>
      <FormControl>
        <Button
          onClick={back}
          size='small'
          variant='contained'
          color='secondary'
          sx={{
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            fontFamily: 'montserrat',
            fontWeight: 'bold',
            mt: 8,
          }}
        >
          Regresar
        </Button>
      </FormControl>
    </Grid>
  );
}
