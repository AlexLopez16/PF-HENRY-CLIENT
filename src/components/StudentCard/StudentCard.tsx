import React, { FC } from "react";

import {
  Box,
  Typography,
  Paper,
  CardHeader,
  Avatar,
  Collapse,
  List,
  ListItemButton,
 
} from "@mui/material";

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


interface StudentProps{

name:string,
email:string,
descripcion:string,
skill:string,

}



const StudentCard: FC <StudentProps> = ({name,email,descripcion,skill}:StudentProps) => {




  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };


  return (

    <Paper elevation={10} style={{ width: 400, height: "100%", padding: 20, margin: "50px 5px 0 5px",display:"inline-block"}}>


      <CardHeader
        avatar={
          <Avatar src="/broken-image.jpg"
            sx={{ width: 50, height: 50 }}
          />
        }

        title={name}
      // subheader="September 14, 2016"
      />

      <Box sx={{ width: '100%', maxWidth: 360, }}>
        <div>
          <Typography variant="h6">{email}</Typography>
        </div>
      </Box>


      <List>
        <ListItemButton sx={{ marginLeft: 39, }} onClick={handleClick}>

          {open ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
        </ListItemButton>


        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <List

            >
              <Typography
                sx={{ maxWidth: 360, display: 'flex' }}

                variant="body1">{descripcion}</Typography>
            </List>

            <List >
              <Typography variant="body1">{skill}</Typography>
            </List>
          </List>
        </Collapse>
      </List>

    </Paper>
  )

}

export default StudentCard;