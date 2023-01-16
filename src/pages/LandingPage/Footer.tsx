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
    <Box
      sx={{
        position: 'sticky bottom-0',
        backgroundColor: '#1b384a',
      }}
    >
      <Container>
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pb: 1,
            pt: 1,
          }}
        >
          <img
            src={logo}
            style={{
              marginBottom: 10,
              height: 50,
              alignItems: 'center',
            }}
          />
        </Container>
        <hr
          style={{
            marginBottom: 10,
          }}
        />
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              color: 'white',
              fontSize: 15,
            }}
            variant='caption'
          >
            Copyright © NABIJASH
          </Typography>
        </Container>
      </Container>
    </Box>
  );
}
