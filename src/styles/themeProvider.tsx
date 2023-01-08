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
      main: '#0288d1',
      light: '#03a9f4',
      dark: '#01579b',
      contrastText: '#fff',
    },

    // standard: {
    //   main: '#000',
    //   light: '#03a9f4',
    //   dark: '#388e3c',
    // },
  },
});

const theme = responsiveFontSizes(customThemProvider);

export default theme;
