import { FC } from "react";
import { Box, TextField, Input } from '@mui/material';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const StyledBox = {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 65,
    boxShadow: 2,
    
    
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

    return (
        <>
          <Box display='block' 
            sx={StyledBox}>

            <Input 
                placeholder="Search..." 
                onChange={(e) => handleInput(e.target.value)}
                sx={styledInput}></Input>
            <IconButton type="submit" aria-label="search">
                <SearchIcon />
            </IconButton>
          </Box>

          <p>{search}</p>
        </>
    )
}


export default SearchBar;