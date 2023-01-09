import { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import { getAdmins } from "../../../actions/Admin";
import { validaToken } from "../../../actions/auth";
import * as moment from "moment";
import EditIcon from "@mui/icons-material/Edit";
import { State } from "../../../reducers/rootReducer";
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

const AdminPanel: FC = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { status } = useSelector((state: State) => state.auth);
  if (!status && token) {
    dispatch(validaToken(token));
  }
  
  const { user } = useSelector((state: State) => state.student); //cambiar por admin
  useEffect(() => {
    dispatch(getAdmins(token));
  }, [dispatch]);

  const [selectedCustomerIds, setSelectedCustomerIds] = useState<string[]>([]);
  const [limit, setLimit] = useState(12);


//   const handleDisable = (selectID: string) => {
//     // selectedCustomerIds.forEach((selectID: string) =>
//     dispatch(disableStudent(token, selectID));
//     // );
//   };


  return (
    <>
      <PreLoader />
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
              {user?.map((user: any) => ( //cambiar por admin
                <TableRow
                  hover
                  key={user.uid}
                  selected={selectedCustomerIds.indexOf(user.uid) !== -1}
                >
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Avatar src={user.image} sx={{ mr: 2 }}>{user.name?.slice(0, 1)}</Avatar>
                      <Typography color="textPrimary" variant="body1">
                        {user.name}
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
                    <EditIcon />
                  </TableCell>
                  {/* <TableCell>
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
                  </TableCell> */}
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
