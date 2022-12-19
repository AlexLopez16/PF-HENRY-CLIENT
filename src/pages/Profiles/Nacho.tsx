import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    CardActions,
  } from '@mui/material';
  import { Box, Container } from '@mui/system';
  import { FC } from 'react';
  import { useNavigate } from 'react-router-dom';
  
  export default function Ale() {
    const navigate = useNavigate();
  
    const AleClick = () => {
      navigate('/Ale');
    };
    return (
      <>
        <Box sx={{ backgroundColor: 'black' }}>
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
                justifyContent: 'center',
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
                sx={{ height: 260, width: 300 }}
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
                <CardActions>
                <Button onClick={Nacho} size='small'>Más info</Button>
              </CardActions>
                <Typography variant='body2' color='white'>
                  Soy una persona que le motiva la programación, soy capaz de
                  entender los conceptos con rapidez y me desenvuelvo con
                  facilidad dentro de un grupo.
                </Typography>
              </CardContent>
            </Card>
            </Box>
          </Box>
        </Box>
      </>
    );
  };