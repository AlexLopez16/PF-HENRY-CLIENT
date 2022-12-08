import { FC } from "react";
import StudentCard from "../components/StudentCard/StudentCard";
import NavBar from "../components/NavBar/NavBar";



//aca se va a tener que hacer un map
const DashboardUser: FC = () => {
    return (
        <NavBar > 
            <StudentCard />
        </NavBar>
    )

}

export default DashboardUser;   