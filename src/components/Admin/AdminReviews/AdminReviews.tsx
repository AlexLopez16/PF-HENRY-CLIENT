import { FC, useState, useEffect, forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Box, Container } from '@mui/system';

import {
    Card,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
    ListItemButton,
    Collapse,
    IconButton,
    Rating,
} from '@mui/material';
import { State } from '../../../reducers/rootReducer';
import {
    AprovedProject,
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
import AdminFilterProject from '../../AdminBar/AdminFilterProject';
import { PreLoader } from '../../PreLoader/PreLoader';
import ReviewCancel from './ReviewCancel';
import { SnackBar } from '../../SnackBar/SnackBar';

const AdminReviews: FC = ({ ...rest }) => {
    const dispatch = useDispatch();

    const token: any = localStorage.getItem('token');

    useEffect(() => {
        dispatch(getAllReviews(token));
    }, [dispatch]);

    const { reviews } = useSelector((state: State) => state.review);
    let target: object[] = reviews;

    const [selectedCustomerIds, setSelectedCustomerIds] = useState<string[]>(
        []
    );
    const [limit, setLimit] = useState(12);
    const [page, setPage] = useState(0);
    const [render, setRender] = useState(false);
    const [openModal, setOpenModal] = useState(false);

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
        setOpenModal(true)
        
    };

    const handleLimitChange = (event: any) => {
        setLimit(event.target.value);
    };

    const handlePageChange = (event: any, newPage: any) => {
        setPage(newPage);
    };

    return (
        <>
        <SnackBar successMsg={"Borrado exitoso"}/>
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

                <Box sx={{ minWidth: 1050 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
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
                            {target.slice(0, limit).map((review: any) => (
                                <TableRow
                                    hover
                                    key={review.project.name}
                                    selected={
                                        selectedCustomerIds.indexOf(
                                            review.uid
                                        ) !== -1
                                    }
                                >
                                    <TableCell padding="checkbox">
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
                                                {review.project.name}
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        {review.project.company.name}
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            textAlign: 'center',
                                        }}
                                    >
                                        {review.student?.name ? review?.student?.name : review.student?.username}
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

                                    <TableCell sx={{ maxWidth: 200 }}>
                                        <IconButton>
                                            <CloseIcon
                                                sx={{ cursor: 'pointer' }}
                                                onClick={() =>
                                                    handlecancel(review.uid)
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
         
                <ReviewCancel
                    setOpenModal={setOpenModal}
                    openModal={openModal}
                    idrev={idrev}
                />
        
        </>
    );
};

export default AdminReviews;
