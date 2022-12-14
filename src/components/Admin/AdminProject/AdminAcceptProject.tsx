import { FC, useState, useEffect, forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Box, Container } from '@mui/system';
import * as moment from 'moment';
import {
    Card,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
    SelectChangeEvent,
    ListItemButton,
    Collapse,
    IconButton,
} from '@mui/material';
import { State } from '../../../reducers/rootReducer';
import { clearProject, getAllProject } from '../../../actions/projects';
import { AprovedProject } from '../../../actions/Admin';
import Pages from '../../ui/Pagination';
import FilterListIcon from '@mui/icons-material/FilterList';

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
import AdminFilterProject from '../../AdminBar/AdminFilterProject';
import CancelMessage from './cancelMessage';
import { PreLoader } from '../../PreLoader/PreLoader';

const AdminAcceptProject: FC = ({ ...rest }) => {
    const dispatch = useDispatch();

    const token: any = localStorage.getItem('token');

    useEffect(() => {
        dispatch(
            getAllProject(
                undefined,
                undefined,
                token,
                undefined,
                undefined,
                undefined,
                6,
                0
            )
        );
        return () => {
            dispatch(clearProject());
        };
    }, [dispatch]);

    const { projectsFilter } = useSelector((state: State) => state.project);
    let projects = projectsFilter;

    const [selectedCustomerIds, setSelectedCustomerIds] = useState<string[]>(
        []
    );
    const [limit, setLimit] = useState(12);
    const [page, setPage] = useState(0);
    const [render, setRender] = useState(false);
    const [formactive, setFormactive] = useState(false);

    const [opciones, setOpciones] = useState('Todos');
    const [open, setOpen] = useState(false);
    const options: string[] = [
        'Todos',
        'Reclutamiento',
        'En desarrollo',
        'Terminado',
        'En revision',
    ];
    const [idPrj, setId] = useState('');

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
    const handlerClick = () => {
        setOpen(!open);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleaccept = (id: string) => {
        dispatch(AprovedProject(token, id)), setRender(!render);
    };

    const handlecancel = (id: string) => {
        setId(id);
        console.log(idPrj);

        setFormactive(true);
    };

    const handleLimitChange = (event: any) => {
        setLimit(event.target.value);
    };

    const handlePageChange = (event: any, newPage: any) => {
        setPage(newPage);
    };

    let proyectos = projects;
    const handleChangeOptions = (event: SelectChangeEvent) => {
        setOpciones(event.target.value);
    };
    opciones !== 'Todos'
        ? (proyectos = projects.filter((project: any) =>
              project.stateOfProject.includes(opciones)
          ))
        : (proyectos = projects);
    return (
        <>
            {/* <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                        Filtrado
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={option}
                        label="filtro"
                        onChange={handleChangeOptions}
                    >
                        {options.map((option) => (
                            <MenuItem value={option}>{option}</MenuItem>
                        ))}
                    </Select>
                </FormControl> */}
            <PreLoader />
            <Card {...rest}>
                <Container
                    maxWidth="lg"
                    sx={{
                        display: 'flex',
                        marginLeft: 0,
                    }}
                >
                    <ListItemButton
                        onClick={handlerClick}
                        sx={{ maxWidth: 350 }}
                    >
                        {open ? (
                            <FilterListIcon> </FilterListIcon>
                        ) : (
                            <FilterListIcon> </FilterListIcon>
                        )}
                    </ListItemButton>{' '}
                    <Collapse
                        in={open}
                        timeout="auto"
                        unmountOnExit
                        orientation="horizontal"
                    >
                        <AdminFilterProject source="adminProjects" />
                    </Collapse>
                </Container>

                <Box sx={{ minWidth: 1050 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {/* <TableCell padding="checkbox">
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
                                </TableCell> */}
                                <TableCell>Nombre</TableCell>
                                <TableCell>Compa??ia</TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                    }}
                                >
                                    Categoria
                                </TableCell>
                                <TableCell
                                    sx={{
                                        textAlign: 'center',
                                    }}
                                >
                                    Estado
                                </TableCell>
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
                                    {/* <TableCell padding="checkbox">
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
                                    </TableCell> */}
                                    <TableCell>
                                        <Box
                                            sx={{
                                                alignItems: 'center',
                                                display: 'flex',
                                            }}
                                        >
                                            <Typography
                                                sx={{ maxWidth: 140 }}
                                                color="textPrimary"
                                                variant="body1"
                                            >
                                                {proyectos.name}
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        {proyectos.company &&
                                        Array.isArray(proyectos.company)
                                            ? proyectos.company[0].name
                                            : proyectos.company.name}
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            textAlign: 'center',
                                        }}
                                    >
                                        {proyectos.category
                                            ? proyectos.category
                                            : 'No registrado'}
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            width: 310,
                                            textAlign: 'center',
                                        }}
                                    >
                                        {proyectos.stateOfProject}
                                    </TableCell>

                                    <TableCell>
                                        {proyectos.admission
                                            ? `${moment(
                                                  proyectos.admission
                                              ).format('DD/MM/YYYY')}`
                                            : 'No registrado'}
                                    </TableCell>
                                    <TableCell sx={{ maxWidth: 200 }}>
                                        {proyectos.description}
                                    </TableCell>

                                    <TableCell sx={{ maxWidth: 200 }}>
                                        <IconButton
                                            disabled={
                                                proyectos.stateOfProject !==
                                                'En revision'
                                            }
                                        >
                                            <CheckIcon
                                                sx={{ cursor: 'pointer' }}
                                                onClick={() =>
                                                    handleaccept(proyectos.uid)
                                                }
                                            />
                                        </IconButton>
                                    </TableCell>

                                    <TableCell sx={{ maxWidth: 200 }}>
                                        <IconButton
                                            disabled={
                                                proyectos.stateOfProject !==
                                                'En revision'
                                            }
                                        >
                                            <CloseIcon
                                                sx={{ cursor: 'pointer' }}
                                                onClick={() =>
                                                    handlecancel(proyectos.uid)
                                                }
                                            />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
                <Pages />
            </Card>
            {formactive && (
                <CancelMessage
                    setFormactive={setFormactive}
                    formactive={formactive}
                    idPrj={idPrj}
                />
            )}
        </>
    );
};

export default AdminAcceptProject;
