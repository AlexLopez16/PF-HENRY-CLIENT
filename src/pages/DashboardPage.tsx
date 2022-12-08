import { FC } from "react";
import DashboardStudens from "./DashboardStudens";
import DashboardUser from "./DashboardUser";

const userRole: 'Student' | 'Company' = 'Student';

const DashboardPage: FC = () => {
    return (
        userRole == 'Student' ? <DashboardStudens/> : <DashboardUser/>
    )
}

export default DashboardPage;