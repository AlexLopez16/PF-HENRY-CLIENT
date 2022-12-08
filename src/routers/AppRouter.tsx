import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import StudensForm from '../components/Forms/StudensForm';
import CompanyForm from '../components/Forms/CompanyForm';
import SearchBar from '../components/SearchBar/SearchBar';
import ProjectForm from '../components/Forms/ProjectForm';
import DashboardCompany from '../pages/DashboardCompany';
import DashboardStudens from '../pages/DashboardStudens';
import ProjectDetail from '../components/ProyectDetail/ProyectDetail';

const ejemplo = {

    name: "E-Comers",
    empresa: "Mercado libre",
    imagen:
    "https://thumbs.dreamstime.com/z/c%C3%B3digo-fuente-de-escritorio-y-papel-pintado-por-lenguaje-programaci%C3%B3n-con-codi-124706065.jpg",
    detalle:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veniam adipisci eos labore tempora repellat alias neque hic voluptatibus laborum reiciendis quas dolor voluptatum totam, cum molestias excepturi cumque illo      Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veniam adipisci eos labore tempora repellat alias neque hic voluptatibus laborum reiciendis quas dolor voluptatum totam, cum molestias excepturi cumque illo.",
    cantidadDeEstudiantes: "4",
    lenguajes: "java",
    estado: "reclutando",
    email: "fulanito@nabijash.com",
  }

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
                    <Route path='/dashboardCompany' element={<DashboardCompany/>}/>
                 <Route path="/dashboardStudens" element={<DashboardStudens/>}/>
                 <Route path="/projectdetail" element={<ProjectDetail name={ejemplo.name} empresa={ejemplo.empresa}
imagen={ejemplo.imagen}
detalle={ejemplo.detalle}
cantidadDeEstudiantes={ejemplo.cantidadDeEstudiantes}
lenguajes={ejemplo.lenguajes}
estado={ejemplo.estado}
email={ejemplo.email} />}/>           


                </Routes>
            </div>
        </BrowserRouter>
    )
}
