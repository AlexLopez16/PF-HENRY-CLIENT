import { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  IconButton,
  Rating,
} from "@mui/material";
import { State } from "../../../reducers/rootReducer";
import {
  AprovedProject,
  clearReviews,
  getAllReviews,
} from "../../../actions/Admin";
import CloseIcon from "@mui/icons-material/Close";
import ReviewCancel from "./ReviewCancel";
import AdminReviewsFilter from "./AdminReviewsFilter";
import { SnackBar } from "../../SnackBar/SnackBar";
import { AdminTable, AdminTableFilters } from "../AdminTable/AdminTable";

const AdminReviews: FC = ({ ...rest }) => {
  const dispatch = useDispatch();

  const token: any = localStorage.getItem("token");
  const { reviews } = useSelector((state: State) => state.review);
  useEffect(() => {
    dispatch(getAllReviews(token, 6, 0, undefined));
    return () => {
      dispatch(clearReviews());
    };
  }, [dispatch]);

  let target: object[] = reviews;

  const [selectedCustomerIds, setSelectedCustomerIds] = useState<string[]>([]);
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(0);
  const [render, setRender] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [opciones, setOpciones] = useState("Todos");
  const [open, setOpen] = useState(false);
  const [idrev, setId] = useState("");

  const handleSelectAll = (event: any) => {
    let newSelectedCustomerIds;
    if (event.target.checked) {
      newSelectedCustomerIds = target.map((target: any) => target.uid);
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
  const handlerClick = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleaccept = (id: string) => {
    dispatch(AprovedProject(token, id)), setRender(!render);
  };

  const handlecancel = (id: string) => {
    setId(id);
    setOpenModal(true);
  };

  const handleLimitChange = (event: any) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event: any, newPage: any) => {
    setPage(newPage);
  };
  const handlerClickFilter = () => {
    setOpen(!open);
  };

  return (
    <>
      <SnackBar successMsg={"Borrado exitoso"} />
      <AdminTable
        columns={7}
        rows={6}
        hasData={target?.length > 0}
        noDataMessage="No hay reviews con los filtros aplicados!"
      >
        <AdminTableFilters>
          <AdminReviewsFilter />
        </AdminTableFilters>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                {/* <Checkbox
                                        checked={
                                            selectedCustomerIds.length ===
                                            target.length
                                        }
                                        color="primary"
                                        indeterminate={
                                            selectedCustomerIds.length > 0 &&
                                            selectedCustomerIds.length <
                                            target.length
                                        }
                                        onChange={handleSelectAll}
                                    /> */}
              </TableCell>
              <TableCell>Nombre de proyecto</TableCell>
              <TableCell>Nombre de la compañia</TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                Alumno
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                }}
              >
                Puntuacion empresa
              </TableCell>
              <TableCell>Puntuacion Proyecto</TableCell>
              <TableCell>Descripcion</TableCell>
              {/* <TableCell>Desactivar</TableCell> */}
              <TableCell>Eliminar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {target &&
              target.map((review: any) => (
                <TableRow
                  hover
                  key={review && review.uid}
                  selected={selectedCustomerIds.indexOf(review.uid) !== -1}
                >
                  <TableCell padding="checkbox">
                    {/* <Checkbox
                                            checked={
                                                selectedCustomerIds.indexOf(
                                                    review.uid
                                                ) !== -1
                                            }
                                            onChange={(event) =>
                                                handleSelectOne(review.uid)
                                            }
                                            value="true"
                                        /> */}
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
                        {review && Array.isArray(review.project)
                          ? review.project[0]?.name
                          : review.project?.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {review && Array.isArray(review.project)
                      ? review.project[0].company[0].name
                      : review.project?.company?.name}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    {review && Array.isArray(review.student)
                      ? review.student[0]?.name
                      : review?.student?.name}
                  </TableCell>
                  <TableCell
                    sx={{
                      width: 310,
                      textAlign: "center",
                    }}
                  >
                    <Rating
                      name="read-only"
                      readOnly
                      value={review.ratingCompany}
                    />
                  </TableCell>

                  <TableCell>
                    <Rating
                      name="read-only"
                      readOnly
                      value={review.ratingProject}
                    />
                  </TableCell>
                  <TableCell sx={{ maxWidth: 200 }}>
                    {review.description}
                  </TableCell>

                  <TableCell sx={{ maxWidth: 200 }}>
                    <IconButton>
                      <CloseIcon
                        sx={{
                          cursor: "pointer",
                        }}
                        onClick={() => handlecancel(review.uid)}
                      />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </AdminTable>

      <ReviewCancel
        setOpenModal={setOpenModal}
        openModal={openModal}
        idrev={idrev}
      />
    </>
  );
};

export default AdminReviews;
