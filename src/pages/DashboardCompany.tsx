
import React, { FC } from "react";
import StudentCard from "../components/StudentCard/StudentCard";



const DashboardCompany: FC = () => {


    const prueba = [{
        name: "fulanito", email: "fulanito@nabijash.com",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veniam adipisci eos labore tempora repellat alias neque hic voluptatibus laborum reiciendis quas dolor voluptatum totam, cum molestias excepturi cumque illo.", skill: "javascript"
    },
    {
        name: "fulanito2", email: "fulanito2@nabijash.com",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veniam adipisci eos labore tempora repellat alias neque hic voluptatibus laborum reiciendis quas dolor voluptatum totam, cum molestias excepturi cumque illo.", skill: "javascript"
    },
    {
        name: "fulanito3", email: "fulanito3@nabijash.com",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veniam adipisci eos labore tempora repellat alias neque hic voluptatibus laborum reiciendis quas dolor voluptatum totam, cum molestias excepturi cumque illo.", skill: "javascript"
    }]

    return (

        <div >
            {prueba.map(p =>
                <StudentCard name={p.name} email={p.email} descripcion={p.descripcion} skill={p.skill} />)
            }
        </div>
    )


}

export default DashboardCompany;   