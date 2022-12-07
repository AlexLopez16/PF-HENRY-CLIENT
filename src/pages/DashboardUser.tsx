import React, { FC } from "react";
import  ProyectCard from "../components/ProyectCard/ProyectCard";
import StudentCard from "../components/StudentCard/StudentCard";



const DashboardUser: FC = () => {


    return (
        <div>
        <StudentCard />
        <ProyectCard />
        </div>
    )

}

export default DashboardUser;   