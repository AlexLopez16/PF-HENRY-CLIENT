import { FC } from 'react';
import DashboardStudens from '../components/student/DashboardStudent';
import DashboardCompany from '../components/company/DashboardCompany';
import { useDispatch, useSelector } from 'react-redux';
// import { State } from '../reducers/rootReducer';

const NavBarPage: FC = () => {
    const dispatch = useDispatch();
    // const { status } = useSelector((state: State) => state.auth);
    let rol = localStorage.getItem('rol');
    // console.log(rol);

    const role = 'STUDENT_ROL';

    return role === 'STUDENT_ROL' ? <DashboardStudens /> : <DashboardCompany />;
    //role === 'Student' ? <DashStudent/> : <DashCompany/>
};

export default NavBarPage;
