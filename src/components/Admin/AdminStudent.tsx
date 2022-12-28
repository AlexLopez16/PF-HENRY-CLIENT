import { FC, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Box } from '@mui/system';
import { getStudents } from '../../actions/student';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import PropTypes from 'prop-types';
// import { format } from 'date-fns';
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
  Typography
} from '@mui/material';
import { string } from 'yup';
// import { getInitials } from '../../utils/get-initials';

ChartJS.register(ArcElement, Tooltip, Legend);

const AdminStudent: FC = ({...rest}) => {
    const { users } = useSelector((state:any) => state.student)
    const dispatch = useDispatch()
    const token = localStorage.getItem('token')
    
    useEffect(() => {
        dispatch(getStudents(token))
    }, [dispatch])

    console.log(users)

  //   const columns: GridColDef[] = [


  //     { field: 'id', headerName: 'ID', width: 70 },
  //     { field: 'name', headerName: 'Name', width: 130 },
  //     { field: 'lastName', headerName: 'Last name', width: 130 },
  //     { field: 'age', headerName: 'Age', type: 'number', width: 90, },
  //     {
  //       field: 'fullName',
  //       headerName: 'Full name',
  //       description: 'This column has a value getter and is not sortable.',
  //       sortable: false,
  //       width: 160,
  //     },
  //   ];


  //   const rows = [
  //     { id: 1, lastName: 'Snow', name: 'Jon', age: 35 },
  //     { id: 2, lastName: 'Lannister', name: 'Cersei', age: 42 },
  //     { id: 3, lastName: 'Lannister', name: 'Jaime', age: 45 },
  //     { id: 4, lastName: 'Stark', name: 'Arya', age: 16 },
  //     { id: 5, lastName: 'Targaryen', name: 'Daenerys', age: null },
  //     { id: 6, lastName: 'Melisandre', name: null, age: 150 },
  //     { id: 7, lastName: 'Clifford', name: 'Ferrara', age: 44 },
  //     { id: 8, lastName: 'Frances', name: 'Rossini', age: 36 },
  //     { id: 9, lastName: 'Roxie', name: 'Harvey', age: 65 },
  //   ];
  // // const Data = [
  // //   {
  // //     id: 1,
  // //     year: 2016,
  // //     userGain: 80000,
  // //     userLost: 823,
  // //   },
  // //   {
  // //     id: 2,
  // //     year: 2017,
  // //     userGain: 45677,
  // //     userLost: 345,
  // //   },
  // //   {
  // //     id: 3,
  // //     year: 2018,
  // //     userGain: 78888,
  // //     userLost: 555,
  // //   },
  // //   {
  // //     id: 4,
  // //     year: 2019,
  // //     userGain: 90000,
  // //     userLost: 4555,
  // //   },
  // //   {
  // //     id: 5,
  // //     year: 2020,
  // //     userGain: 4300,
  // //     userLost: 234,
  // //   },
  // // ];

  // // const [chartData, setChartData] = useState({
  // //   labels: Data.map((d:any) => d.year),
  // //   datasets: [
  // //     {
  // //       label: 'tecnologies',
  // //       data: Data.map((d:any) => d.userGain),
  // //       backgroundColor: [
  // //           'rgba(255, 99, 132, 0.2)',
  // //           'rgba(54, 162, 235, 0.2)',
  // //           'rgba(255, 206, 86, 0.2)',
  // //           'rgba(75, 192, 192, 0.2)',
  // //           'rgba(153, 102, 255, 0.2)',
  // //           'rgba(255, 159, 64, 0.2)',
  // //         ],
  // //     },
  // //   ],
  // // });

  // return (
  //   <div style={{ height: 400, width: '100%' }}>
  //     {/* <Doughnut data={chartData} /> */}
  //     <DataGrid
  //       rows={rows}
  //       columns={columns}
  //       pageSize={5}
  //       rowsPerPageOptions={[5]}
  //       checkboxSelection
  //     />
  //   </div>
  // );

  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
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

  const handleSelectOne = (event: any, id: never) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds: any = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
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

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

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
                  Name
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Location
                </TableCell>
                <TableCell>
                  Phone
                </TableCell>
                <TableCell>
                  Registration date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.slice(0, limit).map((user: any ) => (
                <TableRow
                  hover
                  key={user.id}
                  // selected={selectedCustomerIds.indexOf(user?.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    {/* <Checkbox
                      checked={selectedCustomerIds.indexOf(user?.id) !== -1}
                      onChange={(event) => handleSelectOne(event, user?.id)}
                      value="true"
                    /> */}
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={users.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                        
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {users.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {user.email}
                  </TableCell>
                  <TableCell>
                    {`${user.country}`}
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
