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
import { State } from '../../../reducers/rootReducer';
import {
    companyGetInfo,
    CompanyUpdateInfo,
    updatePhotoCompany,
} from '../../../actions/company';
import { SelectChangeEvent } from '@mui/material';

interface Props {
    edit: { header: boolean };
    setEdit: Dispatch<SetStateAction<{ header: boolean }>>;
    name?: string;
    website?: string;
    country?: string;
}

export const HeaderFormAdmin: FC<Props> = ({
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
        country: pais
    };

    

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Ingresa tu nombre'),
        website: Yup.string().required('Ingresa tu url'),
    });

    const onSubmit = (values: any, props: any) => {
        dispatch(CompanyUpdateInfo(id, token, {
            name: values.name,
            website: values.website,
            country: pais
        }));
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

                                 <FormControl
                                        color="info"
                                        sx={{
                                            width: '100%',
                                            marginTop: 1,
                                            marginBottom: 2,
                                        }}
                                    >
                                        <InputLabel
                                            color="info"
                                            id="demo-simple-select-label"
                                        >
                                            Nacionalidad
                                        </InputLabel>
                                        <Select
                                            id="demo-simple-select"
                                            labelId="demo-simple-select-label"
                                            label="Nacionalidad"
                                            value={pais}
                                            onChange={handleChange}
                                        >
                                            {paises.map((pais) => (
                                                <MenuItem key= {pais} value={pais}>
                                                    {pais}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                <Field
                                    as={TextField}
                                    name="website"
                                    label="pagina web"
                                    variant="outlined"
                                    fullWidth
                                    sx={{ marginBottom: '10px' }}
                                    helperText={
                                        <ErrorMessage name="website">
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
                    </Form>
                )}
            </Formik>
        </Paper>
    );
};
