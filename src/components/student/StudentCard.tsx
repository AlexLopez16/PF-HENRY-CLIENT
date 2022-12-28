import React, { FC } from 'react';

import {
    Box,
    Typography,
    Paper,
    CardHeader,
    Avatar,
    Collapse,
    List,
    ListItemButton,
    Button,
} from '@mui/material';

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../reducers/rootReducer';
import { acceptStudent, DeleteStudent } from '../../actions/company';
import { useParams } from 'react-router-dom';

interface StudentProps {
    name: string;
    email: string;
    descripcion: string;
    tecnologies: object[];
    image: string;
    idstd: string;
    working: boolean;
}

const StudentCard: FC<StudentProps> = ({
    name,
    email,
    descripcion,
    tecnologies,
    image,
    idstd,
    working,
    setRender,
    render,
}: StudentProps | any) => {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(true);
    let rol = useSelector((state: State) => state.auth.data.rol);

    const { id: idpjt } = useParams();

    const handleClick = () => {
        setOpen(!open);
    };

    const handlerAccept = () => {
        dispatch(acceptStudent(idpjt, idstd));
        setRender(!render);
    };
    const handlerDelete = () => {
        dispatch(DeleteStudent(idpjt, idstd));
        setRender(!render);
    };

    let style;
    working === true // si el alumno esta en postulado aparece con un style y si es aceptado (working) con otro
        ? (style = {
              width: 400,
              height: '100%',
              padding: 20,
              margin: '50px 5px 0 60%',
              display: 'inline-block',
          })
        : (style = {
              width: 'auto',
              height: '100%',
              padding: 20,
              margin: '50px 60% 0% 20px',
              display: 'inline-block',
          });

    return (
        <Paper elevation={10} style={style}>
            <CardHeader
                avatar={<Avatar src={image} sx={{ width: 50, height: 50 }} />}
                title={name}
                // subheader="September 14, 2016"
            />

            <Box sx={{ width: '100%', maxWidth: 360 }}>
                <div>
                    <Typography variant="h6">
                        {email}

                        {rol === 'COMPANY_ROL' && working === false ? (
                            <Button
                                sx={{
                                    ml: '40px',
                                    fontWeight: 600,
                                    color: 'yellow',
                                    background: 'black',
                                }}
                                size="small"
                                color="primary"
                                variant="text"
                                onClick={handlerAccept}
                            >
                                Aceptar
                            </Button>
                        ) : (
                            <Button
                                sx={{
                                    ml: '75%',
                                    b: '50px',
                                    fontWeight: 600,
                                    color: 'yellow',
                                    background: 'black',
                                }}
                                size="small"
                                color="primary"
                                variant="text"
                                onClick={handlerDelete}
                            >
                                Rechazar
                            </Button>
                        )}
                    </Typography>
                </div>
            </Box>

            <List>
                <ListItemButton sx={{ marginLeft: 39 }} onClick={handleClick}>
                    {open ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
                </ListItemButton>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <List>
                            <Typography
                                sx={{ maxWidth: 360, display: 'flex' }}
                                variant="body1"
                            >
                                Descripcion: {descripcion}
                            </Typography>
                        </List>

                        <List>
                            <Typography variant="body1">
                                Skills:{' '}
                                {tecnologies.map(({ skill, exp }: any) => (
                                    <p>{`${skill}: ${exp}`}</p>
                                ))}
                            </Typography>
                        </List>
                    </List>
                </Collapse>
            </List>
        </Paper>
    );
};

export default StudentCard;
