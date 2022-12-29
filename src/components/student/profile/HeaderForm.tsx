import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import {
    Paper,
    IconButton,
    Avatar,
    Typography,
    TextField,
    Button,
} from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

import {
    avatarStyle,
    buttonStyle,
    container,
    iconStyle,
    paperStyle,
} from '../../../styles/Profile/HeaderFormStyles';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import {
    getStudentInfo,
    updatePhotoStudent,
    updateStudentInfo,
} from '../../../actions/student';
import { State } from '../../../reducers/rootReducer';

interface Props {
    edit: { header: boolean; about: boolean; skills: boolean };
    setEdit: Dispatch<
        SetStateAction<{ header: boolean; about: boolean; skills: boolean }>
    >;
    name?: string;
    lastName?: string;
    country?: string;
}

export const HeaderForm: FC<Props> = ({
    edit,
    setEdit,
    name,
    lastName,
    country,
}) => {
    const dispatch = useDispatch();
    const { data } = useSelector((state: State) => state.auth);
    const { user } = useSelector((state: State) => state.student);
    const { id } = data;
    const { image } = user;
    const token = localStorage.getItem('token') || '';

    const handlerEdit = () => {
        setEdit({
            ...edit,
            header: !edit.header,
        });
    };

    const initialValues = {
        name: name,
        lastName: lastName,
        country: country,
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Ingresa tu nombre'),
        lastName: Yup.string().required('Ingresa tu apellido'),
        country: Yup.string().required('Ingresa tu pais de residencia'),
    });

    const onSubmit = (values: any, props: any) => {
        dispatch(updateStudentInfo(id, token, values));
        setEdit({
            ...edit,
            header: !edit.header,
        });
    };

    const handleFileChange = (
        event: React.ChangeEvent<HTMLInputElement | any>
    ) => {
        const file = event.target.files[0];
        if (file) {
            dispatch(updatePhotoStudent(id, token, file));
        }
        setTimeout(() => {
            dispatch(getStudentInfo(id, token));
        }, 1000);
    };

    return (
        <Paper elevation={5} style={paperStyle}>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {(props) => (
                    <Form>
                        <div style={container}>
                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Avatar sx={avatarStyle} src={image}></Avatar>
                                <IconButton
                                    style={iconStyle}
                                    aria-label="upload picture"
                                    component="label"
                                >
                                    <input
                                        hidden
                                        accept="image/*"
                                        type="file"
                                        onChange={handleFileChange}
                                    />
                                    <PhotoCamera />
                                </IconButton>
                            </div>

                            <div>
                                <Typography
                                    sx={{
                                        fontSize: '22px',
                                        fontWeight: 'bold',
                                        marginBottom: '10px',
                                    }}
                                >
                                    Información personal
                                </Typography>

                                <Field
                                    as={TextField}
                                    name="name"
                                    label="Nombre(s)"
                                    variant="outlined"
                                    fullWidth
                                    sx={{ marginBottom: '10px' }}
                                    helperText={
                                        <ErrorMessage name="name">
                                            {(msg) => (
                                                <span style={{ color: 'red' }}>
                                                    {msg}
                                                </span>
                                            )}
                                        </ErrorMessage>
                                    }
                                />
                                <Field
                                    as={TextField}
                                    name="lastName"
                                    label="Apellido(s)"
                                    variant="outlined"
                                    fullWidth
                                    sx={{ marginBottom: '10px' }}
                                    helperText={
                                        <ErrorMessage name="lastName">
                                            {(msg) => (
                                                <span style={{ color: 'red' }}>
                                                    {msg}
                                                </span>
                                            )}
                                        </ErrorMessage>
                                    }
                                />
                                <Field
                                    as={TextField}
                                    name="country"
                                    label="Pais"
                                    variant="outlined"
                                    fullWidth
                                    sx={{ marginBottom: '10px' }}
                                    helperText={
                                        <ErrorMessage name="country">
                                            {(msg) => (
                                                <span style={{ color: 'red' }}>
                                                    {msg}
                                                </span>
                                            )}
                                        </ErrorMessage>
                                    }
                                />

                                <Button
                                    type="submit"
                                    style={buttonStyle}
                                    variant="contained"
                                    disabled={
                                        Object.keys(props.errors).length > 0
                                    }
                                >
                                    Guardar
                                </Button>
                                <Button
                                    style={buttonStyle}
                                    variant="contained"
                                    onClick={handlerEdit}
                                >
                                    Cancelar
                                </Button>
                            </div>
                        </div>
                        {/* {console.log(props)} */}
                    </Form>
                )}
            </Formik>
        </Paper>
    );
};
