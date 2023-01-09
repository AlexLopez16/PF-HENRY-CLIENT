import { FC, Dispatch, SetStateAction } from 'react';
import { Paper, Typography, Button, TextField } from '@mui/material';
import {
  paperStyle,
  container,
  buttonStyle,
} from '../../../styles/Profile/AboutFormStyles';

import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { updateStudentInfo } from '../../../actions/student';
import { State } from '../../../reducers/rootReducer';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { SnackBar } from '../../SnackBar/SnackBar';

interface Props {
  edit: { header: boolean; about: boolean; skills: boolean };
  setEdit: Dispatch<
    SetStateAction<{ header: boolean; about: boolean; skills: boolean }>
  >;
  description?: string;
}

export const AboutForm: FC<Props> = ({ edit, setEdit, description }) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: State) => state.auth);
  const { id } = data;
  const token = localStorage.getItem('token') || '';

  const handlerEdit = () => {
    setEdit({
      ...edit,
      about: !edit.about,
    });
  };

  const initialValues = {
    description: description,
  };

  const validationSchema = Yup.object().shape({
    description: Yup.string().required('Ingresa una descripción sobre tí'),
  });

  const onSubmit = (values: any, props: any) => {
    dispatch(updateStudentInfo(id, token, values));
    setEdit({
      ...edit,
      about: !edit.about,
    });
  };

  return (
    <Paper elevation={5} style={paperStyle}>
      <SnackBar />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(props) => (
          <Form>
            <div style={container}>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontFamily: 'montserrat',
                  color: '#ffff01',
                }}
                variant='h5'
              >
                Sobre mí
              </Typography>
              <div>
                <Button
                  size='small'
                  type='submit'
                  style={buttonStyle}
                  variant='contained'
                  disabled={Object.keys(props.errors).length > 0}
                >
                  Guardar
                </Button>
                <Button
                  size='small'
                  style={buttonStyle}
                  variant='contained'
                  onClick={handlerEdit}
                >
                  Cancelar
                </Button>
              </div>
            </div>
            <Field
              as={TextField}
              name='description'
              id='outlined-multiline-static'
              multiline
              variant='outlined'
              rows={4}
              placeholder='Este texto va a ser visto en tu perfil'
              fullWidth
              inputProps={{
                style: { color: 'white', fontFamily: 'montserrat' },
              }}
              sx={{
                '.MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ffff01',
                },
              }}
              helperText={
                <ErrorMessage name='description'>
                  {(msg) => <span style={{ color: 'red' }}>{msg}</span>}
                </ErrorMessage>
              }
            />
          </Form>
        )}
      </Formik>
    </Paper>
  );
};
