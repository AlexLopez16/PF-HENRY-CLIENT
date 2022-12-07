import { FC } from "react";
import { 
    Box, 
    List, 
    ListItem, 
    ListItemButton, 
    ListItemText,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';




const SideBar: FC = () => {
    return (
        
            <Box sx={{
                background: '#ffffff',
                width: 250,
                height: '100vh',
                color: '#272727',
                pt: 7,
                boxShadow: 1

                }}>
                <List>
                    <ListItem >
                        <ListItemButton component="a" href="/student">
                            <AccountCircleIcon />
                            <ListItemText primary="Estudiante" sx={{pl: 2}}/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem >
                        <ListItemButton component="a" href="/dashboard">
                            <WorkIcon />
                            <ListItemText primary="Bolsa de trabajo" sx={{pl: 2}}/>
                            
                        </ListItemButton>
                    </ListItem>

                    <ListItem >
                        <ListItemButton component="a" href="/empresas">
                            <BusinessIcon/>
                            <ListItemText primary="Empresas" sx={{pl: 2}}/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        
    )
}

export default SideBar;