import { FC, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/system';
import * as moment from 'moment';
import {
    Card,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
    FormControlLabel,
    FormGroup,
    Container,
    ListItemButton,
    Collapse,
    Checkbox,
} from '@mui/material';
import { State } from '../../../reducers/rootReducer';
import { clearProject, getAllProject } from '../../../actions/projects';
import Switch from '@mui/material/Switch';
import { deleteuser, setStateMultiple } from '../../../actions/Admin';
import Pages from '../../ui/Pagination';
import { PreLoader } from '../../PreLoader/PreLoader';
import AdminFilterProject from '../../AdminBar/AdminFilterProject';
export interface Options {
    splitRegexp?: RegExp | RegExp[];
    stripRegexp?: RegExp | RegExp[];
    delimiter?: string;
    transform?: (part: string, index: number, parts: string[]) => string;
}
import FilterListIcon from '@mui/icons-material/FilterList';
import { validaToken } from '../../../actions/auth';
import Stack from '@mui/material/Stack/Stack';
import Alert from '@mui/material/Alert/Alert';

export declare function sentenceCase(input: string, options?: Options): string;
const AdminProject: FC = ({ ...rest }) => {
    const dispatch = useDispatch();
    const token: any = localStorage.getItem('token');
    const [open, setOpen] = useState(false);

    const { status } = useSelector((state: State) => state.auth);

    if (!status && token) {
        dispatch(validaToken(token));
    }

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
    console.log(projects);
    const [selectedCustomerIds, setSelectedCustomerIds] = useState<string[]>(
        []
    );
    const [limit, setLimit] = useState(12);
    const [page, setPage] = useState(0);

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

    const handleSwitch = (id: string) => {
        dispatch(deleteuser(token, id));
    };

    const handleMultiSwitch = () => {
        dispatch(setStateMultiple(token, selectedCustomerIds));
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
    };
    console.log(selectedCustomerIds);

    const handleLimitChange = (event: any) => {
        setLimit(event.target.value);
    };

    const handlePageChange = (event: any, newPage: any) => {
        setPage(newPage);
    };

    const handlerClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <PreLoader />
            <>{/* <Filters /> */}</>
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
                        <AdminFilterProject />
                    </Collapse>
                </Container>
                {!projects.length ? (
                    <TableBody>
                        <Stack sx={{ width: '100%' }} spacing={1}>
                            <Alert severity="info">
                                No hay proyectos con los filtros aplicados!
                            </Alert>
                        </Stack>
                    </TableBody>
                ) : (
                    <Box sx={{ minWidth: 1050 }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            checked={
                                                selectedCustomerIds.length ===
                                                projects.length
                                            }
                                            color="primary"
                                            indeterminate={
                                                selectedCustomerIds.length >
                                                    0 &&
                                                selectedCustomerIds.length <
                                                    projects.length
                                            }
                                            onChange={handleSelectAll}
                                        />
                                    </TableCell>

                                    <TableCell>Nombre</TableCell>
                                    <TableCell>Compañia</TableCell>
                                    <TableCell>Categoria</TableCell>
                                    <TableCell>Estado del proyecto</TableCell>
                                    <TableCell>Creado</TableCell>
                                    <TableCell>Activo</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {projects
                                    .slice(0, limit)
                                    .map((projects: any) => (
                                        <TableRow
                                            hover
                                            key={projects.uid}
                                            selected={
                                                selectedCustomerIds.indexOf(
                                                    projects.uid
                                                ) !== -1
                                            }
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    checked={
                                                        selectedCustomerIds.indexOf(
                                                            projects.uid
                                                        ) !== -1
                                                    }
                                                    onChange={(event) =>
                                                        handleSelectOne(
                                                            projects.uid
                                                        )
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
                                                    <Typography
                                                        color="textPrimary"
                                                        variant="body1"
                                                    >
                                                        {projects.name}
                                                    </Typography>
                                                </Box>
                                            </TableCell>
                                            <TableCell>
                                                {projects.company &&
                                                Array.isArray(projects.company)
                                                    ? projects?.company[0]?.name
                                                    : projects?.company?.name}
                                            </TableCell>
                                            <TableCell>
                                                {projects.category
                                                    ? projects.category
                                                    : 'No registrado'}
                                            </TableCell>
                                            <TableCell>
                                                {projects.stateOfProject}
                                            </TableCell>

                                            <TableCell>
                                                {projects.admission
                                                    ? `${moment(
                                                          projects.admission
                                                      ).format('DD/MM/YYYY')}`
                                                    : 'No registrado'}
                                            </TableCell>

                                            <FormGroup
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    mt: 3,
                                                }}
                                            >
                                                <FormControlLabel
                                                    control={
                                                        <Switch
                                                            defaultChecked={
                                                                projects.state
                                                            }
                                                            size="small"
                                                            color="primary"
                                                            onChange={() =>
                                                                handleSwitch(
                                                                    projects.uid
                                                                )
                                                            }
                                                        />
                                                    }
                                                    label={undefined}
                                                />
                                            </FormGroup>
                                        </TableRow>
                                    ))}
                            </TableBody>

                            <FormControlLabel
                                control={
                                    <Switch
                                        defaultChecked={projects.state}
                                        size="small"
                                        color="primary"
                                        onChange={handleMultiSwitch}
                                    />
                                }
                                label={undefined}
                            />
                        </Table>
                    </Box>
                )}
                <Pages />
            </Card>
        </>
    );
};

export default AdminProject;
