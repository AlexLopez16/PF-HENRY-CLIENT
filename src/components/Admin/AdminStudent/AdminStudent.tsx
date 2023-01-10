import { FC, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Box } from '@mui/system';
import { disableStudent, getListStudents, multiSwitchStudent } from '../../../actions/student';
import { validaToken } from '../../../actions/auth';
import * as moment from 'moment';
import EditIcon from '@mui/icons-material/Edit';
import { State } from '../../../reducers/rootReducer';
import SideBar from '../SideBar/SideBar';
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
  FormControlLabel,
  Switch,
  FormGroup,
} from "@mui/material";
import Pages from "../../ui/Pagination";
import { PreLoader } from "../../PreLoader/PreLoader";
import { clearProject } from "../../../actions/projects";
import AdminFilterStudent from "./AdminFilterStudent";

ChartJS.register(ArcElement, Tooltip, Legend);

const AdminStudent: FC = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { status } = useSelector((state: State) => state.auth);
  if (!status && token) {
    dispatch(validaToken(token));
  }

  const { users } = useSelector((state: any) => state.student);
  useEffect(() => {
    dispatch(getListStudents(token, false, 6, 0));
  }, [dispatch]);

    const [selectedCustomerIds, setSelectedCustomerIds] = useState<string[]>(
        []
    );
    const [limit, setLimit] = useState(12);
    const [page, setPage] = useState(0);
    const [select, setSelect] = useState<boolean>(false);

    // <--- Aca esta el problema de que no seleccione todos --->
    const handleSelectAll = (event: any) => {
        let newSelectedCustomerIds;
        if (event.target.checked) {
            newSelectedCustomerIds = users.map((user: any) => user.uid);
        } else {
            newSelectedCustomerIds = [];
        }
        setSelectedCustomerIds(newSelectedCustomerIds);
    };

    // <--- Este trabaja agarrando uno por uno --->
    const handleSelectOne = (uid: string) => {
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
        setSelect(true);
        setSelectedCustomerIds(newSelectedCustomerIds);
    };

    const handleDisable = (selectID: string) => {
        dispatch(disableStudent(token, selectID));

    };
    const handleMultiSwitch = () => {

        dispatch(multiSwitchStudent(token, selectedCustomerIds));
        dispatch(getListStudents(token, false, 6, 0));
    };
    const handleLimitChange = (event: any) => {
        setLimit(event.target.value);
    };

    const handlePageChange = (event: any, newPage: any) => {
        setPage(newPage);
    };

    return (
        <>
            <PreLoader />
            <Card>
                <Box sx={{ minWidth: 1050 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        checked={
                                            selectedCustomerIds.length ===
                                            users.length
                                        }
                                        color="primary"
                                        indeterminate={
                                            selectedCustomerIds.length > 0 &&
                                            selectedCustomerIds.length <
                                            users.length
                                        }
                                        onChange={handleSelectAll}
                                    />
                                </TableCell>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Ubicacion</TableCell>
                                <TableCell>Estado</TableCell>
                                <TableCell>Fecha de ingreso</TableCell>
                                <TableCell>Activo</TableCell>
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
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            checked={
                                                selectedCustomerIds.indexOf(
                                                    user.uid
                                                ) !== -1
                                            }
                                            onChange={(event) =>
                                                handleSelectOne(user.uid)
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
                                            <Avatar
                                                src={user.avatarUrl}
                                                sx={{ mr: 2 }}
                                            ></Avatar>
                                            <Typography
                                                color="textPrimary"
                                                variant="body1"
                                            >
                                                {user.name
                                                    ? user.name
                                                    : user.username}
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        {user.email
                                            ? user.email
                                            : 'No registrado'}
                                    </TableCell>
                                    <TableCell>
                                        {user.country
                                            ? user.country
                                            : 'No registrado'}
                                    </TableCell>
                                    <TableCell>
                                        {user.state ? 'Activo' : 'Inactivo'}
                                    </TableCell>
                                    <TableCell>
                                        {user.admission
                                            ? `${moment(user.admission).format(
                                                'DD/MM/YYYY'
                                            )}`
                                            : 'No registrado'}
                                    </TableCell>

                                    <TableCell>
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
                                                            user.state
                                                                ? true
                                                                : false
                                                        }
                                                        size="small"
                                                        color="primary"
                                                        onChange={() =>
                                                            handleDisable(
                                                                user.uid
                                                            )
                                                        }
                                                    />
                                                }
                                                label={undefined}
                                            />
                                        </FormGroup>
                                    </TableCell>
                                </TableRow>
                            ))}

                            <FormControlLabel
                                control={
                                    <Switch

                                        size="small"
                                        color="primary"
                                        onChange={handleMultiSwitch}
                                    />
                                }
                                label={undefined}
                            />

                        </TableBody>

                    </Table>
                    <Pages />
                </Box>
            </Card>
        </>
    );
};

export default AdminStudent;
