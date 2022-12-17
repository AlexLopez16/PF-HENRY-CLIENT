import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const customThemProvider = createTheme({
  palette: {
    primary: {
      light: '#000',
      main: '#FFFF01',
      dark:'#fff',
      
    },
    secondary: {
      light: '#000',
      main: '#000',
      dark:'#fff',
    },
  },
  
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Montserrat',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

const theme = responsiveFontSizes(customThemProvider);

export default theme;
