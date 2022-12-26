
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { postulatedProject } from "../../actions/projects";
import { State } from "../../reducers/rootReducer";
import StudentCard from "../student/StudentCard";

const Postulated: FC = () => {
    const dispatch = useDispatch();


    let token: string = localStorage.getItem('token') || "";
    let  id = useParams()
console.log(id);


    useEffect(() => {
        dispatch(postulatedProject(id, token))
    }, [dispatch])


    let { projectId } = useSelector((state: State) => state.project)
    console.log(projectId.students);

    return (
        <div >
            
            {projectId.students.map((p: any) =>
                <StudentCard
                    name={p.name}
                    email={p.email}
                    descripcion={p.description}
                    tecnologies={p.tecnologies}
                    image={p.image}
                    id={p._id}
                />)
            }

        </div>
    )


}

export default Postulated;   