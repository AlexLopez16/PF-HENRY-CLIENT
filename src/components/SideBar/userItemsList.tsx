import {
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkIcon from '@mui/icons-material/Work';
// import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const linkStyle = {
    textDecoration: "none",
    color: 'inherit',
};

export const userItemsList: JSX.Element = (
    <List>
        <ListItem >
            <NavLink to='/dashboard/student' style={linkStyle}>
                <ListItemButton>
                    <AccountCircleIcon />
                    <ListItemText primary="Estudiante" sx={{ pl: 2 }} />
                </ListItemButton>
            </NavLink>
        </ListItem>
        <ListItem >
            <NavLink to='/dashboard/proyectos' style={linkStyle}>
                <ListItemButton>
                    <WorkIcon />
                    <ListItemText primary="Bolsa de trabajo" sx={{ pl: 2 }} />
                </ListItemButton>
            </NavLink>
        </ListItem>
    </List>
);