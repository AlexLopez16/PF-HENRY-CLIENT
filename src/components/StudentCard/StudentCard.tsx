import React, { FC } from 'react';

import {
  Box,
  Typography,
  Paper,
  CardHeader,
  Avatar,
  Collapse,
  List,
  ListItemButton,
} from '@mui/material';

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const StudentCard: FC = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Paper
      elevation={10}
      style={{ width: 400, height: '100%', padding: 20, margin: '50px auto', }}
    >
      <CardHeader
        avatar={
          <Avatar src='/broken-image.jpg' sx={{ width: 50, height: 50 }} />
        }
        title='nombre de alumno'
        // subheader="September 14, 2016"
      />

      <Box sx={{ width: '100%', maxWidth: 360 }}>
        <div>
          <Typography variant='h6'>Alumno@nabijash.com</Typography>
        </div>
      </Box>

      <List>
        <ListItemButton sx={{ marginLeft: 39 }} onClick={handleClick}>
          {open ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
        </ListItemButton>

        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <List>
              <Typography
                sx={{ maxWidth: 360, display: 'flex' }}
                variant='body1'
              >
                Descripcion: Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Velit, iste eligendi eius officiis similique veritatis
                placeat, autem nesciunt consectetur architecto distinctio atque
                assumenda! Illum tempora repellendus est nesciunt.
                Exercitationem, totam.
              </Typography>
            </List>

            <List>
              <Typography variant='body1'>
                Skill: javascript, typescript
              </Typography>
            </List>
          </List>
        </Collapse>
      </List>
    </Paper>

  );
};

export default StudentCard;
