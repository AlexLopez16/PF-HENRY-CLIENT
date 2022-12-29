import { FC } from "react";
import { Box } from '@mui/material';
import { userItemsList } from "./userItemsList";

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
            {userItemsList}
        </Box>

    )
}

export default SideBar;