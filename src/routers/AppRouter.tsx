import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import StudensForm from '../components/Forms/StudensForm';
import CompanyForm from '../components/Forms/CompanyForm';
import SearchBar from '../components/SearchBar/SearchBar';
import ProjectForm from '../components/Forms/ProjectForm';
import DashboardUser from '../pages/DashboardUser';

/**
 * 
 * @returns 
 */
export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>

                <Routes>        
                   

                    <Route path='/' element={<LandingPage />} />
                    <Route path='/loginStudent' element={<StudensForm />} />
                    <Route path='/loginCompany' element={<CompanyForm />} />
                    <Route path='/project' element={<ProjectForm />} />
                    <Route path='/search' element={<SearchBar />} />
                    <Route path='/dashboardStudent' element={<DashboardUser/>}/>
                


                </Routes>
            </div>
        </BrowserRouter>
    )
}
