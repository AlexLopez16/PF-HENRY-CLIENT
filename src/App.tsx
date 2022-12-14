import { Provider } from 'react-redux';
import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';
import { ThemeProvider } from '@mui/material';
import theme from './styles/themeProvider';
import './App.css';

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
