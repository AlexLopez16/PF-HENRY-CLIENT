import { Avatar, Checkbox, Typography } from '@mui/material';
import {
    Box,
    // Container
} from '@mui/system';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllProject, getProjectByID } from '../../actions/projects';
import { State } from '../../reducers/rootReducer';
import NavBar from '../NavBar/NavBar';
import StudentCard from '../student/StudentCard';
import FilterListIcon from "@mui/icons-material/FilterList";





import * as moment from "moment";
import {
    Card,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    FormControlLabel,
    FormGroup,
    Container,
    ListItemButton,
    Collapse,
    IconButton,
} from "@mui/material";

import Switch from "@mui/material/Switch";
import { PreLoader } from '../PreLoader/PreLoader';
import AdminFilterProject from '../AdminBar/AdminFilterProject';
import Pages from '../ui/Pagination';
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { acceptStudent, DeleteStudent } from '../../actions/company';
import DoneAllIcon from '@mui/icons-material/DoneAll';


const Postulated: FC = ({ ...rest }) => {
    const dispatch = useDispatch();

    let token: string = localStorage.getItem('token') || '';
    let { id }: any = useParams();
    const [selectedCustomerIdPostulated, setSelectedCustomerIdPostulated] = useState<string[]>([]);
    const [selectedCustomerIdsAccepts, setSelectedCustomerIdsAccepts] = useState<string[]>([]);
    const [limit, setLimit] = useState(12);
    let { projectId } = useSelector((state: State) => state.project);

    useEffect(() => {
        dispatch(getProjectByID(token, id));
        dispatch(getAllProject(
            undefined,
            undefined,
            token,
            undefined,
            undefined,
            undefined,
            6,
            0
        ));
    },
        [dispatch]);

    const { projectsFilter } = useSelector((state: State) => state.project);
    let projects = projectsFilter;

    const handlerAccept = (idstd: string) => {
        dispatch(acceptStudent(id, idstd, token));
    };

    const handlerDelete = (idstd: string) => {
        dispatch(DeleteStudent(id, idstd, token));
    };

    const handleSelectAllPostulated = (event: any) => {
        let newSelectedCustomerIdPostulated;
        if (event.target.checked) {
            newSelectedCustomerIdPostulated = projects.map((project: any) => project.uid);
        } else {
            newSelectedCustomerIdPostulated = [];
        }

        setSelectedCustomerIdPostulated(newSelectedCustomerIdPostulated);
    };

    const handleSelectAllaccepts = (event: any) => {
        let newSelectedCustomerIdsAccepts;
        if (event.target.checked) {
            newSelectedCustomerIdsAccepts = projects.map((project: any) => project.uid);
        } else {
            newSelectedCustomerIdsAccepts = [];
        }

        setSelectedCustomerIdsAccepts(newSelectedCustomerIdsAccepts);
    };

    const handleSelectOnePostulated = (uid: any) => {
        let newSelectedCustomerIdPostulated: string[] = [];
        const selectedIndex = selectedCustomerIdPostulated.indexOf(uid);

        if (selectedIndex === -1) {
            newSelectedCustomerIdPostulated = newSelectedCustomerIdPostulated.concat(
                selectedCustomerIdPostulated,
                uid
            );
        } else if (selectedIndex === 0) {
            newSelectedCustomerIdPostulated = newSelectedCustomerIdPostulated.concat(
                selectedCustomerIdPostulated.slice(1)
            );
        } else if (selectedIndex === selectedCustomerIdPostulated.length - 1) {
            newSelectedCustomerIdPostulated = newSelectedCustomerIdPostulated.concat(
                selectedCustomerIdPostulated.slice(0, -1)
            );
        } else if (selectedIndex > 0) {
            newSelectedCustomerIdPostulated = newSelectedCustomerIdPostulated.concat(
                selectedCustomerIdPostulated.slice(0, selectedIndex),
                selectedCustomerIdPostulated.slice(selectedIndex + 1)
            );
        }
        setSelectedCustomerIdPostulated(newSelectedCustomerIdPostulated);
    }

    const handleSelectOneAccepts = (uid: any) => {
        let newSelectedCustomerIdsAccepts: string[] = [];
        const selectedIndex = selectedCustomerIdsAccepts.indexOf(uid);

        if (selectedIndex === -1) {
            newSelectedCustomerIdsAccepts = newSelectedCustomerIdsAccepts.concat(
                selectedCustomerIdsAccepts,
                uid
            );
        } else if (selectedIndex === 0) {
            newSelectedCustomerIdsAccepts = newSelectedCustomerIdsAccepts.concat(
                selectedCustomerIdsAccepts.slice(1)
            );
        } else if (selectedIndex === selectedCustomerIdsAccepts.length - 1) {
            newSelectedCustomerIdsAccepts = newSelectedCustomerIdsAccepts.concat(
                selectedCustomerIdsAccepts.slice(0, -1)
            );
        } else if (selectedIndex > 0) {
            newSelectedCustomerIdsAccepts = newSelectedCustomerIdsAccepts.concat(
                selectedCustomerIdsAccepts.slice(0, selectedIndex),
                selectedCustomerIdsAccepts.slice(selectedIndex + 1)
            );
        }
        setSelectedCustomerIdsAccepts(newSelectedCustomerIdsAccepts);
    }

    const handlerAllAccept = () => {
        selectedCustomerIdPostulated.map(el =>{
        dispatch(acceptStudent(id, el, token))});
    };

    const handlerAllDelete = () => {

        selectedCustomerIdsAccepts.map(el =>
            dispatch(DeleteStudent(id, el, token)));

    };


    console.log(selectedCustomerIdPostulated);


    //ACTIVA O DESACTIVA EL BOTON DE ACEPTARLO 
    let encuentra = false;
    let idpostulados: string[] = []
    let idaceptados: string[] = []

    projectId.students.map((student: object | any) =>
        idpostulados.push(student._id))

    projectId.accepts.map((accept: object | any) =>
        idaceptados.push(accept._id))

    for (let i = 0; i < idpostulados.length; i++) {
        encuentra = false;
        for (var j = 0; j < idaceptados.length; j++) {
            if (idpostulados[i] == idaceptados[j]) {
                encuentra = true;
                break;
            }
        }
    }
    //ACTIVA O DESACTIVA EL BOTON DE ACEPTARLO 



    return (
<div>

        <NavBar/>
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',

            }}>
            <>
                <PreLoader />
                {/*TABLA DE STUDENT POSTULADOS*/}

                <Card {...rest}>
                    {/* <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            marginLeft: 0,
          }}
        >
          <ListItemButton onClick={handlerClick} sx={{ maxWidth: 350 }}>
            {open ? (
              <FilterListIcon> </FilterListIcon>
            ) : (
              <FilterListIcon> </FilterListIcon>
            )}
          </ListItemButton>{" "}
          <Collapse
            in={open}
            timeout="auto"
            unmountOnExit
            orientation="horizontal"
          >
            <AdminFilterProject source="adminProjects" />
          </Collapse>
        </Container> */}

                    <h4 style={{ justifyContent: "center" }}>Postulados</h4>
                    <Box
                        sx={{ minWidth: 1050 }}
                    >
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            checked={selectedCustomerIdPostulated.length === projects.length}
                                            color="primary"
                                            indeterminate={
                                                selectedCustomerIdPostulated.length > 0 &&
                                                selectedCustomerIdPostulated.length < projects.length
                                            }
                                            onChange={handleSelectAllPostulated}
                                        />
                                    </TableCell>
                                    <TableCell></TableCell>
                                    <TableCell>Nombre</TableCell>
                                    <TableCell>Apellido</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Descripcion</TableCell>
                                    <TableCell>Pais</TableCell>
                                    <TableCell>Tecnologias</TableCell>
                                    <TableCell>Aceptar</TableCell>
                                    <TableCell>Todos</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {projectId.students.slice(0, limit).map((student: any) => (

                                    <TableRow
                                        hover
                                        key={student._id}
                                        selected={selectedCustomerIdPostulated.indexOf(student._id) !== -1}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                checked={selectedCustomerIdPostulated.indexOf(student._id) !== -1}
                                                onChange={(event) => handleSelectOnePostulated(student._id)}
                                                value="true"
                                            />
                                        </TableCell>
                                        <Avatar src={student.image} sx={{ m: 1 }}></Avatar>
                                        <TableCell>
                                            <Box
                                                sx={{
                                                    alignItems: "center",
                                                    display: "flex",
                                                }}
                                            >
                                                <Typography color="textPrimary" variant="body1">
                                                    {student.name ? student.name : student.username}
                                                </Typography>
                                            </Box>
                                        </TableCell>
                                        <TableCell>{student.lastName?student.lastName: "Aun no posee apellido"}</TableCell>
                                        <TableCell>
                                            {student.email ? student.email : "Aun no posee e-mail"}
                                        </TableCell>
                                        <TableCell>{student.descripcion ? student.descripcion : "Aun no posee descripcion"}</TableCell>

                                        <TableCell>
                                            {student.country ? student.country : "Aun no posee pais"}
                                        </TableCell>
                                        <TableCell>
                                            {student.tecnologies.length ? student.tecnologies.map(({ skill, exp }: any) => (
                                                <p>{`${skill}: ${exp}`}</p>
                                            )):"Aun no posee tecnologias"}
                                        </TableCell>
                                        <TableCell sx={{ maxWidth: 200 }}>
                                            <IconButton
                                            // disabled={encuentra}
                                            >
                                                <CheckIcon
                                                    sx={{ cursor: "pointer" }}
                                                    onClick={() => handlerAccept(student._id)}

                                                />
                                            </IconButton>

                                        </TableCell>
                                        <TableCell sx={{ maxWidth: 200 }}>
                                            <IconButton disabled={selectedCustomerIdPostulated.length < 2}>
                                                <DoneAllIcon
                                                    sx={{ cursor: "pointer" }}
                                                    onClick={handlerAllAccept}

                                                />
                                            </IconButton>

                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Box>

                </Card>
            </>
            {/*TABLA DE STUDENT POSTULADOS*/}
            <>
                {/*TABLA DE ACCEPT POSTULADOS*/}
                <Card {...rest}>
                    {/* <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            marginLeft: 0,
          }}
        >
          <ListItemButton onClick={handlerClick} sx={{ maxWidth: 350 }}>
            {open ? (
              <FilterListIcon> </FilterListIcon>
            ) : (
              <FilterListIcon> </FilterListIcon>
            )}
          </ListItemButton>{" "}
          <Collapse
            in={open}
            timeout="auto"
            unmountOnExit
            orientation="horizontal"
          >
            <AdminFilterProject source="adminProjects" />
          </Collapse>
        </Container> */}

                    <h4 style={{ justifyContent: "center" }}>Aceptados</h4>
                    <Box
                        sx={{ Width: "50vh" }}
                    >
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            checked={selectedCustomerIdsAccepts.length === projects.length}
                                            color="primary"
                                            indeterminate={
                                                selectedCustomerIdsAccepts.length > 0 &&
                                                selectedCustomerIdsAccepts.length < projects.length
                                            }
                                            onChange={handleSelectAllaccepts}
                                        />
                                    </TableCell>
                                    <TableCell></TableCell>
                                    <TableCell>Nombre</TableCell>
                                    <TableCell>Apellido</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Descripcion</TableCell>
                                    <TableCell>Pais</TableCell>
                                    <TableCell>Tecnologias</TableCell>
                                    <TableCell>Rechazar</TableCell>
                                    <TableCell>Todos</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {projectId.accepts.slice(0, limit).map((accept: any) => (
                                    <TableRow
                                        hover
                                        key={accept._id}
                                        selected={selectedCustomerIdsAccepts.indexOf(accept._id) !== -1}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                checked={selectedCustomerIdsAccepts.indexOf(accept._id) !== -1}
                                                onChange={(event) => handleSelectOneAccepts(accept._id)}
                                                value="true"
                                            />
                                        </TableCell>
                                        <Avatar src={accept.image} sx={{}}></Avatar>
                                        <TableCell>
                                            <Box
                                                sx={{
                                                    alignItems: "center",
                                                    display: "flex",
                                                }}
                                            >
                                                <Typography color="textPrimary" variant="body1">
                                                    {accept.name ? accept.name : accept.username}
                                                </Typography>
                                            </Box>
                                        </TableCell>
                                        <TableCell>{accept.lastName?accept.lastName:"Aun no posee apillido"}</TableCell>
                                        <TableCell>
                                            {accept.email ? accept.email : "Aun no posee e-mail"}
                                        </TableCell>
                                        <TableCell>{accept.descripcion ? accept.descripcion : "Aun no posee descripcion"}</TableCell>

                                        <TableCell>
                                            {accept.country ? accept.country : "Aun no posee pais"}
                                        </TableCell>
                                        <TableCell>
                                            {accept.tecnologies.length ? accept.tecnologies.map(({ skill, exp }: any) => (
                                                <p>{`${skill}: ${exp}`}</p>
                                            )):"Aun no posee tecnologias"}
                                        </TableCell>

                                        <TableCell sx={{}}>
                                            <IconButton>
                                                <CloseIcon

                                                    sx={{ cursor: "pointer" }}
                                                    onClick={() => handlerDelete(accept._id)}
                                                />
                                            </IconButton>

                                        </TableCell>
                                        <TableCell sx={{ maxWidth: 200 }}>
                                            <IconButton disabled={selectedCustomerIdsAccepts.length < 2}>
                                                <DoneAllIcon
                                                    sx={{ cursor: "pointer" }}
                                                    onClick={handlerAllDelete}

                                                />
                                            </IconButton>

                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Box>

                </Card>
            </>
        </div>
                    </div>
    );
};

export default Postulated;
