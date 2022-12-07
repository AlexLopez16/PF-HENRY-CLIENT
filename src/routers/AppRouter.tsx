import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import UserForm from '../components/Forms/UserForm';
import CompanyForm from '../components/Forms/CompanyForm';
import SearchBar from '../components/SearchBar/SearchBar';
import ProjectForm from '../components/Forms/ProjectForm';
import DashboardUser from '../pages/DashboardUser';
import SideBar from '../components/SideBar/SideBar';


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>

                    <Route path='/' element={<LandingPage />} />
                    <Route path='/loginStudent' element={<UserForm />} />
                    <Route path='/loginCompany' element={<CompanyForm />} />
                    {/* VISUALIZE PROJECTFORM COMPONENT */}
                    <Route path='/project' element={<ProjectForm />} />

                    {/* VISUALIZE SIDEBAR COMPONENT */}
                    <Route path='/sidebar' element={<SideBar />}/>

                    <Route path='/search' element={<SearchBar />} />
                    <Route path='/dashboardStudent' element={<DashboardUser/>}/>


                </Routes>
            </div>
        </BrowserRouter>
    )
}
