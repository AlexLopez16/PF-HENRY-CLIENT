import { FC, Dispatch, SetStateAction } from 'react';
import {
  Paper,
  Grid,
  IconButton,
  Avatar,
  Typography,
  Box,
  Container,
  //  Button
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

import {
  paperStyle,
  iconStyle,
  container,
  avatarStyle,
} from '../../../styles/Profile/HeaderStyles';

interface Props {
  edit: { header: boolean };
  setEdit: Dispatch<SetStateAction<{ header: boolean }>>;
  name?: string;
  country?: string;
  image?: string;
}

export const HeaderCompany: FC<Props> = ({
  edit,
  setEdit,
  name,
  country,
  image,
}) => {
  const handlerEdit = () => {
    setEdit({
      ...edit,
      header: !edit.header,
    });
  };

  return (
    <Container
      sx={{
        height: '90%',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        pt: 5,
      }}
    >
      <Paper
        elevation={5}
        sx={{
          borderRadius: 25,
          mb:40,
          mt:10,
      }}
      >
        <Grid textAlign='right'>
          <IconButton aria-label='settings' onClick={handlerEdit}>
            <EditIcon sx={iconStyle} color='primary' fontSize='medium' />
          </IconButton>
        </Grid>
        <div style={container}>
          <div>
            <Avatar sx={avatarStyle} src={image}></Avatar>
          </div>

          <div>
            {name?.toUpperCase()}
            <Typography>{country}</Typography>
          </div>
        </div>
      </Paper>
    </Container>
  );
};
