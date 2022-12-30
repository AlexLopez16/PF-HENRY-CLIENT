import { FC, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Box } from '@mui/system';
import { getCompany } from '../../../actions/company';
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
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

ChartJS.register(ArcElement, Tooltip, Legend);

export interface Options {
  splitRegexp?: RegExp | RegExp[];
  stripRegexp?: RegExp | RegExp[];
  delimiter?: string;
  transform?: (part: string, index: number, parts: string[]) => string;
}

export declare function sentenceCase(input: string, options?: Options): string;

const AdminCompany: FC = ({ ...rest }) => {
  const { user } = useSelector((state: State) => state.company);
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const users = user.usersCompany;

  const { logged, status } = useSelector((state: State) => state.auth);

  if (!status && token) {
    console.log('Tenes token, ahora te validamos');
    dispatch(validaToken(token));
  }

  useEffect(() => {
    dispatch(getCompany(token as string));
  }, [dispatch]);

  console.log(user.usersCompany);

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
        uid,
      );
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(1),
      );
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, -1),
      );
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1),
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

  return (
    <>
      <NavBar />
      <Card {...rest}>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding='checkbox'>
                  <Checkbox
                    checked={selectedCustomerIds.length === users?.length}
                    color='primary'
                    indeterminate={
                      selectedCustomerIds.length > 0 &&
                      selectedCustomerIds.length < users?.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Locación</TableCell>
                <TableCell>Estado</TableCell>
                <TableCell>Fecha Registro</TableCell>
                <TableCell>Editar</TableCell>
                <TableCell>Borrar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users?.slice(0, limit).map((user: any) => (
                <TableRow
                  hover
                  key={user.uid}
                  selected={selectedCustomerIds.indexOf(user.uid) !== -1}
                >
                  <TableCell padding='checkbox'>
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(user.uid) !== -1}
                      onChange={(event) => handleSelectOne(event, user.uid)}
                      value='true'
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex',
                      }}
                    >
                      <Avatar src={user.avatarUrl} sx={{ mr: 2 }}></Avatar>
                      <Typography color='textPrimary' variant='body1'>
                        {user.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    {user.country ? user.country : 'No registrado'}
                  </TableCell>
                  {/* <TableCell>
                {user.state ? "Activo": "Inactivo"}
              </TableCell> */}

                  <TableCell align='left'>
                    <InputLabel color={user.state ? 'success' : 'error'}>
                      {user.state ? 'Activo' : 'Inactivo'}
                    </InputLabel>
                  </TableCell>

                  <TableCell>
                    {user.admission
                      ? `${moment(user.admission).format('DD/MM/YYYY')}`
                      : 'No registrado'}
                  </TableCell>
                  <TableCell>
                    <EditIcon />
                  </TableCell>
                  <TableCell>
                    <DeleteIcon />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Card>
    </>
  );
};

export default AdminCompany;
