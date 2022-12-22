import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const customThemProvider = createTheme({
  palette: {
    primary: {
      light: '#000',
      main: '#FFFF01',
      dark:'#fff',
      contrastText: '#000'
      
    },
    secondary: {
      light: '#0000',
      main: '#fff',
      dark:'#FFFF01',
      contrastText: '#000'
    },
    info:{
      light: '#000',
      main: '#000',
      dark:'#000',
      contrastText: '#000'
    }
  },
  

});

const theme = responsiveFontSizes(customThemProvider);

export default theme;
