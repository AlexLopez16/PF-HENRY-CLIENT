import { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Box } from "@mui/system";
import { disableStudent, getListStudents } from "../../../actions/student";
import { validaToken } from "../../../actions/auth";
import * as moment from "moment";
import EditIcon from "@mui/icons-material/Edit";
import { State } from "../../../reducers/rootReducer";
import SideBar from "../SideBar/SideBar";
import {
  Avatar,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  FormControlLabel,
  Switch,
  FormGroup,
} from "@mui/material";
import Pages from "../../ui/Pagination";
import { PreLoader } from "../../PreLoader/PreLoader";
import { clearProject } from "../../../actions/projects";
import AdminFilterStudent from "./AdminFilterStudent";

ChartJS.register(ArcElement, Tooltip, Legend);

const AdminStudent: FC = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { status } = useSelector((state: State) => state.auth);
  if (!status && token) {
    dispatch(validaToken(token));
  }

  const { users } = useSelector((state: any) => state.student);
  useEffect(() => {
    dispatch(getListStudents(token, false, 6, 0));
  }, [dispatch]);

  users.forEach((e: any) => console.log(e.tecnologies))

  const handleDisable = (selectID: string) => {
    dispatch(disableStudent(token, selectID));
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <PreLoader />
      <AdminFilterStudent />
      <Card>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Ubicacion</TableCell>
                <TableCell>Estado</TableCell>
                <TableCell>Fecha de ingreso</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users?.map((user: any) => (
                <TableRow hover key={user.uid}>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Avatar src={user.image} sx={{ mr: 2 }}>
                        {user.name?.slice(0, 1)}
                      </Avatar>
                      <Typography color="textPrimary" variant="body1">
                        {user.name ? user.name : user.username}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {user.email ? user.email : "No registrado"}
                  </TableCell>
                  <TableCell>
                    {user.country ? user.country : "No registrado"}
                  </TableCell>
                  <TableCell>{user.state ? "Activo" : "Inactivo"}</TableCell>
                  <TableCell>
                    {user.admission
                      ? `${moment(user.admission).format("DD/MM/YYYY")}`
                      : "No registrado"}
                  </TableCell>
                  <TableCell>
                    <FormGroup
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mt: 3,
                      }}
                    >
                      <FormControlLabel
                        control={
                          <Switch
                            defaultChecked={user.state ? true : false}
                            size="small"
                            color="primary"
                            onChange={() => handleDisable(user.uid)}
                          />
                        }
                        label={undefined}
                      />
                    </FormGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Pages />
        </Box>
      </Card>
    </Box>
  );
};

export default AdminStudent;
