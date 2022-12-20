import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip"
import Logout from "@mui/icons-material/Logout";
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import { useSelector } from "react-redux";
import { State } from "../../reducers/rootReducer";
import { Link } from "react-router-dom"
import { Typography } from "@mui/material";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { rol } = useSelector((state: State) => state.auth.data);
    
    let role = rol

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          }
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <AutoAwesomeMotionIcon fontSize="small" />
          </ListItemIcon>
          {role === 'STUDENT_ROL' ? 'Administrar solicitudes' : 'Administrar proyectos'}
        </MenuItem>
        <MenuItem>
          {/* <ListItemIcon>
            <CreateNewFolderIcon fontSize="small" />
          </ListItemIcon> */}
          {role === 'STUDENT_ROL' 
          ? null
          :  <>
            <Link to = "/newProject">
              <ListItemIcon>
                <CreateNewFolderIcon fontSize="small" /> 
              <Typography 
              variant="body1"
              sx={{display: 'flex', marginLeft: 2, textDecoration:'Typography' }}>
              Nuevo proyecto
              </Typography>
                </ListItemIcon>
            </Link>
            </>
            
            
          }
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Cerrar sesion
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
