import { FC } from "react";
import { Box, Input, Typography } from '@mui/material';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProjectsFilter } from "../../actions/projects";



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
    const dispatch=useDispatch()
    let token = localStorage.getItem('token') || '';

    const handleInput = (e:string) => {
        setSearch(e)
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
        !search ? alert('no se ingreso un busqueda') : dispatch(getProjectsFilter(undefined,undefined,token,search,undefined,undefined))  
    }
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
                    
                {/* <form onSubmit={handleSubmit}>
                    <Input 
                        placeholder="Search..." 
                        onChange={(e) => handleInput(e.target.value)}
                        sx={styledInput} value={search}></Input>
                    <IconButton type="submit" aria-label="search">
                        <SearchIcon/>
                    </IconButton>
                </form> */}


        </Box>
        </>
    )
}


export default SearchBar;