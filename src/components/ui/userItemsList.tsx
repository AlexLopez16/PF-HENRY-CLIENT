import {
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkIcon from '@mui/icons-material/Work';
// import BusinessIcon from '@mui/icons-material/Business';
// import { Outlet } from 'react-router-dom';

export const userItemsList: JSX.Element = (
    <List>
        <ListItem >
            <ListItemButton component="a" href="/dashboard/student">
                <AccountCircleIcon />
                <ListItemText primary="Estudiante" sx={{ pl: 2 }} />
            </ListItemButton>
        </ListItem>

        <ListItem >
            <ListItemButton component="a" href="/dashboard/proyectos">
                <WorkIcon />
                <ListItemText primary="Bolsa de trabajo" sx={{ pl: 2 }} />

            </ListItemButton>
        </ListItem>
    </List>
);