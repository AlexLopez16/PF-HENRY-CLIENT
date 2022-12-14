import { FC, Dispatch, SetStateAction } from 'react';
import {
  Paper,
  Grid,
  IconButton,
  Avatar,
  Typography,
  Container,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

import { iconStyle, container } from '../../../styles/Profile/HeaderStyles';
import { SnackBar } from '../../SnackBar/SnackBar';

interface Props {
  edit: { header: boolean; about: boolean; skills: boolean };
  setEdit: Dispatch<
    SetStateAction<{ header: boolean; about: boolean; skills: boolean }>
  >;
  name?: string;
  lastName?: string;
  country?: string;
  image?: string;
  email?: string;
}

export const Header: FC<Props> = ({
  edit,
  setEdit,
  name,
  lastName,
  country,
  image,
  email,
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
          backgroundColor: 'black',
          mt: 10,
          boxShadow:
            'rgba(255, 255, 255, 255.16) 0px 1px 4px, rgb(255, 255, 255) 0px 0px 0px 3px',
        }}
      >
        <SnackBar />
        <Grid textAlign='center'>
          <IconButton aria-label='settings' onClick={handlerEdit}>
            <EditIcon sx={iconStyle} color='primary' fontSize='medium' />
          </IconButton>
        </Grid>
        <div style={container}>
          <Avatar
            sx={{
              height: 120,
              width: 120,
              boxShadow:
                'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;',
            }}
            src={image}
          ></Avatar>
        </div>

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
            {name}&nbsp;{lastName}
          </Typography>
          <Typography
            sx={{
              color: '#ffff01',
              mt: 2,
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
            {email}
          </Typography>
        </div>
      </Paper>
    </Container>
  );
};
