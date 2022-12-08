import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import StudensForm from '../components/Forms/StudensForm';
import CompanyForm from '../components/Forms/CompanyForm';
import NavBar from '../components/NavBar/NavBar';
import DashboardPage from '../pages/DashboardPage';
import ProyectCard from '../components/ProyectCard/ProyectCard'

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
                    <Route path='/dashboard' element={<NavBar/>}>
                        <Route index element={<DashboardPage/>}/>
                        {/* Aca va las cartas de las propuestas empresas/alumnos */}
                        <Route path='proyectos' element={<ProyectCard />}/>
                        {/* Aca va el componente de rivo empresas/alumnos */}
                        <Route path='student' element={<ProyectCard />}/>
                        {/* Aca va las cartas de las empresas/alumnos */}
                        <Route path='empresas' element={<ProyectCard />}/>
                    </Route>

                    {/* <Route path='/dashboardUser' element={<DashboardUser/>}/>
                    <Route path="/dashboardStudens" element={<DashboardStudens/>}/> */}
                 


                </Routes>
            </div>
        </BrowserRouter>
    )
}
