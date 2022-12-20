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
      light: '#fff',
      main: '#fff',
      dark:'#FFFF01',
      contrastText: '#000'
    },
  },
  

});

const theme = responsiveFontSizes(customThemProvider);

export default theme;
