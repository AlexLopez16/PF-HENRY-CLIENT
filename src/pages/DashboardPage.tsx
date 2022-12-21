import { FC } from 'react';
import DashboardStudens from '../components/student/DashboardStudent';
import DashboardCompany from '../components/company/DashboardCompany';

const DashboardPage: FC = () => {
    const rol = localStorage.getItem('rol');

    return rol === 'STUDENT_ROL' ? <DashboardStudens /> : <DashboardCompany />;
    //role === 'Student' ? <DashStudent/> : <DashCompany/>
};

export default DashboardPage;
