import { FC, useState, useEffect, forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  SelectChangeEvent,
  IconButton,
  Checkbox,
} from "@mui/material";
import { State } from "../../../reducers/rootReducer";
import { clearProject, getAllProject } from "../../../actions/projects";
import { AprovedProject, reclutamientoInProject } from "../../../actions/Admin";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import AdminFilterProject from "../../AdminBar/AdminFilterProject";
import CancelMessage from "./cancelMessage";
import { AdminTable, AdminTableFilters } from "../AdminTable/AdminTable";

const AdminAcceptProject: FC = ({ ...rest }) => {
  const dispatch = useDispatch();

  const token: any = localStorage.getItem("token");
  const { projectsFilter } = useSelector((state: State) => state.project);

  useEffect(() => {
    dispatch(
      getAllProject(
        undefined,
        undefined,
        token,
        undefined,
        undefined,
        undefined,
        6,
        0
      )
    );
    return () => {
      dispatch(clearProject());
    };
  }, [dispatch]);

  let projects = projectsFilter;

  const [selectedCustomerIds, setSelectedCustomerIds] = useState<string[]>([]);
  const [limit, setLimit] = useState(12);
  const [render, setRender] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [opciones, setOpciones] = useState("Todos");
  const [open, setOpen] = useState(false);
  const options: string[] = [
    "Todos",
    "Reclutamiento",
    "En desarrollo",
    "Terminado",
    "En revision",
  ];
  const [idPrj, setId] = useState("");

  const handleSelectAll = (event: any) => {
    let newSelectedCustomerIds;
    if (event.target.checked) {
      newSelectedCustomerIds = projects.map((project: any) => project.uid);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (uid: any) => {
    let newSelectedCustomerIds: string[] = [];
    const selectedIndex = selectedCustomerIds.indexOf(uid);

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds,
        uid
      );
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(1)
      );
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }
    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleaccept = (id: string) => {
    dispatch(AprovedProject(token, id)), setRender(!render);
  };

  const handlecancel = (id: string) => {
    setId(id);
    setOpenModal(true);
  };

  const handleMultiaccept = () => {
    dispatch(reclutamientoInProject(token, selectedCustomerIds)),
      setRender(!render);
    dispatch(
      getAllProject(
        undefined,
        undefined,
        token,
        undefined,
        undefined,
        undefined,
        6,
        0
      )
    );
    return () => {
      dispatch(clearProject());
    };
  };

  let proyectos = projects;
 
  opciones !== "Todos"
    ? (proyectos = projects.filter((project: any) =>
        project.stateOfProject.includes(opciones)
      ))
    : (proyectos = projects);
    
  return (
    <>
      <AdminTable
        rows={6}
        columns={8}
        hasData={proyectos?.length > 0}
        noDataMessage=" No hay proyectos con los filtros aplicados!"
      >
        <AdminTableFilters>
          <AdminFilterProject />
        </AdminTableFilters>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedCustomerIds.length === proyectos.length}
                  color="primary"
                  indeterminate={
                    selectedCustomerIds.length > 0 &&
                    selectedCustomerIds.length < proyectos.length
                  }
                  onChange={handleSelectAll}
                />
              </TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Compañia</TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                Categoria
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                Estado
              </TableCell>
              <TableCell>Creado</TableCell>
              <TableCell>Descripcion</TableCell>
              <TableCell>Aceptar</TableCell>
              <TableCell>Rechazar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {proyectos?.map((proyectos: any) => (
              <TableRow
                hover
                key={proyectos.uid}
                selected={selectedCustomerIds.indexOf(proyectos.uid) !== -1}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.indexOf(proyectos.uid) !== -1}
                    onChange={(event) => handleSelectOne(proyectos.uid)}
                    value="true"
                  />
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <Typography
                      sx={{ maxWidth: 140 }}
                      color="textPrimary"
                      variant="body1"
                    >
                      {proyectos.name}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  {proyectos.company && Array.isArray(proyectos.company)
                    ? proyectos?.company[0]?.name
                    : proyectos?.company?.name}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {proyectos.category ? proyectos.category : "No registrado"}
                </TableCell>
                <TableCell
                  sx={{
                    width: 310,
                    textAlign: "center",
                  }}
                >
                  {proyectos.stateOfProject}
                </TableCell>

                <TableCell>
                  {proyectos.admission
                    ? // ? `${moment(
                      //       proyectos.admission
                      //   ).format('DD/MM/YYYY')}`
                      `${new Date(proyectos.admission).toLocaleDateString()}`
                    : "No registrado"}
                </TableCell>
                <TableCell sx={{ maxWidth: 200 }}>
                  {proyectos.description}
                </TableCell>

                <TableCell sx={{ maxWidth: 200 }}>
                  <IconButton
                    disabled={proyectos.stateOfProject !== "En revision"}
                  >
                    <CheckIcon
                      sx={{
                        cursor: "pointer",
                      }}
                      onClick={() => handleaccept(proyectos.uid)}
                    />
                  </IconButton>
                </TableCell>
                <TableCell sx={{ maxWidth: 200 }}>
                  <IconButton
                    disabled={proyectos.stateOfProject !== "En revision"}
                  >
                    <CloseIcon
                      sx={{
                        cursor: "pointer",
                      }}
                      onClick={() => handlecancel(proyectos.uid)}
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            <IconButton disabled={selectedCustomerIds.length < 2}>
              <CheckIcon
                sx={{ cursor: "pointer" }}
                onClick={handleMultiaccept}
              />
            </IconButton>
          </TableBody>
        </Table>
      </AdminTable>
      <CancelMessage
        setOpenModal={setOpenModal}
        openModal={openModal}
        idPrj={idPrj}
      />
    </>
  );
};

export default AdminAcceptProject;
