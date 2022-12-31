import { FC, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Box } from '@mui/system';
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
import { deleteStudent, getListStudents } from '../../../actions/student';
import { State } from '../../../reducers/rootReducer';
import { getProject, getProjectsFilter } from '../../../actions/projects';


ChartJS.register(ArcElement, Tooltip, Legend);


export interface Options {
  splitRegexp?: RegExp | RegExp[];
  stripRegexp?: RegExp | RegExp[];
  delimiter?: string;
  transform?: (part: string, index: number, parts: string[]) => string;
}

export declare function sentenceCase(input: string, options?: Options): string;

const AdminProject: FC = ({...rest}) => {
    const { users } = useSelector((state:State) => state.student)
    const dispatch = useDispatch()
    const token: any = localStorage.getItem('token') 
    
    useEffect(() => {
        dispatch(getProject(token))
        dispatch(getProjectsFilter())
    }, [dispatch])
    
    const {projectsFilter}=useSelector((state:State) => state.project)
    console.log(projectsFilter)
let projects=projectsFilter
  const [selectedCustomerIds, setSelectedCustomerIds] = useState<string[]>([]);
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(0);
  const [deleted, setDeleted] = useState<boolean>(false)
  const handleSelectAll = (event: any) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = projects.map((projects: any) => projects.id);
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
                    checked={selectedCustomerIds.length === projects.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0
                      && selectedCustomerIds.length < projects.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Nombre
                </TableCell>
                <TableCell>
                 compañia
                </TableCell>
                <TableCell>
                  categoria
                </TableCell>
                <TableCell>
                  Estado
                </TableCell>
                <TableCell>
                  Creado
                </TableCell>
                
                {/* {deleted  && <Button onClick={handleDelete}><DeleteIcon sx={{color: '#000'}}/></Button>} */}

              </TableRow>
            </TableHead>
            <TableBody>
              {projects.slice(0, limit).map((projects: any ) => (
                <TableRow
                  hover
                  key={projects.uid}
                  selected={selectedCustomerIds.indexOf(projects.uid) !== -1}
                >
                  <TableCell padding="checkbox">
                     <Checkbox
                      checked={selectedCustomerIds.indexOf(projects.uid) !== -1}
                      onChange={(event) => handleSelectOne(projects.uid)}
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
                        src={projects.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                        
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {projects.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {projects.company.name}
                  </TableCell>
                  <TableCell>
                    {projects.category ? projects.category  :'No registrado'}
                  </TableCell>
                  <TableCell>
                    {projects.stateOfProject}
                  </TableCell> 
                  <TableCell>
                    {projects.admission 
                    ? `${moment(projects.admission).format('DD/MM/YYYY')}` 
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

export default AdminProject;
