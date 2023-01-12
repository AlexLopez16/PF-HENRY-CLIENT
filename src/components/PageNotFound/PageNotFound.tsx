import { FC, useEffect } from "react"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { State } from "../../reducers/rootReducer";

export const PageNotFound: FC = () => {
    const { logged } = useSelector((state: State) => state.auth);
    const navigate = useNavigate();
    useEffect(() => {
        if(logged) navigate('/projects')
        else navigate('/login')
    },[])
    return (
        <>
        </>
    )
}