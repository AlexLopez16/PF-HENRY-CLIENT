import React, { FC } from "react";
import { Box } from "@mui/material";
import { userItemsList } from "./userItemsList";
import FiltroDashStudent from "../../../pages/FiltrosSideBar";

interface props {
  children: JSX.Element | JSX.Element[];
}

const SideBar: FC<props> = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          background: "#ffffff",
          width: 250,
          height: "100vh",
          mt: "68px",
          color: "#272727",
          pt: 7,
          boxShadow: 1,
        }}
      >
        {userItemsList}
      </Box>
      {children}
    </Box>
  );
};

export default SideBar;
