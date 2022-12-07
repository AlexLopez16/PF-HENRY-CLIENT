import React, { FC } from "react";
import StudentCard from "../components/StudentCard/StudentCard";
import NavBar from "../components/NavBar/NavBar";
import { Box } from "@mui/material";


//aca se va a tener que hacer un map
const DashboardUser: FC = () => {
    return (
        <Box sx={{display: 'flex'}}>
            <NavBar />
            <StudentCard />
        </Box>
    )

}

export default DashboardUser;   