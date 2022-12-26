import { FC } from 'react';
import DashboardStudent from '../components/student/DashboardStudent';
import DashboardCompany from '../components/company/DashboardCompany';
import { useSelector } from 'react-redux';
import { State } from '../reducers/rootReducer';

const DashboardPage: FC = () => {
    const { rol } = useSelector((state: State) => state.auth.data);

    let role = rol

    return rol === 'STUDENT_ROL' ? <DashboardStudent /> : <DashboardCompany />;
    //role === 'Student' ? <DashStudent/> : <DashCompany/>
};

export default DashboardPage;
