import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WorkIcon from "@mui/icons-material/Work";
// import { Outlet } from 'react-router-dom';
import { NavLink } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};

const buttons = [
  {
    option: "panel de alumnos",
    path: "/adminStudent",
  },
  {
    option: "panel de companias",
    path: "/adminCompany",
  },
  {
    option: "panel de projectos",
    path: "/adminProject",
  },
];

export const userItemsList: JSX.Element[] = buttons.map((button: any) => {
  return (
    <List>
      <ListItem>
        <NavLink to={button.path} style={linkStyle}>
          <ListItemButton>
            <AccountCircleIcon />
            <ListItemText primary={button.option} sx={{ pl: 2 }} />
          </ListItemButton>
        </NavLink>
      </ListItem>
    </List>
  );
});
