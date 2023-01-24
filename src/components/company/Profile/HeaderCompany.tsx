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
  email?: string;
}

export const HeaderCompany: FC<Props> = ({
  edit,
  setEdit,
  name,
  country,
  image,
  website,
  email,
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
        pt: 6,
        mb: 5,
      }}
    >
      <Paper
        elevation={10}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'space-evenly',
          height: '100%',
          width: '100%',
          borderRadius: 15,
          backgroundColor: '#0C252F',
          mb: 25,
          mt: 5,
          mx:15,
          p: 5,
        }}
      >
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            flexDirection: 'column',
          }}
        >
          <Avatar
            sx={{
              mb: 2,
              height: 80,
              width: 80,
              boxShadow:
                'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;',
            }}
            src={image}
          ></Avatar>
          <Container
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Box
              style={{
                color: 'white',
                fontFamily: 'montserrat',
                fontSize: 30,
                alignContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
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
              <Typography
                sx={{
                  color: '#ffff01',
                  mt: 2,
                  fontSize: 20,
                  mb: 2,
                }}
              >
                {email}
              </Typography>
            </Box>
          </Container>
        </Container>
        <IconButton aria-label='settings' onClick={handlerEdit}>
          <EditIcon sx={iconStyle} color='primary' fontSize='medium' />
        </IconButton>
      </Paper>
    </Container>
  );
};
