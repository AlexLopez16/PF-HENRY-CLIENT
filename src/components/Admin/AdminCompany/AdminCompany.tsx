import { FC, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Box } from '@mui/system';
import {
    getCompany,
    disableCompany,
    clearGetCompany,
} from '../../../actions/company';
import * as moment from 'moment';
import {
    Avatar,
    Card,
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Typography,
    InputLabel,
} from '@mui/material';
import { State } from '../../../reducers/rootReducer';
import NavBar from '../../NavBar/NavBar';
import { validaToken } from '../../../actions/auth';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react';
import { PreLoader } from '../../PreLoader/PreLoader';
import Pages from '../../ui/Pagination';

const AdminCompany: FC = ({ ...rest }) => {
    const { user }: object | any = useSelector((state: State) => state.company);
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    const users = user;

    const { logged, status } = useSelector((state: State) => state.auth);

    if (!status && token) {
        console.log('Tenes token, ahora te validamos');
        dispatch(validaToken(token));
    }

    useEffect(() => {
        dispatch(getCompany(token as string, 6, 0));
        return () => {
            dispatch(clearGetCompany());
        };
    }, [dispatch]);

    const [selectedCustomerIds, setSelectedCustomerIds] = useState<any[]>([]);
    const [limit, setLimit] = useState(12);
    const [page, setPage] = useState(0);

    const handleSelectAll = (event: any) => {
        let newSelectedCustomerIds;

        if (event.target.checked) {
            newSelectedCustomerIds = users.map((user: any) => user.id);
        } else {
            newSelectedCustomerIds = [];
        }

        setSelectedCustomerIds(newSelectedCustomerIds);
    };

    const handleSelectOne = (event: any, uid: any) => {
        const selectedIndex = selectedCustomerIds.indexOf(uid);
        let newSelectedCustomerIds: any = [];

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

    const handleLimitChange = (event: any) => {
        setLimit(event.target.value);
    };

    const handlePageChange = (event: any, newPage: any) => {
        setPage(newPage);
    };

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    const handleDisable = () => {
        selectedCustomerIds.forEach((selectID: any) =>
            dispatch(disableCompany(token, selectID))
        );
    };

    return (
        <>
            <PreLoader />
            <Card>
                <Box sx={{ minWidth: 900 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Locación</TableCell>
                                <TableCell>Estado</TableCell>
                                <TableCell>Fecha Registro</TableCell>
                                <TableCell>Editar</TableCell>
                                <TableCell>Cambiar Estado</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users?.slice(0, limit).map((user: any) => (
                                <TableRow
                                    hover
                                    key={user.uid}
                                    selected={
                                        selectedCustomerIds.indexOf(
                                            user.uid
                                        ) !== -1
                                    }
                                >
                                    <TableCell>
                                        <Box
                                            sx={{
                                                alignItems: 'center',
                                                display: 'flex',
                                            }}
                                        >
                                            <Avatar
                                                src={user.avatarUrl}
                                                sx={{ mr: 2 }}
                                            ></Avatar>
                                            <Typography
                                                color="textPrimary"
                                                variant="body1"
                                            >
                                                {user.name}
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>
                                        {user.country
                                            ? user.country
                                            : 'No registrado'}
                                    </TableCell>

                                    <TableCell align="left">
                                        <InputLabel
                                            color={
                                                user.state ? 'success' : 'error'
                                            }
                                        >
                                            {user.state ? 'Activo' : 'Inactivo'}
                                        </InputLabel>
                                    </TableCell>

                                    <TableCell>
                                        {user.admission
                                            ? `${moment(user.admission).format(
                                                  'DD/MM/YYYY'
                                              )}`
                                            : 'No registrado'}
                                    </TableCell>
                                    <TableCell>
                                        <EditIcon />
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
                                                    defaultChecked
                                                    size="small"
                                                    color="primary"
                                                    onChange={handleDisable}
                                                />
                                            }
                                            label={undefined}
                                        />
                                    </FormGroup>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Pages />
                </Box>
            </Card>
        </>
    );
};

export default AdminCompany;
