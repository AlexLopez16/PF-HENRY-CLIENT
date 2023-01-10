import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../reducers/rootReducer";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { Container, IconButton, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { getCompany, getCountries } from "../../../actions/company";

const styledInput = {
  position: "relative",
  right: 10,
  "&:hover": {},
};

const AdminFilterCompany: FC = () => {
  const dispatch = useDispatch();
  let token = localStorage.getItem("token") || "";
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("");
  const { countries } = useSelector((state: State) => state.company);

  useEffect(() => {
    dispatch(getCountries(token));
  }, [dispatch]);

  const handlerchanges = (e: string) => {
    setSearch(e);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(getCompany(token, false, 6, 0, search, country));
  };

  const handleDelete = () => {
    setSearch("");
    dispatch(getCompany(token, false, 6, 0, undefined, country));
  };

  const handlerchange = (e: any) => {
    setCountry(e.target.innerText);
    dispatch(getCompany(token, false, 6, 0, search, e.target.innerText));
  };

  return (
    <Container>
      <Box
        sx={{
          width: 1350,
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between 5",
          alignItems: "center",
        }}
      >
        <div>
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="Buscar por nombre de la compañia"
              onChange={(e) => handlerchanges(e.target.value)}
              sx={{
                styledInput,
                width: 330,
                marginLeft: 0,
              }}
              value={search}
            ></Input>

            <IconButton aria-label="search" sx={{ padding: 0 }}>
              {search?.length ? (
                <HighlightOffIcon onClick={handleDelete} />
              ) : (
                ""
              )}
            </IconButton>
            <IconButton
              type="submit"
              aria-label="search"
              sx={{ marginRight: 8 }}
            >
              <SearchIcon />
            </IconButton>
          </form>
        </div>
        <div style={{ width: 255 }}>
          <Autocomplete
            onChange={(e) => {
              handlerchange(e);
            }}
            size="small"
            id="tags-outlined"
            options={countries?.length ? countries : []}
            getOptionLabel={(option: any) => option}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                label="Filtar por paises "
                placeholder="Paises"
              />
            )}
          />
        </div>
      </Box>
    </Container>
  );
};

export default AdminFilterCompany;
