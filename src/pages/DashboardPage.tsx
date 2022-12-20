import { FC } from "react";
import DashboardStudens from "../components/student/DashboardStudent";
import DashboardCompany from "../components/company/DashboardCompany";
import { DashStudent } from "../components/maquetas/DashStudent";
import { DashCompany } from "../components/maquetas/DashCompany";
import { useSelector } from "react-redux";
import { State } from "../reducers/rootReducer";


const DashboardPage: FC = () => {

    const { rol } = useSelector((state: State) => state.auth.data);
    
    let role = rol

    return (
        role === 'STUDENT_ROL' ? <DashboardStudens/> : <DashboardCompany/>
        // role === 'Student' ? <DashStudent/> : <DashCompany/>
    )
}

export default DashboardPage;