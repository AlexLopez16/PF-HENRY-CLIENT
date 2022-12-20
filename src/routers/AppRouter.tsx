import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import StudensForm from "../components/student/StudentForm";
import CompanyForm from "../components/company/CompanyForm";
import ProjectDetail from "../components/project/ProjectDetail";
import NavBar from "../components/ui/NavBar";
import DashboardPage from "../pages/DashboardPage";
import { Profile } from "../components/student/profile/Profile";
import { LoginScreen } from "../components/auth/LoginScreen";
import AboutUsPage from "../pages/AboutUsPage";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import ProjectForm from "../components/project/ProjectForm";
import ProjectCard from "../components/project/ProjectCard";
import { HomePage } from "../pages/HomePage";
import { Nabvar } from "../components/maquetas/Nabvar";
import { Register } from "../pages/PageRegister";
import { ProjectPage } from "../pages/ProjectPage";
import ContactForm from "../pages/ContactForm";
import { ForgotPassword } from "../components/auth/ForgotPaswword";
import { PasswordRecover } from "../components/auth/PasswordRecover";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginScreen />
              </PublicRoute>
            }
          />

          <Route
            path="/signup/student"
            element={
              <PublicRoute>
                <StudensForm />
              </PublicRoute>
            }
          />
          <Route
            path="/signup/company"
            element={
              <PublicRoute>
                <CompanyForm />
              </PublicRoute>
            }
          />

          <Route
            path="/home"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />

          <Route
            path="/project"
            element={
              <PrivateRoute>
                <ProjectPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/newProject"
            element={
              // <PrivateRoute>
              <ProjectForm />
              // </PrivateRoute>
            }
          />
          <Route
            path="/aboutUs"
            element={
              // <PrivateRoute>
              <AboutUsPage />
              // </PrivateRoute>
            }
          />
          <Route
            path="/landing"
            element={
              // <PrivateRoute>
              <LandingPage />
              // </PrivateRoute>
            }
          />
          <Route
            path="/contact"
            element={
              // <PrivateRoute>
              <ContactForm />
              // </PrivateRoute>
            }
          />

          <Route path="/forgotPassword" element={<ForgotPassword />} />

          <Route path="/recoverPassword" element={<PasswordRecover />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
