import { FC } from 'react';
import DashboardStudent from '../components/student/DashboardStudent';
import DashboardCompany from '../components/company/DashboardCompany';
import DashboardAdmin from '../components/Admin/DashaboardAdmin';
import { useSelect } from '@mui/base';
import { useSelector } from 'react-redux';
import { State } from '../reducers/rootReducer';
import ProjectsStudents from '../components/student/ProjectsStudents';

const DashboardPage: any = () => {
    // const rol = localStorage.getItem('rol');

    let rol = useSelector((state: State) => state.auth.data.rol);

    return rol === 'STUDENT_ROL' ? (
        <ProjectsStudents />
    ) : rol === 'COMPANY_ROL' ? (
        <ProjectsStudents />
    ) : (
        rol === 'ADMIN_ROL' ?? <DashboardAdmin />
    );
};

export default DashboardPage;
