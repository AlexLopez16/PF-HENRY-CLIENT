import {
    Collapse,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Avatar,
    MenuItem,
} from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { NavLink } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../reducers/rootReducer';
import { getInfoAdmin } from '../../../actions/Admin';

const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
    width: '100%',
    borderRadius: '6px',
    padding: '0 ',
};

const activeLinkStyle = {
    backgroundColor: '#FFFF01',
    ...linkStyle,
};

const buttons = [
    {
        option: 'Inicio',
        path: '/dashboard/graphs',
    },
    {
        option: 'Alumnos',
        path: '/dashboard/students',
    },
    {
        option: 'Compañias',
        path: '/dashboard/companies',
    },
    {
        option: 'Admins',
        path: '/dashboard/admins',
    },
    {
        option: 'Reviews',
        path: '/dashboard/getreviews',
    },
];

const UserItemsList: FC = () => {
    const dispatch = useDispatch();
    const token = localStorage.getItem('token') || '';
    const { data } = useSelector((state: State) => state.auth);
    const { id, rol } = data;
    const { user } = useSelector((state: State) => state.admin);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        dispatch(getInfoAdmin(id, token));
    }, [dispatch]);
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <List sx={{ justifySelf: 'flex-start' }}>
            {buttons.map((button: any) => {
                return (
                    <ListItem>
                        <NavLink
                            to={button.path}
                            style={({ isActive }) =>
                                isActive ? activeLinkStyle : linkStyle
                            }
                        >
                            <ListItemButton>
                                <FormatListBulletedIcon />
                                <ListItemText
                                    primary={button.option}
                                    sx={{ pl: 2 }}
                                />
                            </ListItemButton>
                        </NavLink>
                    </ListItem>
                );
            })}
            <ListItemButton onClick={handleClick}>
                <ListItemText primary="Proyectos" sx={{ pl: 2 }} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <ListItem>
                    <NavLink
                        to="/dashboard/projects"
                        style={({ isActive }) =>
                            isActive ? activeLinkStyle : linkStyle
                        }
                    >
                        <ListItemButton sx={{ pl: 6 }}>
                            <FormatListBulletedIcon />
                            <ListItemText primary="Proyectos" sx={{ pl: 2 }} />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem>
                    <NavLink
                        to="/dashboard/aceptProjects"
                        style={({ isActive }) =>
                            isActive ? activeLinkStyle : linkStyle
                        }
                    >
                        <ListItemButton sx={{ pl: 6 }}>
                            <FormatListBulletedIcon />
                            <ListItemText
                                primary="Aceptacion de proyectos"
                                sx={{ pl: 2 }}
                            />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
            </Collapse>
        </List>
    );
};

export default UserItemsList;
