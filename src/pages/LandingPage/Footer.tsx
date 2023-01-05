import Container from '@mui/material/Container';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

export default function Footer() {
  return (
    <Paper
      sx={{ bottom: 0, backgroundColor: '#1b384a',  }}
      component='footer'
      square
      variant='outlined'
    >

        <Box
          sx={{
           
            flexGrow: 1,
            justifyContent: 'center',
            display: 'flex',
            py: 1,
          }}
        ></Box>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: 'center',
            display: 'flex',
            pb: 2,
            backgroundColor: '#1b384a',
          }}
        >
          <Typography
            sx={{
              color: 'white',
              fontSize: '20px',
            }}
            variant='caption'
          >
            Copyright © NABIJASH
          </Typography>
        </Box>
   
    </Paper>
  );
}
