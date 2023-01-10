import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import {
  Paper,
  IconButton,
  Avatar,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
  Container,
  Grid,
} from '@mui/material';
import { PhotoCamera, AddPhotoAlternateOutlined } from '@mui/icons-material';
import { buttonStyle } from '../../../styles/Profile/HeaderFormStyles';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../reducers/rootReducer';
import {
  companyGetInfo,
  CompanyUpdateInfo,
  updatePhotoCompany,
} from '../../../actions/company';
import { SelectChangeEvent } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

interface Props {
  edit: { header: boolean };
  setEdit: Dispatch<SetStateAction<{ header: boolean }>>;
  name?: string;
  website?: string;
  country?: string;
}

export const HeaderFormCompany: FC<Props> = ({
  edit,
  setEdit,
  name,
  website,
  country,
}) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: State) => state.auth);
  const { user } = useSelector((state: State) => state.company);
  const { id } = data;
  const { image } = user;
  const token = localStorage.getItem('token') || '';
  const [pais, setPais] = useState(country);
  console.log(user);

  const handlerEdit = () => {
    setEdit({
      ...edit,
      header: !edit.header,
    });
  };

  const initialValues = {
    name: name,
    website: website,
    country: pais,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Ingresa tu nombre'),
    website: Yup.string().required('Ingresa tu url'),
  });

  const onSubmit = (values: any, props: any) => {
    dispatch(
      CompanyUpdateInfo(id, token, {
        name: values.name,
        website: values.website,
        country: pais,
      }),
    );
    setEdit({
      ...edit,
      header: !edit.header,
    });
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement | any>,
  ) => {
    const file = event.target.files[0];
    if (file) {
      dispatch(updatePhotoCompany(id, token, file));
    }
    setTimeout(() => {
      dispatch(companyGetInfo(id, token));
    }, 1000);
  };

  const paises: string[] = [
    'Argentina',
    'Bolivia',
    'Brasil',
    'Chile',
    'Colombia',
    'Costa Rica',
    'Cuba',
    'Ecuador',
    'El Salvador',
    'Guatemala',
    'Honduras',
    'México',
    'Nicaragua',
    'Panamá',
    'Paraguay',
    'Perú',
    'Puerto Rico',
    'República Dominicana',
    'Uruguay',
    'Venezuela',
  ];

  const handleChange = (event: SelectChangeEvent) => {
    setPais(event.target.value as string);
  };

  // COMPONENTE MODIFICAR PERFIL

  return (
    <Container
      maxWidth='md'
      sx={{
        display: 'flex',
        flexDirection: 'column',
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
          alignContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          width: '80%',
          borderRadius: 15,
          backgroundColor: '#0C252F',
          mb: 25,
          mt: 5,
          pt: 3,
          pr: 5,
          pl: 5,
        }}
      >
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              <div
                style={{
                  fontSize: 25,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 5,
                  flexDirection: 'column',
                  flexWrap: 'wrap',
                  alignContent: 'space-around',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Avatar
                    sx={{
                      height: '35%',
                      width: '35%',
                      boxShadow:
                        'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;',
                      mb: 1,
                    }}
                    src={image}
                  ></Avatar>
                  <IconButton
                    style={{
                      borderRadius: '50%',
                      backgroundColor: 'white',
                      color: 'black',
                      padding: '5px',
                      marginTop: '15px',
                    }}
                    aria-label='upload picture'
                    component='label'
                  >
                    <input
                      hidden
                      accept='image/*'
                      type='file'
                      onChange={handleFileChange}
                    />
                    <AddPhotoAlternateOutlined />
                  </IconButton>
                </div>
                <Grid
                  container
                  direction='column'
                  justifyContent='center'
                  alignItems='center'
                  textAlign='center'
                  color='primary'
                  sx={{
                    fontFamily: 'montserrat',
                  }}
                >
                  <Typography
                    sx={{
                      color: 'white',
                      fontSize: 25,
                      fontWeight: 'bold',
                      mt: 5,
                      mb: 3,
                      fontFamily: 'montserrat',
                    }}
                  >
                    Editar perfil
                  </Typography>

                  <Field
                    variant='outlined'
                    as={TextField}
                    name='name'
                    placeholder='Nombre'
                    label='Nombre'
                    size='small'
                    color='primary'
                    sx={{
                      boxShadow:
                        'rgba(255, 255, 255, 0.06) 0px 2px 4px 0px inset',
                      '.MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#ffff01',
                      },
                      label: { color: 'white' },
                      input: { color: 'white' },
                      margin: '10px 0px',
                      width: '70%',
                      fontFamily: 'montserrat',
                    }}
                    helperText={
                      <ErrorMessage name='name'>
                        {(msg) => <span style={{ color: 'red' }}>{msg}</span>}
                      </ErrorMessage>
                    }
                  />
                  <FormControl
                    variant='outlined'
                    color='primary'
                    size='small'
                    sx={{
                      width: '70%',
                      marginTop: 1,
                      marginBottom: 2,
                      display: 'inline-flex',
                      justifyContent: 'space-around',
                      alignContent: 'space-around',
                      textAlign: 'left',
                    }}
                  >
                    <Select
                      inputProps={{ 'aria-label': 'Without label' }}
                      color='secondary'
                      value={pais}
                      displayEmpty
                      onChange={handleChange}
                      sx={{
                        color: 'white',
                        boxShadow: 'rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset',
                        '.MuiOutlinedInput-notchedOutline': {
                          borderColor: 'white',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'white',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'white',
                        },
                        '.MuiSvgIcon-root ': {
                          fill: 'white !important',
                        },
                        label: { color: 'white' },
                        input: { color: 'white' },
                      }}
                    >
                      <MenuItem value=''>
                        <p>Selecciona un país</p>
                      </MenuItem>
                      {paises.map((pais) => (
                        <MenuItem key={pais} value={pais}>
                          {pais}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <Field
                    as={TextField}
                    name='website'
                    label='Pagina web'
                    variant='outlined'
                    size='small'
                    color='primary'
                    fullWidth
                    fontFamily='montserrat'
                    sx={{
                      color: 'white',
                      boxShadow: 'rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset',
                      '.MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white',
                      },
                      '.MuiSvgIcon-root ': {
                        fill: 'white !important',
                      },
                      label: { color: 'white' },
                      input: { color: 'white' },
                      margin: '10px 0px',
                      width: '70%',
                      fontFamily: 'montserrat',
                    }}
                    helperText={
                      <ErrorMessage name='website'>
                        {(msg) => <span style={{ color: 'red' }}>{msg}</span>}
                      </ErrorMessage>
                    }
                  />

                  <Button
                    size='small'
                    type='submit'
                    style={{
                      borderRadius: '30px',
                      margin: '10px 15px 10px 0',
                      fontFamily: 'montserrat',
                      fontWeight: 'bold',
                    }}
                    variant='contained'
                    disabled={Object.keys(props.errors).length > 0}
                  >
                    Guardar
                  </Button>
                  <Button
                    size='small'
                    style={{
                      borderRadius: '30px',
                      margin: '10px 15px 10px 0',
                      fontFamily: 'montserrat',
                      fontWeight: 'bold',
                    }}
                    variant='outlined'
                    onClick={handlerEdit}
                  >
                    Cancelar
                  </Button>
                </Grid>
              </div>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
};
