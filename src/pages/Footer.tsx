import Container from '@mui/material/Container';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <Paper
      sx={{ bottom: 0, backgroundColor: '#e2e2e2' }}
      component='footer'
      square
      variant='outlined'
    >
      <Container>
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
            backgroundColor: '#e2e2e2',
          }}
        >
          <Typography
            sx={{
              color: 'black',
              fontSize: '20px',
            }}
            variant='caption'
          >
            Copyright © NABIJASH
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
