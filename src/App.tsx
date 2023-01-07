import { Provider } from 'react-redux';
import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';
import { ThemeProvider } from '@mui/material';
import theme from './styles/themeProvider';
import './App.css';
import { SnackBar } from './components/SnackBar/SnackBar';

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <div className="App">
                    <AppRouter />
                </div>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
