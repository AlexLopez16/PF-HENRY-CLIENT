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
import Alejandro from "../../assets/team/rivo.png";


export default function Ale() {
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
          "Es muy satisfactorio lograr objetivos, y para ello hay que esforzarse
          cada día más. Si necesitas ayuda con algo, dime."
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
          Alejandro Lopez
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
          image={Alejandro}
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
              href='https://github.com/AlexLopez16'
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
              href='https://www.linkedin.com/in/alexlopzr/'
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

{
  /* <Typography variant='body2' color='white'>
Es muy satisfactorio lograr objetivos, y para ello hay que
esforzarse cada día más. Si necesitas ayuda con algo, dime.
</Typography> */
}
