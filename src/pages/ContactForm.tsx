import { Box, Button, FormControl, TextField, Typography } from '@mui/material';
import Header from '../components/NavbarLandingPage/HeaderLanding';

export default function ContactForm() {
  const handleOnChange = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <form onSubmit={(e) => handleOnChange(e)}>
        <Box
          component='form'
          sx={{
            backgroundColor: 'black',
            px: 70,
            pb: 10,
            pt: 25,
            height: '870px',
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
    </>
  );
}
