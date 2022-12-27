import { FC } from 'react';
import DashboardStudens from '../components/student/DashboardStudent';
import DashboardCompany from '../components/company/DashboardCompany';
import { useSelector } from 'react-redux';
import { State } from '../reducers/rootReducer';
import { MyProjectCompany } from '../components/project/MyProjectCompany';
import MyProject from '../components/student/MyProject';

const MyProjectsPage: FC = () => {
    const { rol } = useSelector((state: State) => state.auth.data);


    return rol === 'STUDENT_ROL'
        ? <MyProject />
        : <MyProjectCompany />
};

export default MyProjectsPage;