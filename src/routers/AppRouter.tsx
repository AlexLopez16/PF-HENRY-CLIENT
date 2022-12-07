import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import StudensForm from '../components/Forms/StudensForm';
import CompanyForm from '../components/Forms/CompanyForm';
import ProjectForm from '../components/Forms/ProjectForm';
import DashboardUser from '../pages/DashboardUser';
import DashboardStudens from '../pages/DashboardStudens';
import NavBar from '../components/NavBar/NavBar';

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
                    {/* VISUALIZE PROJECTFORM COMPONENT */}
                    <Route path='/project' element={<ProjectForm />} />

                    {/* VISUALIZE NAVBAR COMPONENT */}
                    <Route path='/navbar' element={<NavBar />}/>

                    <Route path='/dashboardUser' element={<DashboardUser/>}/>
                    <Route path="/dashboardStudens" element={<DashboardStudens/>}/>
                 


                </Routes>
            </div>
        </BrowserRouter>
    )
}
