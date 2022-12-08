import { FC } from "react";
import DashboardStudens from "./DashboardStudens";
import DashboardCompany from "./DashboardCompany";

const userRole: 'Student' | 'Company' = 'Student';

const DashboardPage: FC = () => {
    return (
        userRole == 'Student' ? <DashboardStudens/> : <DashboardCompany/>
    )
}

export default DashboardPage;