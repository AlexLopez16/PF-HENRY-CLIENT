import { FC, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Box } from '@mui/system';
import { deleteStudent, getListStudents } from '../../actions/student';
import * as moment from 'moment'
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
  Button 
} from '@mui/material';


ChartJS.register(ArcElement, Tooltip, Legend);


export interface Options {
  splitRegexp?: RegExp | RegExp[];
  stripRegexp?: RegExp | RegExp[];
  delimiter?: string;
  transform?: (part: string, index: number, parts: string[]) => string;
}

export declare function sentenceCase(input: string, options?: Options): string;

const AdminStudent: FC = ({...rest}) => {
    const { users } = useSelector((state:any) => state.student)
    const dispatch = useDispatch()
    const token = localStorage.getItem('token')
    
    useEffect(() => {
        dispatch(getListStudents(token, false))
    }, [dispatch])

    console.log(users)

  const [selectedCustomerIds, setSelectedCustomerIds] = useState<string[]>([]);
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(0);
  const [deleted, setDeleted] = useState<boolean>(false)
  const handleSelectAll = (event: any) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = users.map((user: any) => user.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (uid: any) => {
    let newSelectedCustomerIds: string[] = [];
    const selectedIndex = selectedCustomerIds.indexOf(uid);

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, uid);
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );

    }
    
    setDeleted(true)
    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleDelete = () => {
    
    selectedCustomerIds.forEach((selectID: any) => dispatch(deleteStudent(token, selectID)))
  }

  const handleLimitChange = (event: any) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event: any, newPage: any) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.length === users.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0
                      && selectedCustomerIds.length < users.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Nombre
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Ubicacion
                </TableCell>
                <TableCell>
                  Estado
                </TableCell>
                <TableCell>
                  Fecha de ingreso
                </TableCell>
                
                {deleted  && <Button onClick={handleDelete}><DeleteIcon sx={{color: '#000'}}/></Button>}

              </TableRow>
            </TableHead>
            <TableBody>
              {users.slice(0, limit).map((user: any ) => (
                <TableRow
                  hover
                  key={user.uid}
                  selected={selectedCustomerIds.indexOf(user.uid) !== -1}
                >
                  <TableCell padding="checkbox">
                     <Checkbox
                      checked={selectedCustomerIds.indexOf(user.uid) !== -1}
                      onChange={(event) => handleSelectOne(user.uid)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={user.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                        
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {user.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {user.email}
                  </TableCell>
                  <TableCell>
                    {user.country ? user.country  :'No registrado'}
                  </TableCell>
                  <TableCell>
                    {user.state ? "Activo": "Inactivo"}
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
                    <Button onClick={handleDelete}><DeleteIcon sx={{color: '#000'}}/></Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
    </Card>
  );
};

export default AdminStudent;
