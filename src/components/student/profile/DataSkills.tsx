import { TableContainer, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useSelector } from 'react-redux';
import { State } from '../../../reducers/rootReducer';
import { FC } from 'react';

export const DataSkills: FC = () => {

    interface Props {
        tecnologies: []
    }

    const { user } = useSelector((state: State) => state.student)

    let { tecnologies } = user as Props
    tecnologies ||= [];

    const createData = (skill: string, exp: string) => {
        return { skill, exp };
    }

    const data = tecnologies?.map(({ skill, exp }) => (
        createData(skill, exp)
    ))

    return (
        <TableContainer component={Paper} sx={{ margin: '10px auto' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align='center' sx={{ fontWeight: 'bold' }}>Tecnologías/Lenguajes</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Experiencia</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(({ skill, exp }) => (
                        <TableRow
                            key={skill}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" align='center'>
                                {skill}
                            </TableCell>
                            <TableCell align="center">{exp}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
