import { FC } from "react";
import DashboardStudens from "./DashboardStudens";
import DashboardCompany from "./DashboardCompany";

//let userRole: ('Student' | 'Company') = 'Company';

interface props {
    role: ('Student' | 'Company')
}

const DashboardPage: FC<props> = ({ role }) => {
    return (
        role === 'Student' ? <DashboardStudens/> : <DashboardCompany/>
    )
}

export default DashboardPage;