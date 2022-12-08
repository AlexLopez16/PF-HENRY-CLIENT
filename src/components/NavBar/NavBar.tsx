import { FC } from "react";
import { Box } from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";
import SideBar from "../SideBar/SideBar";
import { Outlet } from "react-router-dom";


interface props {
    children?: JSX.Element | JSX.Element[]
}

const NavBar:FC<props> = ({children}) => { 
    return (

    <>
        <SearchBar/>
        <Box display='flex'>
            <SideBar />
            {children}
            <Outlet/>
        </Box>
    </>

    )
}

export default NavBar;