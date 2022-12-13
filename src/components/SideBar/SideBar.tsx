import { FC } from "react";
import { Box } from '@mui/material';
import { userItemsList } from "./userItemsList";
import FiltroDashStudent from "../FiltroDashStudent/FiltroDashStudent";

const SideBar: FC = () => {
    return (        
            <Box sx={{
                background: '#ffffff',
                width: 250,
                height: '100vh',
                mt: '68px',
                color: '#272727',
                pt: 7,
                boxShadow: 1,

                }}>
                {userItemsList}

                <FiltroDashStudent />
            </Box>
        
    )
}

export default SideBar;