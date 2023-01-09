import {
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { State } from '../../../reducers/rootReducer';
import { FC } from 'react';
import { SnackBar } from '../../SnackBar/SnackBar';

export const DataSkills: FC = () => {
  interface Props {
    tecnologies: [];
  }

  const { user } = useSelector((state: State) => state.student);

  let { tecnologies } = user as Props;
  tecnologies ||= [];

  const createData = (skill: string, exp: string) => {
    return { skill, exp };
  };

  const data = tecnologies?.map(({ skill, exp }) => createData(skill, exp));

  return (
    <TableContainer component={Paper} sx={{ margin: '10px auto' }}>
      <SnackBar />
      <Table sx={{ minWidth: 650, backgroundColor:'black' }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='center' sx={{fontFamily:'montserrat', fontWeight: 'bold', color:'#ffff01', fontSize:17 }}>
              Tecnologías/<br></br>Lenguajes
            </TableCell>
            <TableCell align='center' sx={{ffontFamily:'montserrat', fontWeight: 'bold', color:'#ffff01',fontSize:17  }}>
              Experiencia
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(({ skill, exp }) => (
            <TableRow
              key={skill}
              sx={{
                '&:last-child td, &:last-child th': {
                  border: 0,
                  fontFamily:'montserrat', fontWeight: 'bold', color:'white'
                },
              }}
            >
              <TableCell component='th' scope='row' align='center' sx={{ffontFamily:'montserrat', fontWeight: 'bold', color:'white' }}>
                {skill}
              </TableCell >
              <TableCell align='center' sx={{ffontFamily:'montserrat', fontWeight: 'bold', color:'white' }}>{exp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
