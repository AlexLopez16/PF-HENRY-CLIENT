import { FC } from "react";
import DashboardStudens from "../components/student/DashboardStudent";
import DashboardCompany from "../components/company/DashboardCompany";
import { DashStudent } from "../components/maquetas/DashStudent";
import { DashCompany } from "../components/maquetas/DashCompany";
import { useSelector } from 'react-redux';


const DashboardPage: FC = () => {

    const { data } = useSelector(state => state.auth)

    const role = data.rol

    return (
        role === 'STUDENT_ROL' ? <DashStudent /> : <DashCompany />
        // role === 'Student' ? <DashStudent /> : <DashCompany/>
    )
}

export default DashboardPage;