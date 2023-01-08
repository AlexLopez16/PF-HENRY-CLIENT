import { FC, Dispatch, SetStateAction } from "react";
import {
  Paper,
  Grid,
  IconButton,
  Avatar,
  Typography,
  //  Button
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import {
  paperStyle,
  iconStyle,
  container,
  avatarStyle,
} from "../../../styles/Profile/HeaderStyles";

interface Props {
  edit: { header: boolean };
  setEdit: Dispatch<SetStateAction<{ header: boolean }>>;
  name?: string;
}

export const HeaderAdmin: FC<Props> = ({
  edit,
  setEdit,
  name,
}) => {
  const handlerEdit = () => {
    setEdit({
      ...edit,
      header: !edit.header,
    });
  };
  

  return (
    <Paper elevation={5} sx={{height: 'auto', width: 'auto', padding: '50px', display: 'flex'}}>
        <Avatar/>
        <Typography>Hola</Typography>
    </Paper>
  );
};