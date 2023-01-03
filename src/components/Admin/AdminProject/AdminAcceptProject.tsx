import { FC, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Box } from '@mui/system';
import * as moment from 'moment';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
    Avatar,
    Card,
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
    InputLabel,
    Button,
    FormControlLabel,
    FormGroup,
    FormControl,
    MenuItem,
    SelectChangeEvent,

} from '@mui/material';
import { getListStudents } from '../../../actions/student';
import { State } from '../../../reducers/rootReducer';
import {
    getAllProject,
    getProject,
    getProjectsFilter,
} from '../../../actions/projects';
import Switch from '@mui/material/Switch';
import { AprovedProject, deleteuser } from '../../../actions/Admin';
import { Visibility } from '@mui/icons-material';
import Pages from '../../ui/Pagination';
import { Filters } from '../../ui/Filters';
import { Select } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

export interface Options {
    splitRegexp?: RegExp | RegExp[];
    stripRegexp?: RegExp | RegExp[];
    delimiter?: string;
    transform?: (part: string, index: number, parts: string[]) => string;
}
export declare function sentenceCase(input: string, options?: Options): string;
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

const AdminAcceptProject: FC = ({ ...rest }) => {
    const dispatch = useDispatch();
    const token: any = localStorage.getItem('token');

    useEffect(() => {
        dispatch(getAllProject(token));
    }, [dispatch]);

    const { projectsFilter } = useSelector((state: State) => state.project);
    let projects = projectsFilter;
    console.log(projects);

    const [selectedCustomerIds, setSelectedCustomerIds] = useState<string[]>(
        []
    );
    const [limit, setLimit] = useState(12);
    const [page, setPage] = useState(0);
    const [render, setRender] = useState(false);

    const [opciones, setOpciones] = useState("Todos")
    const options: string[] = ['Todos', 'Reclutamiento', 'En desarrollo', 'Terminado', 'En revision']


    const handleSelectAll = (event: any) => {
        let newSelectedCustomerIds;
        if (event.target.checked) {
            newSelectedCustomerIds = projects.map(
                (project: any) => project.uid
            );
        } else {
            newSelectedCustomerIds = [];
        }

        setSelectedCustomerIds(newSelectedCustomerIds);
    };

    const handleSelectOne = (uid: any) => {
        let newSelectedCustomerIds: string[] = [];
        const selectedIndex = selectedCustomerIds.indexOf(uid);

        if (selectedIndex === -1) {
            newSelectedCustomerIds = newSelectedCustomerIds.concat(
                selectedCustomerIds,
                uid
            );
        } else if (selectedIndex === 0) {
            newSelectedCustomerIds = newSelectedCustomerIds.concat(
                selectedCustomerIds.slice(1)
            );
        } else if (selectedIndex === selectedCustomerIds.length - 1) {
            newSelectedCustomerIds = newSelectedCustomerIds.concat(
                selectedCustomerIds.slice(0, -1)
            );
        } else if (selectedIndex > 0) {
            newSelectedCustomerIds = newSelectedCustomerIds.concat(
                selectedCustomerIds.slice(0, selectedIndex),
                selectedCustomerIds.slice(selectedIndex + 1)
            );
        }

        setSelectedCustomerIds(newSelectedCustomerIds);
    };

    const handleaccept = () => {
        selectedCustomerIds.forEach((selectID: any) =>
            dispatch(AprovedProject(token, selectID)),
            setRender(!render),
        );
    };

    const handlecancel  = () => {
        selectedCustomerIds.forEach((selectID: any) =>
            // dispatch(AprovedProject(token, selectID)),
            setRender(!render),
        );
    };


    const handleLimitChange = (event: any) => {
        setLimit(event.target.value);
    };

    const handlePageChange = (event: any, newPage: any) => {
        setPage(newPage);
    };


    let proyectos = projects
    const handleChangeOptions = (event: SelectChangeEvent) => {
        setOpciones(event.target.value)
    }
    opciones !== "Todos"
        ? proyectos = projects.filter((project: any) => project.stateOfProject.includes(opciones)) : proyectos = projects



    return (
        <>
            <>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Filtrado</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={option}
                        label="filtro"
                        onChange={handleChangeOptions}

                    >
                        {options.map((option) => (
                            <MenuItem value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </>

            <Card {...rest}>
                <Box sx={{ minWidth: 1050 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        checked={
                                            selectedCustomerIds.length ===
                                            proyectos.length
                                        }
                                        color="primary"
                                        indeterminate={
                                            selectedCustomerIds.length > 0 &&
                                            selectedCustomerIds.length <
                                            proyectos.length
                                        }
                                        onChange={handleSelectAll}
                                    />
                                </TableCell>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Compañia</TableCell>
                                <TableCell>Categoria</TableCell>
                                <TableCell>Estado</TableCell>
                                <TableCell>Creado</TableCell>
                                <TableCell>Descripcion</TableCell>
                                <TableCell>Aceptar</TableCell>
                                <TableCell>Rechazar</TableCell>


                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {proyectos.slice(0, limit).map((proyectos: any) => (
                                <TableRow
                                    hover
                                    key={proyectos.uid}
                                    selected={
                                        selectedCustomerIds.indexOf(
                                            proyectos.uid
                                        ) !== -1
                                    }
                                >
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            checked={
                                                selectedCustomerIds.indexOf(
                                                    proyectos.uid
                                                ) !== -1
                                            }
                                            onChange={(event) =>
                                                handleSelectOne(proyectos.uid)
                                            }
                                            value="true"
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Box
                                            sx={{
                                                alignItems: 'center',
                                                display: 'flex',
                                            }}
                                        >
                                            {/* <Avatar
                                                src={projects.avatarUrl}
                                                sx={{ mr: 2 }}
                                            ></Avatar> */}
                                            <Typography
                                                sx={{ maxWidth: 140 }}
                                                color="textPrimary"
                                                variant="body1"
                                            >
                                                {proyectos.name}
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell>{proyectos.company.name}</TableCell>
                                    <TableCell>
                                        {proyectos.category
                                            ? proyectos.category
                                            : 'No registrado'}
                                    </TableCell>
                                    <TableCell>{proyectos.stateOfProject}</TableCell>

                                    <TableCell>
                                        {proyectos.admission
                                            ? `${moment(proyectos.admission).format(
                                                'DD/MM/YYYY'
                                            )}`
                                            : 'No registrado'}
                                    </TableCell>
                                    <TableCell sx={{ maxWidth: 200 }}>
                                        {proyectos.description
                                        }
                                    </TableCell>
                                    
                                    <TableCell sx={{ maxWidth: 200 }}>
                                        <CheckIcon
                                            sx={{ hover: "pointer" }}
                                            onClick={handleaccept} />
                                    </TableCell>
                                

                                    <TableCell sx={{ maxWidth: 200 }}>
                                        <CloseIcon 
                                         onClick={handlecancel} 
                                        />
                                    </TableCell>


                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </Card>
            <>

                <Pages />
            </>
        </>
    );
};

export default AdminAcceptProject;