import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import { clearAdmin, disableAdmin, getAdmins } from "../../../actions/Admin";
import { validaToken } from "../../../actions/auth";
import { State } from "../../../reducers/rootReducer";
import {
  Avatar,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  FormControlLabel,
  Switch,
  FormGroup,
  Button,
} from "@mui/material";
import Pages from "../../ui/Pagination";
import { useNavigate } from "react-router-dom";
import { SnackBar } from "../../SnackBar/SnackBar";
import { AdminTable, AdminTableFilters } from "../AdminTable/AdminTable";

const AdminPanel: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { status, data } = useSelector((state: State) => state.auth);
  if (!status && token) {
    dispatch(validaToken(token));
  }

  useEffect(() => {
    dispatch(getAdmins(token, 6, 0));
    return () => {
      dispatch(clearAdmin());
    };
  }, [dispatch]);

  //Revisar tipos y cambiarlos tambien en AdminStudent
  const { admins } = useSelector((state: any) => state.admin);

  const handleDisable = (selectID: string) => {
    dispatch(disableAdmin(token, selectID));
  };

  return (
    <>
      <SnackBar successMsg={"Cambio de estado exitoso"} />
      <AdminTable
        columns={4}
        rows={6}
        hasData={admins?.length > 0}
        noDataMessage="No se encontro al administrador"
      >
        <AdminTableFilters>
        <Button
          variant="contained"
          onClick={() => navigate("/dashboard/createAdmin")}
          sx={{ margin: "15px", float: "right" }}
        >
          Agregar administrador
        </Button>
        </AdminTableFilters>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Estado</TableCell>
                <TableCell>Cambiar estado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {admins?.map((user: any) => (
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
                        {user.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {user.email ? user.email : "No registrado"}
                  </TableCell>
                  <TableCell>{user.state ? "Activo" : "inactivo"}</TableCell>
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
                            disabled={user.email === (data as any).email}
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
      </AdminTable>
    </>
  );
};

export default AdminPanel;
