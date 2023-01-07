import Container from '@mui/material/Container';
import logo from '../../assets/NABIJASH.png';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Footer() {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: '#1b384a',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Container
          sx={{
            alignContent: 'center',
            alignItems: 'center',
            pb: 5,
            pt: 5,
          }}
        >
          <img
            src={logo}
            style={{
              marginBottom: 10,
              marginTop: 10,
              height: 50,
              marginLeft: '42%',
            }}
          />

          <hr
            style={{
              marginBottom: 15,
            }}
          />
          <Box
            sx={{
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              sx={{
                color: 'white',
                fontSize: 15,
                marginLeft: '42.5%',
              }}
              variant='caption'
            >
              Copyright © NABIJASH
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
