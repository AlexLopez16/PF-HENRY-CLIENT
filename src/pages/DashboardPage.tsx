import { FC } from "react";
import DashboardStudens from "../components/student/DashboardStudent";
import DashboardCompany from "../components/company/DashboardCompany";
import { DashStudent } from "../components/maquetas/DashStudent";
import { DashCompany } from "../components/maquetas/DashCompany";

//let userRole: ('Student' | 'Company') = 'Company';

interface props {
    role: ('Student' | 'Company')
}

const DashboardPage: FC<props> = ({ role }) => {
    return (
        // role === 'Student' ? <DashboardStudens/> : <DashboardCompany/>
        role === 'Student' ? <DashStudent/> : <DashCompany/>
    )
}

export default DashboardPage;