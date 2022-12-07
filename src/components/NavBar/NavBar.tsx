import { FC } from "react";
import { Box } from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";
import SideBar from "../SideBar/SideBar";

const NavBar:FC = () => {
    return (
        <Box sx={{position: 'relative'}}>
            <SearchBar />
            <SideBar />
        </Box>
    )
}

export default NavBar;