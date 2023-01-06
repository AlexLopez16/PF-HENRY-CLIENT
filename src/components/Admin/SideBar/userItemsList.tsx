import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WorkIcon from "@mui/icons-material/Work";
// import { Outlet } from 'react-router-dom';
import { NavLink } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
  width: "100%",
  borderRadius: "6px",
  padding: "0 ",
};

const activeLinkStyle = {
  backgroundColor: "#FFFF01",
  ...linkStyle,
};

const buttons = [
  {
    option: "Inicio",
    path: "/dashboard/graphs",
  },
  {
    option: "Alumnos",
    path: "/dashboard/students",
  },
  {
    option: "Companias",
    path: "/dashboard/companies",
  },
  {
    option: "Projectos",
    path: "/dashboard/projects",
  },
];

export const userItemsList: JSX.Element = (
  <List>
    {buttons.map((button: any) => {
      return (
        <ListItem>
          <NavLink
            to={button.path}
            style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
          >
            <ListItemButton>
              <AccountCircleIcon />
              <ListItemText primary={button.option} sx={{ pl: 2 }} />
            </ListItemButton>
          </NavLink>
        </ListItem>
      );
    })}
  </List>
);
