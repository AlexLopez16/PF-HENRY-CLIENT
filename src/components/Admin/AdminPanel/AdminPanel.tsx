import { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import { disableAdmin, getAdmins } from "../../../actions/Admin";
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
import { PreLoader } from "../../PreLoader/PreLoader";
import { registerAdmin } from '../../../actions/Admin';

const AdminPanel: FC = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { status } = useSelector((state: State) => state.auth);
  if (!status && token) {
    dispatch(validaToken(token));
  }

  useEffect(() => {
    dispatch(getAdmins(token));
  }, [dispatch]);

  //Revisar tipos y cambiarlos tambien en AdminStudent
  const { admins } = useSelector((state: any) => state.admin);

  const handleDisable = (selectID: string) => {
    dispatch(disableAdmin(token, selectID));
  };

  return (
    <>
      <PreLoader />
      <Card>
      <Button variant="contained" onClick={() => dispatch(registerAdmin)}>Agregar administrador</Button>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Estado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {admins?.map((user: any) => (
                <TableRow
                  hover
                  key={user.uid}
                >
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
                  <TableCell>{user.state ? 'Activo' : "inactivo"}</TableCell>
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
    </>
  );
};

export default AdminPanel;
