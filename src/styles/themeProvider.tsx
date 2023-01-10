import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const customThemProvider = createTheme({
  palette: {
    primary: {
      light: '#000',
      main: '#FFFF01',
      dark: '#fff',
      contrastText: '#000',
    },
    secondary: {
      light: '#0000',
      main: '#fff',
      dark: '#ffff01',
      contrastText: '#000',
    },
    info: {
      main: 'black',
      light: '#fff',
      dark: 'green',
      contrastText: '#fff',
    },
  }
});

const theme = responsiveFontSizes(customThemProvider);

export default theme;
