import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage';
import StudensForm from '../components/student/StudentForm';
import CompanyForm from '../components/company/CompanyForm';
import ProjectDetail from '../components/project/ProjectDetail';
// import NavBar from "../components/ui/NavBar";
import DashboardPage from '../pages/DashboardPage';
import { Profile } from '../components/student/profile/Profile';
import { LoginScreen } from '../components/auth/LoginScreen';
import AboutUsPage from '../pages/LandingPage/AboutUsPage';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import ProjectForm from '../components/project/ProjectForm';
import ProjectCard from '../components/project/ProjectCard';
import { HomePage } from '../pages/HomePage';
// import { Nabvar } from "../components/maquetas/Nabvar";
import NavBar from '../components/NavBar/NavBar';
import { Register } from '../pages/PageRegister';
import { ProjectPage } from '../pages/ProjectPage';
import ContactForm from '../pages/LandingPage/ContactForm';
import { ForgotPassword } from '../components/auth/ForgotPaswword';
import { PasswordRecover } from '../components/auth/PasswordRecover';
import Ale from '../pages/Profiles/Ale';
import Ampi from '../pages/Profiles/Ampi';
import Brian from '../pages/Profiles/Brian';
import Hugo from '../pages/Profiles/Hugo';
import Jona from '../pages/Profiles/Jona';
import Nachito from '../pages/Profiles/Nachito';
import Nacho from '../pages/Profiles/Nacho';
import Sil from '../pages/Profiles/Sil';

import MyProject from '../components/student/MyProjectStudent';
import ProjectsPage from '../pages/ProjectsPage';
import MyProjectsPage from '../pages/MyProjectsPage';
import ProjectsStudents from '../components/student/ProjectsStudents';
import { ProfileCompany } from '../components/company/Profile/ProfileCompany';
import AdminStudent from '../components/Admin/AdminStudent';
import Postulated from '../components/company/Postulated';
import { Checkout } from '../pages/Checkout';

export const AppRouter = () => {
    let { id } = useParams();
    // console.log(id);

    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <LandingPage />
                        }
                    />

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
                                <>
                                    <NavBar />
                                    <DashboardPage />
                                </>
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="/projects"
                        element={
                            <PrivateRoute>
                                <>
                                    <NavBar />
                                    <ProjectsPage />
                                </>
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="/myprojects"
                        element={
                            <PrivateRoute>
                                <>
                                    <NavBar />
                                    <MyProjectsPage />
                                </>
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
                        path="/newproject"
                        element={
                            <PrivateRoute>
                                <ProjectForm />
                            </PrivateRoute>
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
                    <Route
                        path="/profileCompany"
                        element={
                            <PrivateRoute>
                                <>
                                    <NavBar />
                                    <ProfileCompany />
                                </>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/profile"
                        element={
                            <PrivateRoute>
                                <>
                                    <NavBar />
                                    <Profile />
                                </>
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="/adminSt"
                        element={
                            <PrivateRoute>
                                <AdminStudent />
                            </PrivateRoute>
                        }
                    />

                    {/* PROFILE ROUTES */}

                    <Route path="/Ale" element={<Ale />} />
                    <Route path="/Ampi" element={<Ampi />} />
                    <Route path="/Brian" element={<Brian />} />
                    <Route path="/Hugo" element={<Hugo />} />
                    <Route path="/Jona" element={<Jona />} />
                    <Route path="/Nachito" element={<Nachito />} />
                    <Route path="/Nacho" element={<Nacho />} />
                    <Route path="/Sil" element={<Sil />} />

                    <Route
                        path="/forgotPassword"
                        element={<ForgotPassword />}
                    />

                    <Route
                        path="/recoverPassword"
                        element={<PasswordRecover />}
                    />
                    <Route path="/p" element={<ProjectsStudents />} />
                    {/* <Route
            path="/companyProject"
            element={
                <>
                <NavBar />
              <PrivateRoute>
                <ProjectCompany />
              </PrivateRoute>
              </>
            }
          /> */}
                    <Route
                        path="/postulated/:id"
                        element={
                            <PrivateRoute>
                                <Postulated />
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path='/checkout/'
                        element={
                            <Checkout />
                        }
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
};
