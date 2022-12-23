import { FC } from 'react';
import DashboardStudens from '../components/student/DashboardStudent';
import DashboardCompany from '../components/company/DashboardCompany';
import DashboardAdmin from '../components/Admin/DashaboardAdmin';
import { useSelect } from '@mui/base';
import { useSelector } from 'react-redux';
import { State } from '../reducers/rootReducer';

const DashboardPage: any = () => {
    // const rol = localStorage.getItem('rol');

    let rol = useSelector((state: State) => state.auth.data.rol);

    return rol === 'STUDENT_ROL'
        ? <DashboardStudens />
        : rol === 'ADMIN_ROL'
            ? <DashboardAdmin />
            : rol === 'COMPANY_ROL'
            ?? <DashboardCompany />
};

export default DashboardPage;
