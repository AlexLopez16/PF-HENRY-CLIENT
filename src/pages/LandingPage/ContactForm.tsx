import { Box, Button, FormControl, TextField, Typography } from '@mui/material';
import { FormEvent } from 'react';
import Header from '../../components/NavbarLandingPage/HeaderLanding';
import Footer from './Footer';

export default function ContactForm() {
  const handleOnChange = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
    <Box sx={{
      backgroundColor: 'black'
    }}>
      <Header />
      <form onSubmit={(e) => handleOnChange(e)}>
        <Box
          component='form'
          sx={{
            px: 80,
           mt: 25,
           mb:27.9,
          }}
          noValidate
          autoComplete='off'
        >
          <Typography
            variant='h4'
            sx={{
              textAlign: 'center',
              pt: 5,
              pb: 4,
              color: 'white',
              fontWeight: 'bold',
              fontFamily: 'poppins',
            }}
          >
            CONTÁCTANOS
          </Typography>
          <FormControl
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            <TextField
              id='name'
              label='Nombre'
              variant='outlined'
              margin='normal'
              sx={{
                '& .MuiInputLabel-root': { color: 'white' }, //styles the label
                '& .MuiOutlinedInput-root': {
                  '& > fieldset': { borderColor: 'white' },
                },
                input: { color: 'white' },
              }}
            />

            <TextField
              id='email'
              label='Email'
              variant='outlined'
              margin='normal'
              sx={{
                '& .MuiInputLabel-root': { color: 'white' }, //styles the label
                '& .MuiOutlinedInput-root': {
                  '& > fieldset': { borderColor: 'white' },
                },
                input: { color: 'white' },
              }}
            />

            <TextField
              id='messageText'
              label='Escribe tu mensaje'
              rows={5}
              margin='normal'
              sx={{
                '& .MuiInputLabel-root': { color: 'white' }, //styles the label
                '& .MuiOutlinedInput-root': {
                  '& > fieldset': { borderColor: 'white' },
                },
                input: { color: 'white' },
              }}
            />
            <Button
              type='submit'
              size='small'
              variant='contained'
              sx={{
                color: 'black',
                borderRadius: '10px',
                ml: '80%',
                fontFamily: 'poppins',
              }}
            >
              Enviar
            </Button>
          </FormControl>
        </Box>
      </form>
      <Footer />
      </Box>
    </>
  );
}
