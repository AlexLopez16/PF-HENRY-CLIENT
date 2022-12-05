import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import UserForm  from '../components/Forms/UserForm';
import CompanyForm from '../components/Forms/CompanyForm';
import SearchBar from '../components/SearchBar/SearchBar';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>        
                   
                    <Route path='/' element={<LandingPage />} /> 
                    <Route path='/loginUser' element={<UserForm />} />
                    <Route path='/loginCompany' element={<CompanyForm />} /> 
                    <Route path='/search' element={<SearchBar />} />

                </Routes>
            </div>
        </BrowserRouter>
    )
}
