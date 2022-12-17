import FiltroDashStudent from './FiltrosSideBar';
import { Nabvar } from '../components/maquetas/Nabvar';
import ProjectCard from '../components/project/ProjectCard';
import SideBar from '../components/SideBar/SideBar';
import NavBar from '../components/ui/NavBar';
import SearchBar from '../components/ui/SearchBar';
import DashboardStudent from './../components/student/DashboardStudent';


export const HomePage = () => {
    return (
        <>
            <SearchBar />

            <div style={{ display: 'flex' }}>
                <SideBar />
                <DashboardStudent />
            </div>
        </>
    )
}
