import React, { FC } from "react";
import  ProyectCard from "../components/ProyectCard/ProyectCard";
import {RadioGroupRating} from "../components/Rating/Rating";




const DashboardStudens: FC = () => {


    return (
        <div>
       <ProyectCard />
       <RadioGroupRating/>
        </div>
    )

}

export default DashboardStudens;   