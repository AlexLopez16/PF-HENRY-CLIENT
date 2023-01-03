import { FC } from "react";
import SideBar from "./SideBar/SideBar";
import AdminStudent from "./AdminStudent/AdminStudent";
import { Box } from "@mui/system";

const DashboardAdmin: FC = () => {
  return (
    <>
      {/* <SideBar> */}
      <AdminStudent />
      {/* </SideBar> */}
    </>
  );
};

export default DashboardAdmin;
