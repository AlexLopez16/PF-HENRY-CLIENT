import { Provider } from 'react-redux';
import { LoginScreen } from './components/auth/LoginScreen';
// import { ProyectForm } from "./components/Forms/ProyectForm";
import { ProfileCompany } from "./components/company/Profile/ProfileCompany"
import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/themeProvider';
import Footer from './pages/LandingPage/Footer';
import ProjectForm from './components/project/ProjectForm';

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <div className="App">
               

          {/* <ProfileCompany/> */}

                    <AppRouter />
                
                </div>
            </ThemeProvider>
        </Provider>
    );
}

export default App;