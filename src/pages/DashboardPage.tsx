import { FC } from "react";
import DashboardStudens from "../components/student/DashboardStudent";
import DashboardCompany from "../components/company/DashboardCompany";
import { DashStudent } from "../components/maquetas/DashStudent";
import { DashCompany } from "../components/maquetas/DashCompany";


const DashboardPage: FC = () => {

const role = 'STUDENT_ROL'

    return (
        // role === 'STUDENT_ROL' ? <DashboardStudens/> : <DashboardCompany/>
        role === 'Student' ? <DashStudent/> : <DashCompany/>
    )
}

export default DashboardPage;