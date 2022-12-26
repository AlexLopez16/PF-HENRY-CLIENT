import { FC } from 'react';
import DashboardStudens from '../components/student/DashboardStudent';
import DashboardCompany from '../components/company/DashboardCompany';
import { useSelector } from 'react-redux';
import { State } from '../reducers/rootReducer';

const DashboardPage: FC = () => {
    const { rol } = useSelector((state: State) => state.auth.data);
    
    return rol === 'STUDENT_ROL'
        ? <DashboardStudens />
        : <DashboardCompany />
};

export default DashboardPage;
