import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage';
import StudensForm from '../components/student/StudentForm';
import CompanyForm from '../components/company/CompanyForm';
import DashboardPage from '../pages/DashboardPage';
import { Profile } from '../components/student/profile/Profile';
import { LoginScreen } from '../components/auth/LoginScreen';
import AboutUsPage from '../pages/LandingPage/AboutUsPage';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import ProjectForm from '../components/project/ProjectForm';
import { HomePage } from '../pages/HomePage';
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
import ProjectsPage from '../pages/ProjectsPage';
import MyProjectsPage from '../pages/MyProjectsPage';
import ProjectsStudents from '../components/student/ProjectsStudents';
import { ProfileCompany } from '../components/company/Profile/ProfileCompany';
import AdminStudent from '../components/Admin/AdminStudent/AdminStudent';
import Postulated from '../components/company/Postulated';

import AdminCompany from '../components/Admin/AdminCompany/AdminCompany';
import AdminProject from '../components/Admin/AdminProject/AdminProject';
import AdminAcceptProject from '../components/Admin/AdminProject/AdminAcceptProject';
import { Checkout } from '../pages/Checkout';
import SideBar from '../components/Admin/SideBar/SideBar';
import DashboardAdmin from '../components/Admin/DashboardAdmin';
import { RatingMail } from '../components/project/RatingMail';

import { VerifyEmail } from '../components/VerifyEmail/VerifyEmail';
import { ProfileAdmin } from '../components/Admin/Profile/ProfileAdmin';
import { ApplicationForm } from '../components/project/ApplicationForm';
import AdminReviews from '../components/Admin/AdminReviews/AdminReviews';
import { PrivateAdmin } from './PrivateAdmin';
import { CompanyDetail } from '../components/company/CompanyDetail';
import AdminPanel from '../components/Admin/AdminPanel/AdminPanel';
import AdminForm from '../components/Admin/AdminPanel/AdminForm';
import { VerifyEmailCompany } from '../components/VerifyEmail/VerifyEmailCompany';

export const AppRouter = () => {
    let { id } = useParams();
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route
                        path="/verifyemail"
                        element={
                            <PrivateRoute>
                                <>
                                    <NavBar />
                                    <VerifyEmail />
                                </>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/verifyemailWithCompany"
                        element={
                            <PublicRoute>
                                <>
                                    <VerifyEmailCompany />
                                </>
                            </PublicRoute>
                        }
                    />
                    <Route
                        path="/company/:id"
                        element={
                            <PrivateRoute>
                                <>
                                    <NavBar />
                                    <CompanyDetail />
                                </>
                            </PrivateRoute>
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
                    {/* <Route */}
                    {/* // path="/dashboard" */}
                    {/* // element={ */}
                    {/* // <PrivateRoute> */}
                    {/* <> */}
                    {/* <NavBar /> */}
                    {/* <HomePage /> */}
                    {/* <DashboardPage /> */}
                    {/* </> */}
                    {/* </PrivateRoute> */}
                    {/* // } */}
                    {/* // /> */}
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
                        path="/projects/:id"
                        element={
                            <PrivateRoute>
                                <>
                                    <NavBar />
                                    <ProjectPage />
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
                        path="/newproject"
                        element={
                            <PrivateRoute>
                                <ProjectForm />
                            </PrivateRoute>
                        }
                    />
                    TODO: revisar esto
                    <Route
                        path="/postulatedForm/:id"
                        element={
                            <PrivateRoute>
                                <ApplicationForm />
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
                        path="/dashboard"
                        element={
                            <PrivateAdmin>
                                <SideBar />
                            </PrivateAdmin>
                        }
                    >
                        <Route index element={<DashboardAdmin />}></Route>
                        <Route
                            path="graphs"
                            element={<DashboardAdmin />}
                        ></Route>
                        <Route
                            path="students"
                            element={<AdminStudent />}
                        ></Route>
                        <Route
                            path="companies"
                            element={<AdminCompany />}
                        ></Route>
                        <Route
                            path="projects"
                            element={<AdminProject />}
                        ></Route>
                        <Route
                            path="aceptProjects"
                            element={<AdminAcceptProject />}
                        ></Route>
                        <Route
                            path="profileAdmin"
                            element={<ProfileAdmin />}
                        ></Route>
                        <Route path="admins" element={<AdminPanel />}></Route>
                        <Route
                            path="getReviews"
                            element={<AdminReviews />}
                        ></Route>
                        <Route
                            path="createAdmin"
                            element={<AdminForm />}
                        ></Route>
                    </Route>
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
                    <Route path="/getreviews" element={<AdminReviews />} />
                    <Route
                        path="/postulated/:id"
                        element={
                            <PrivateRoute>
                                <>
                                    <NavBar />
                                    <Postulated />
                                </>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/rating"
                        element={
                            <>
                                <RatingMail />
                            </>
                        }
                    />
                    <Route path="/checkout/" element={<Checkout />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};
