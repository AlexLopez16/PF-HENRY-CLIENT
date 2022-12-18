import { Box, Button, Container, FormControl, TextField, Typography } from '@mui/material';
import Header from '../components/NavbarLandingPage/HeaderLanding';

export default function ContactForm() {
  const handleOnChange = (e) => {
    e.preventDefault();
    alert('añerta');
  };

  return (
    <>
    <Header /><form onSubmit={(e) => handleOnChange(e)}>
      <Box
        component='form'
        sx={{
          backgroundColor: '#e2e2e2',
          px: 70,
          pb: 10,
          pt: 25,
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
            color: '#1b384a',
            fontWeight: 'bold',
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
            color='secondary'
            id='name'
            label='Nombre'
            variant='outlined'
            margin='normal' />

          <TextField
            color='secondary'
            id='email'
            label='Email'
            variant='outlined'
            margin='normal' />

          <TextField
            color='secondary'
            id='messageText'
            label='Escribe tu mensaje'
            multiline
            rows={4}
            margin='normal' />
          <Button
            type='submit'
            size='small'
            variant='contained'
            sx={{
              color: 'black',
              borderRadius: '10px',
              ml: '80%',
            }}
          >
            Enviar comentario
          </Button>
        </FormControl>
      </Box>
    </form></>
  );
}
