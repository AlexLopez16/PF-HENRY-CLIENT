import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
} from '@mui/material';
import { Box, Container } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import aboutbg from '../../../public/assets/aboutbg.png';
import rivo from '../../../public/assets/team/rivo.png';
export default function Ale() {
  const navigate = useNavigate();

  const back = () => {
    navigate('/AboutUs');
  };
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${aboutbg})`,
          height: '1200px',
          alignItems: 'center',
        }}
      >
        <Button
          onClick={back}
          size='small'
          variant='contained'
          color='secondary'
          sx={{
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            fontFamily: 'montserrat',
            fontWeight: 'bold',
            mt: 5,
            justifyContent: 'center',
            textAlign: ' center',
            alignItems: 'center',
            ml: '47.5%',
          }}
        >
          Regresar
        </Button>
        <Container
          sx={{
            px: 12,
            justifyContent: 'center',
          }}
        >
          <Box
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
         
            mt: 10
          }}>   <Typography
              sx={{
                mt: 10,
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                color: 'white',
                fontFamily: 'montserrat',
                fontSize: '20px',
              }}
            >
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500, cuando un impresor
              (N. del T. persona que se dedica a la imprenta) desconocido usó
              una galería de textos y los mezcló de tal manera que logró hacer
              un libro de textos especimen. No sólo sobrevivió 500 años, sino
              que tambien ingresó como texto de relleno en documentos
              electrónicos, quedando esencialmente igual al original. Fue
              popularizado en los 60s con la creación de las hojas "Letraset",
              las cuales contenian pasajes de Lorem Ipsum, y más recientemente
              con software de autoedición, como por ejemplo Aldus PageMaker, el
              cual incluye versiones de Lorem Ipsum.
            </Typography>
            <img
              src='../../public/assets/team/rivo.png'
              height={400}
              width={350}
            />
            
          </Box>
          <Box>
            <Typography
              sx={{
                mt: 10,
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                color: 'white',
                fontFamily: 'montserrat',
                fontSize: '20px',
              }}
            >
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500, cuando un impresor
              (N. del T. persona que se dedica a la imprenta) desconocido usó
              una galería de textos y los mezcló de tal manera que logró hacer
              un libro de textos especimen. No sólo sobrevivió 500 años, sino
              que tambien ingresó como texto de relleno en documentos
              electrónicos, quedando esencialmente igual al original. Fue
              popularizado en los 60s con la creación de las hojas "Letraset",
              las cuales contenian pasajes de Lorem Ipsum, y más recientemente
              con software de autoedición, como por ejemplo Aldus PageMaker, el
              cual incluye versiones de Lorem Ipsum.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}

{
  /* <Typography variant='body2' color='white'>
Es muy satisfactorio lograr objetivos, y para ello hay que
esforzarse cada día más. Si necesitas ayuda con algo, dime.
</Typography> */
}
