import { FC } from "react";
import { Box, Button, Input, Typography } from '@mui/material';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ProjectForm from "../project/ProjectForm";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { State } from "../../reducers/rootReducer";
import AccountMenu from "../AdminBar/AdminBar";




const StyledBox = {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 65,
    boxShadow: 2,
    background: '#fff',
    p: '0 30px'
}

const styledInput = {
    position: 'relative',
    right: 10,
    '&:hover' : {
        
    }
}

const SearchBar: FC = () => {
    const [search, setSearch] = useState('')

    const handleInput = (e:string) => {
        setSearch(e)
    }

    const handleSubmit = () => {
        !search ? alert('no se ingreso un busqueda') : <></>
    }

    const { rol } = useSelector((state: State) => state.auth.data);
    
    let role = rol

    return (
        <>
          <Box display='flex' 
            sx={StyledBox}>
            <Box>
            <img src="/ISOLOGO_HENRY_BLACK.png" alt="" />
                
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                    >
                    NABIJASH
                </Typography>
            </Box>
                    
                <form onSubmit={handleSubmit}>
                    <Input 
                        placeholder="Search..." 
                        onChange={(e) => handleInput(e.target.value)}
                        sx={styledInput}></Input>
                    <IconButton type="submit" aria-label="search">
                        <SearchIcon/>
                    </IconButton>
                </form>
            <AccountMenu/>
        </Box>
        </>
    )
}


export default SearchBar;