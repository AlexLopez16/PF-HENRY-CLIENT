import React, { FC } from "react";
import  ProyectCard from "../components/ProyectCard/ProyectCard";


const ejemplo = [{

    name: "E-Comers",
    empresa: "Mercado libre",
    imagen:
    "https://thumbs.dreamstime.com/z/c%C3%B3digo-fuente-de-escritorio-y-papel-pintado-por-lenguaje-programaci%C3%B3n-con-codi-124706065.jpg",
    detalle:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veniam adipisci eos labore tempora repellat alias neque hic voluptatibus laborum reiciendis quas dolor voluptatum totam, cum molestias excepturi cumque illo      Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veniam adipisci eos labore tempora repellat alias neque hic voluptatibus laborum reiciendis quas dolor voluptatum totam, cum molestias excepturi cumque illo.",
    cantidadDeEstudiantes: "4",
    lenguajes: "java",
    estado: "reclutando",
    email: "fulanito@nabijash.com",
},
{

    name: "E-Comers",
    empresa: "Mercado libre",
    imagen:
    "https://thumbs.dreamstime.com/z/c%C3%B3digo-fuente-de-escritorio-y-papel-pintado-por-lenguaje-programaci%C3%B3n-con-codi-124706065.jpg",
    detalle:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veniam adipisci eos labore tempora repellat alias neque hic voluptatibus laborum reiciendis quas dolor voluptatum totam, cum molestias excepturi cumque illo      Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veniam adipisci eos labore tempora repellat alias neque hic voluptatibus laborum reiciendis quas dolor voluptatum totam, cum molestias excepturi cumque illo.",
    cantidadDeEstudiantes: "4",
    lenguajes: "java",
    estado: "reclutando",
    email: "fulanito@nabijash.com",
}];


const DashboardStudens: FC = () => {
   


    return (
        <div>
            {ejemplo.map(e=>
            <ProyectCard name={e.name}
empresa={e.empresa}
imagen={e.imagen}
detalle={e.detalle}
cantidadDeEstudiantes={e.cantidadDeEstudiantes}
lenguajes={e.lenguajes}
estado={e.estado}
email={e.email}/>
                )}
       
        </div>
    )

}

export default DashboardStudens;   