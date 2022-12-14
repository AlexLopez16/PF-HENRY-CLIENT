import { FC } from "react";
import DashboardStudens from "./DashboardStudens";
import DashboardCompany from "./DashboardCompany";


const DashboardPage: FC = () => {

const role = 'STUDENT_ROL'

    return (
        role === 'STUDENT_ROL' ? <DashboardStudens/> : <DashboardCompany/>
    )
}

export default DashboardPage;