import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProjectByID } from '../../actions/projects';
import { State } from '../../reducers/rootReducer';
import StudentCard from '../student/StudentCard';

const Postulated: FC = () => {
    const dispatch = useDispatch();

    let token: string = localStorage.getItem('token') || '';
    let id: any = useParams();

    useEffect(() => {
        dispatch(getProjectByID(token, id));
    }, [dispatch]);

    const [render, setRender] = useState(false);

    let { projectId } = useSelector((state: State) => state.project);

    return (
        <div>
            <div>
                {projectId.students.map((p: any) => (
                    <StudentCard
                        name={p.name}
                        email={p.email}
                        descripcion={p.description}
                        tecnologies={p.tecnologies}
                        image={p.image}
                        idstd={p._id}
                        working={p.working}
                        setRender={setRender}
                        render={render}
                    />
                ))}
            </div>

            <div>
                {projectId.accepts.length &&
                    projectId.accepts.map((p: any) => (
                        <StudentCard
                            name={p.name}
                            email={p.email}
                            descripcion={p.description}
                            tecnologies={p.tecnologies}
                            image={p.image}
                            idstd={p._id}
                            working={p.working}
                            setRender={setRender}
                            render={render}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Postulated;
