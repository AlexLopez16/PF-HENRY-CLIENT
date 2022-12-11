import { FC } from "react";
import DashboardStudens from "./DashboardStudens";
import DashboardCompany from "./DashboardCompany";
import { useAppSelector } from '../types/types'

const DashboardPage: FC = () => {
    const role =  useAppSelector(state => state.loginSlice.role) 
    


    console.log('ROOOL: ' + role);

    return (
        role === 'STUDENT_ROL' ? <DashboardStudens/> : <DashboardCompany/>
    )
}

export default DashboardPage;