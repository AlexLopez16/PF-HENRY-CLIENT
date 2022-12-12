import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import StudensForm from "../components/Forms/StudensForm";
import CompanyForm from "../components/Forms/CompanyForm";
import ProjectDetail from "../components/ProyectDetail/ProyectDetail";
import NavBar from '../components/NavBar/NavBar';
import DashboardPage from '../pages/DashboardPage';
import { Profile } from "../components/profile/Profile";
import { LoginScreen } from "../components/auth/LoginScreen";
import { Register } from "../components/Register/register";//

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
};

/**
 *
 * @returns
 */
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/register" element={< Register />}/>    
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/loginStudent" element={<StudensForm />} />
          <Route path="/loginCompany" element={<CompanyForm />} /> 
          <Route path='/dashboard' element={<NavBar/>}>
                <Route index element={<DashboardPage role="Student"/>}/>
                    {/* Aca va las cartas de las propuestas empresas/alumnos */}
                    <Route path='proyectos' element={<DashboardPage role="Student" />}/>
                    {/* Aca va el componente de rivo empresas/alumnos */}
                    <Route path='student' element={<Profile/>}/>
                    {/* Aca va las cartas de las empresas/alumnos */}
                </Route>

          <Route
            path="/projectdetail"
            element={
              <ProjectDetail
                name={ejemplo.name}
                empresa={ejemplo.empresa}
                imagen={ejemplo.imagen}
                detalle={ejemplo.detalle}
                cantidadDeEstudiantes={ejemplo.cantidadDeEstudiantes}
                lenguajes={ejemplo.lenguajes}
                estado={ejemplo.estado}
                email={ejemplo.email}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
