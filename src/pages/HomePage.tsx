import FiltroDashStudent from './FiltrosSideBar';
// import { Nabvar } from '../components/maquetas/Nabvar';
import ProjectCard from '../components/project/ProjectCard';
// import SideBar from "../components/SideBar/SideBar";
import NavBar from '../components/ui/NavBar';
import SearchBar from '../components/ui/SearchBar';
import DashboardStudent from './../components/student/DashboardStudent';
import DashboardCompany from '../components/company/DashboardCompany';
import { useSelector } from 'react-redux';
import { State } from '../reducers/rootReducer';

export const HomePage = () => {
    const { rol }: string | any = useSelector(
        (state: State | any) => state.auth.data
    );

    let role = rol;

    return role === 'STUDENT_ROL' ? (
        <>
            <SearchBar />

            <div style={{ display: 'flex' }}>
                {/* <SideBar /> */}
                <DashboardStudent />
            </div>
        </>
    ) : (
        <>
            <SearchBar />

            <div style={{ display: 'flex' }}>
                {/* <SideBar /> */}
                <DashboardCompany />
            </div>
        </>
    );
};
