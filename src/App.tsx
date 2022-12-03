import { Provider } from "react-redux";
import { AppRouter } from "./routers/AppRouter";
import { store } from "./store/store";
import { ThemeProvider, CssBaseline, createTheme} from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: [
      // '-apple-system',
      // 'BlinkMacSystemFont',
      // '"Segoe UI"',
      'Avenir Medium',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  // palette: {
  //   'mode': 'dark',
  //   // 'background': {
  //   //   'default': '#000000bf'
  //   // }
  // }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Provider store={store}>
          <div className="App">
            <AppRouter />
          </div>
        </Provider>
    </ThemeProvider>
  )
}

export default App
