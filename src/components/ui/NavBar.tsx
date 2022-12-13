import { FC } from "react";
import { Box } from "@mui/material";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";


interface props {
    children?: JSX.Element | JSX.Element[]
}

const NavBar: FC<props> = ({ children }) => {

    return (

        <Box>
            <Box sx={{ position: 'fixed', left: 0, right: 0 }}>
                <SearchBar />
            </Box>
            <Box sx={{ position: 'fixed', top: 0, bottom: 0 }}>
                <SideBar />
            </Box>
            <Box display='flex' sx={{ pt: '65px', pl: '250px' }}>
                {children}
                <Outlet />
            </Box>
        </Box>

    )

}

export default NavBar;