import { FC } from 'react';
import DashboardStudens from '../components/student/DashboardStudent';
import DashboardCompany from '../components/company/DashboardCompany';
import { useSelector } from 'react-redux';
import { State } from '../reducers/rootReducer';
import { MyProjectCompany } from '../components/project/MyProjectCompany';
import MyProject from '../components/student/MyProject';

const MyProjectsPage: FC = () => {
    // const rol = localStorage.getItem('rol');

    const { rol } = useSelector((state: State) => state.auth.data);

    let role = rol

    return rol === 'STUDENT_ROL' ? <MyProject /> : <MyProjectCompany />;
    //role === 'Student' ? <DashStudent/> : <DashCompany/>
};

export default MyProjectsPage;