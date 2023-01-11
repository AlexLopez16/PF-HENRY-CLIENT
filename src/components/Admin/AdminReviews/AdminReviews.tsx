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
    Checkbox,
    InputLabel,
    FormControl,
    Select,
    MenuItem,
    Rating,
    Stack,
    Alert,
} from '@mui/material';
import { State } from '../../../reducers/rootReducer';
import { getAllProject } from '../../../actions/projects';
import {
    AprovedProject,
    cancelReview,
    clearReviews,
    getAllReviews,
} from '../../../actions/Admin';
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

import { PreLoader } from '../../PreLoader/PreLoader';
import ReviewCancel from './ReviewCancel';
import AdminReviewsFilter from './AdminReviewsFilter';

const AdminReviews: FC = ({ ...rest }) => {
    const dispatch = useDispatch();

    const token: any = localStorage.getItem('token');
    const { reviews } = useSelector((state: State) => state.review);
    useEffect(() => {
        dispatch(getAllReviews(token, 6, 0, null));
        return () => {
            dispatch(clearReviews());
        };
    }, [dispatch, token]);

    console.log(reviews);
    let target: object[] = reviews;

    const [selectedCustomerIds, setSelectedCustomerIds] = useState<string[]>(
        []
    );
    const [limit, setLimit] = useState(6);
    const [page, setPage] = useState(0);
    const [render, setRender] = useState(false);
    const [formactive, setFormactive] = useState(false);

    const [opciones, setOpciones] = useState('Todos');
    const [open, setOpen] = useState(false);
    const [idrev, setId] = useState('');

    const handleSelectAll = (event: any) => {
        let newSelectedCustomerIds;
        if (event.target.checked) {
            newSelectedCustomerIds = target.map((target: any) => target.uid);
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
        console.log(formactive);

        setFormactive(true);
    };

    const handleLimitChange = (event: any) => {
        setLimit(event.target.value);
    };

    const handlePageChange = (event: any, newPage: any) => {
        setPage(newPage);
    };
    const handlerClickFilter = () => {
        setOpen(!open);
    };

    console.log('target', target);

    return (
        <>
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
                        onClick={handlerClickFilter}
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
                        <AdminReviewsFilter />
                    </Collapse>
                </Container>
                {!target.length ? (
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
                                        {/* <Checkbox
                                        checked={
                                            selectedCustomerIds.length ===
                                            target.length
                                        }
                                        color="primary"
                                        indeterminate={
                                            selectedCustomerIds.length > 0 &&
                                            selectedCustomerIds.length <
                                            target.length
                                        }
                                        onChange={handleSelectAll}
                                    /> */}
                                    </TableCell>
                                    <TableCell>Nombre de proyecto</TableCell>
                                    <TableCell>Nombre de la compañia</TableCell>
                                    <TableCell
                                        sx={{
                                            textAlign: 'center',
                                        }}
                                    >
                                        Alumno
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            textAlign: 'center',
                                        }}
                                    >
                                        Puntuacion empresa
                                    </TableCell>
                                    <TableCell>Puntuacion Proyecto</TableCell>
                                    <TableCell>Descripcion</TableCell>
                                    {/* <TableCell>Desactivar</TableCell> */}
                                    <TableCell>Eliminar</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {target &&
                                    target.map((review: any) => (
                                        <TableRow
                                            hover
                                            key={review && review.uid}
                                            selected={
                                                selectedCustomerIds.indexOf(
                                                    review.uid
                                                ) !== -1
                                            }
                                        >
                                            <TableCell padding="checkbox">
                                                {/* <Checkbox
                                            checked={
                                                selectedCustomerIds.indexOf(
                                                    review.uid
                                                ) !== -1
                                            }
                                            onChange={(event) =>
                                                handleSelectOne(review.uid)
                                            }
                                            value="true"
                                        /> */}
                                            </TableCell>
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
                                                        {review &&
                                                        Array.isArray(
                                                            review.project
                                                        )
                                                            ? review.project[0]
                                                                  ?.name
                                                            : review.project
                                                                  ?.name}
                                                    </Typography>
                                                </Box>
                                            </TableCell>
                                            <TableCell>
                                                {review &&
                                                Array.isArray(review.project)
                                                    ? review.project[0]
                                                          .company[0].name
                                                    : review.project?.company
                                                          ?.name}
                                            </TableCell>
                                            <TableCell
                                                sx={{
                                                    textAlign: 'center',
                                                }}
                                            >
                                                {review &&
                                                Array.isArray(review.student)
                                                    ? review.student[0]?.name
                                                    : review?.student?.name}
                                            </TableCell>
                                            <TableCell
                                                sx={{
                                                    width: 310,
                                                    textAlign: 'center',
                                                }}
                                            >
                                                <Rating
                                                    name="read-only"
                                                    readOnly
                                                    value={review.ratingCompany}
                                                />
                                            </TableCell>

                                            <TableCell>
                                                <Rating
                                                    name="read-only"
                                                    readOnly
                                                    value={review.ratingProject}
                                                />
                                            </TableCell>
                                            <TableCell sx={{ maxWidth: 200 }}>
                                                {review.description}
                                            </TableCell>

                                            {/* <TableCell sx={{ maxWidth: 200 }}>
                                        <IconButton disabled={review.stateOfProject !== "En revision"}>
                                            <CheckIcon
                                                sx={{ cursor: "pointer" }}
                                            // onClick={() => handleaccept(review.uid)}
                                            />
                                        </IconButton>
                                    </TableCell> */}

                                            <TableCell sx={{ maxWidth: 200 }}>
                                                <IconButton>
                                                    <CloseIcon
                                                        sx={{
                                                            cursor: 'pointer',
                                                        }}
                                                        onClick={() =>
                                                            handlecancel(
                                                                review.uid
                                                            )
                                                        }
                                                    />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </Box>
                )}
                <Pages />
            </Card>
            {formactive && (
                <ReviewCancel
                    setFormactive={setFormactive}
                    formactive={formactive}
                    idrev={idrev}
                />
            )}
        </>
    );
};

export default AdminReviews;
