import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProject, getProjectsFilter, pages } from "../../actions/projects";
import { State } from "../../reducers/rootReducer";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/material";

let limit;
let init;
const Pages: FC = () => {
  let dispatch = useDispatch();
  let token: String | null = localStorage.getItem("token");
  const [definePage, setPage] = useState({ limit: 6, init: 0 });

  useEffect(() => {
    dispatch(
      getProjectsFilter(
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
  }, [dispatch]);
  const { total } = useSelector((state: State) => state.project);
  console.log(total);

  let numberOfPages = Math.ceil(total / 6);
  const handlerClick = async (e: any, value: any) => {
    // setPage({limit:value*6,init:(value*6)-6})
    limit = 6;
    init = value * 6 - 6;
    dispatch(
      getProjectsFilter(
        undefined,
        undefined,
        token,
        undefined,
        undefined,
        undefined,
        limit,
        init
      )
    );
  };

  return (
    <Container sx={{ marginTop: 2 }} maxWidth="lg">
      <Stack spacing={2}>
        <Pagination
          sx={{ alignSelf: "center" }}
          count={numberOfPages}
          color="primary"
          onChange={handlerClick}
        />
      </Stack>
    </Container>
  );
};

export default Pages;
