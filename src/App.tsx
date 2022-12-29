import { Provider } from 'react-redux';
import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/themeProvider';

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