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
  website?: string;
}

export const HeaderCompany: FC<Props> = ({
  edit,
  setEdit,
  name,
  country,
  image,
  website,
}) => {
  const handlerEdit = () => {
    setEdit({
      ...edit,
      header: !edit.header,
    });
  };
  // info renderizada en 'mi perfil'
  return (
    <Container
      sx={{
        display: 'flex',
        alignContent: 'sapce-around',
        justifyContent: 'space-around',
        height: 250,
        pt: 6,
        mb: 25,
      }}
    >
      <Paper
        elevation={10}
        sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
          alignContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'space-evenly',
          height: '100%',
          width: '60%',
          borderRadius: 15,
          backgroundColor: '#0C252F',
          mb: 25,
          mt: 5,
        }}
      >
        <Grid textAlign='center'>
          <IconButton aria-label='settings' onClick={handlerEdit}>
            <EditIcon sx={iconStyle} color='primary' fontSize='medium' />
          </IconButton>
        </Grid>
        <div style={container}>
          <Avatar
            sx={{
              height: '20%',
              width: '20%',
              boxShadow:
                'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;',
            }}
            src={image}
          ></Avatar>

          <div
            style={{
              color: 'white',
              fontFamily: 'montserrat',
              fontSize: 30,
            }}
          >
            {name?.toUpperCase()}
            <Typography
              sx={{
                color: 'white',
                mt: 2,
                fontFamily: 'montserrat',
                fontStyle: 'italic',
                fontSize: 20,
              }}
            >
              {country}
            </Typography>
            <Typography
              sx={{
                color: '#ffff01',
                mt: 2,
                fontSize: 20,
              }}
            >
              {website}
            </Typography>
          </div>
        </div>
      </Paper>
    </Container>
  );
};
