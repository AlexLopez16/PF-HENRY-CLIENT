import { useNavigate } from 'react-router-dom';
import {
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  FormControl,
  Grid,
  Box,
  Container
} from '@mui/material';

import aboutbg from '../../assets/aboutbg.png';
import HugoS from "../../assets/team/hugo.png";

export default function Hugo() {
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
          "Cuando tengo una meta, doy el 100% de mis capacidades para cumplirla,
          soy una persona muy comprometida y me apasiona programar!"
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
          Hugo Sciangula
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
          image={HugoS}
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
