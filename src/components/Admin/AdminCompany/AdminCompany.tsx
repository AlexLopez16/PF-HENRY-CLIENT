import { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import {
  getCompany,
  disableCompany,
  clearGetCompany,
} from "../../../actions/company";
import * as moment from "moment";
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
    Container,
    ListItemButton,
    Collapse,
    IconButton,
  } from "@mui/material";
import FilterListIcon from '@mui/icons-material/FilterList';
import { State } from "../../../reducers/rootReducer";
import { validaToken } from "../../../actions/auth";
import React from "react";
import { PreLoader } from "../../PreLoader/PreLoader";
import Pages from "../../ui/Pagination";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { acceptCompany, rejectCompany } from "../../../actions/Admin";
import { SnackBar } from "../../SnackBar/SnackBar";
import AdminFilterCompany from "./AdminFilterCompany";

const AdminCompany: FC = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { user }: object | any = useSelector((state: State) => state.company);
  const users = user;
  const { status } = useSelector((state: State) => state.auth);

  if (!status && token) {
    dispatch(validaToken(token));
  }

  useEffect(() => {
    dispatch(getCompany(token as string, false, 6, 0));
    return () => {
      dispatch(clearGetCompany());
    };
  }, [dispatch]);

  const [selectedCustomerIds, setSelectedCustomerIds] = useState<any[]>([]);
  const [limit, setLimit] = useState(12);
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = React.useState(true);

  const handleDisable = (selectID: string) => {
    dispatch(disableCompany(token, selectID));
  };
  const handleaccept = (id: string) => {
    console.log(id);
    dispatch(acceptCompany(token, id, true));
  };

  const handlecancel = (id: string) => {
    console.log(id);
    dispatch(rejectCompany(token, id, false));
  };

  return (
    <>
      <PreLoader />
      <SnackBar successMsg="Correo enviado a la compañia" />
      <Card>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            marginLeft: 0,
          }}
        >
          <ListItemButton onClick={() => setOpen(!open)} sx={{ maxWidth: 350 }}>
            {open ? (
              <FilterListIcon> </FilterListIcon>
            ) : (
              <FilterListIcon> </FilterListIcon>
            )}
          </ListItemButton>{" "}
          <Collapse
            in={open}
            timeout="auto"
            unmountOnExit
            orientation="horizontal"
          >
            <AdminFilterCompany />
          </Collapse>
        </Container>
        <Box sx={{ minWidth: 900 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Locación</TableCell>
                <TableCell>Estado</TableCell>
                <TableCell>Fecha Registro</TableCell>

                <TableCell>Cambiar Estado</TableCell>
                <TableCell>Aceptar</TableCell>
                <TableCell>Rechazar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users?.slice(0, limit).map((user: any) => (
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
                      <Avatar src={user.image} sx={{ mr: 2 }}>
                        {user.name[0]}
                      </Avatar>
                      <Typography color="textPrimary" variant="body1">
                        {user.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    {user.country ? user.country : "No registrado"}
                  </TableCell>

                  <TableCell>{user.state ? "Activo" : "Inactivo"}</TableCell>

                  <TableCell>
                    {user.admission
                      ? `${moment(user.admission).format("DD/MM/YYYY")}`
                      : "No registrado"}
                  </TableCell>

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

                  <TableCell>
                    <IconButton disabled={user.verify === true}>
                      <CheckIcon
                        sx={{ cursor: "pointer" }}
                        onClick={() => handleaccept(user.uid)}
                      />
                    </IconButton>
                  </TableCell>

                  <TableCell>
                    <IconButton disabled={user.verify === true}>
                      <CloseIcon
                        sx={{ cursor: "pointer" }}
                        onClick={() => handlecancel(user.uid)}
                      />
                    </IconButton>
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

export default AdminCompany;
