import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Autocomplete } from 'formik-mui';

import * as Yup from 'yup';

import {
    Grid,
    Button,
    Paper,
    FormControlLabel,
    Radio,
    RadioGroup,
    SelectChangeEvent,
    FormControl,
    FormLabel,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    FilledInput,
    IconButton,
    InputAdornment,
    TextFieldProps,
    Box,
} from '@mui/material';

import ImageIcon from '@mui/icons-material/Image';
import FileUploadIcon from '@mui/icons-material/FileUpload';

import { newProject } from '../../actions/projects';
import Error from '../ui/Error';
import deleteIcon from '../../assets/delete-icon.svg';
import { fileUpload } from '../../helpers/fileUpload';
import NavBar from '../NavBar/NavBar';
import Footer from '../../pages/LandingPage/Footer';
import { SnackBar } from '../SnackBar/SnackBar';

const ProjectForm: FC = () => {
    const nParticipants = [...Array(8)].map((_, index) => index + 1);

    const dispatch = useDispatch();

    const [participants, setParticipants] = useState('1');
    const [category, setCategory] = useState('programacion-web');

    //Upload Images Init
    interface data {
        name: string;
        size: number;
    }

    const [images, setImages] = useState<data[]>([]);
    // Upload Images End

    const token = localStorage.getItem('token') || '';

    const categoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCategory((event.target as HTMLInputElement).value);
    };

    const participantChange = (event: SelectChangeEvent) => {
        setParticipants(event.target.value);
    };

    const initialValues = {
        name: '',
        description: '',
        requirements: [],
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('* Ingresa el nombre del proyecto'),
        description: Yup.string().required(
            '* Ingresa una descripción del proyecto'
        ),
    });

    const onSubmit = async (values: any, props: any) => {
        const listRequeriments: any = values.requirements?.map(
            (e: any) => e.name
        );

        //Cloudinary Images
        const imagesUrl: string[] = [];

        for (const image of images) {
            await fileUpload(image, 'projects')
                .then((res) => imagesUrl.push(res))
                //revisar este console.log
                .catch((err) => console.log(err));
        }

        const data = {
            name: values.name,
            description: values.description,
            participants: participants,
            requirements: listRequeriments,
            category: values?.category || category,
            images: imagesUrl,
        };

        dispatch(newProject(data, token));

        setTimeout(() => {
            props.resetForm();
            props.setSubmitting(false);
            setParticipants('1');
            setImages([]);
        }, 1000);
    };

    const tecnologies = [
        { name: '.Net' },
        { name: 'Airflow' },
        { name: 'Angular' },
        { name: 'Assembler' },
        { name: 'AWS' },
        { name: 'Boostrap' },
        { name: 'C' },
        { name: 'C#' },
        { name: 'C++' },
        { name: 'Cobol' },
        { name: 'CSS' },
        { name: 'CSS3' },
        { name: 'Django' },
        { name: 'Docker' },
        { name: 'Ethers.js' },
        { name: 'Express' },
        { name: 'Figma' },
        { name: 'Firebase' },
        { name: 'Flask' },
        { name: 'Flutter' },
        { name: 'GraphQL' },
        { name: 'Java' },
        { name: 'JavaScript' },
        { name: 'jQuery' },
        { name: 'Kotlin' },
        { name: 'Laravel' },
        { name: 'Lua' },
        { name: 'Material UI' },
        { name: 'MatLab' },
        { name: 'MongoDB' },
        { name: 'Mongoose' },
        { name: 'MySQL' },
        { name: 'Nest.js' },
        { name: 'Next.js' },
        { name: 'NodeJS' },
        { name: 'NumPy' },
        { name: 'Objective-C' },
        { name: 'Pandas' },
        { name: 'PHP' },
        { name: 'PostgresSQL' },
        { name: 'Python' },
        { name: 'R' },
        { name: 'React Native' },
        { name: 'React' },
        { name: 'Ruby' },
        { name: 'Solidity' },
        { name: 'Swift' },
        { name: 'TypeScript' },
        { name: 'Vue' },

        //con CTRL + Shift + P y selecciono en orden ascendente
    ];

    //Upload Images
    const handleFilesChange = async (
        event: React.ChangeEvent<HTMLInputElement | {}>
    ) => {
        const files = (event.target as HTMLInputElement).files || [];
        const data = Array.from(files);

        setImages([...images, ...data]);
    };

    const imageClick = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.preventDefault();
        const id = (event.target as HTMLButtonElement).id;
        const filter = images.filter((image) => image.name !== id);
        setImages(filter);
    };

    return (
        <Box
            sx={{
                backgroundColor: 'black',
            }}
        >
            <div>
                <NavBar />
                <SnackBar
                    successMsg=" Solicitud enviada con exito"
                    errorMsg="No puedes crear mas de un proyecto al mes si no eres premium!"
                />

                <Grid>
                    <Paper
                        elevation={10}
                        style={{
                            width: 500,
                            height: '100%',
                            padding: 20,
                            margin: '50px auto',
                            marginBottom: 153,
                            marginTop: 100,
                        }}
                    >
                        <Grid
                            textAlign="center"
                            fontFamily="montserrat"
                            sx={{ mb: 2 }}
                        >
                            <h2>Crear proyecto</h2>
                        </Grid>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                        >
                            {(props) => (
                                <Form>
                                    <Field
                                        as={TextField}
                                        name="name"
                                        label="Nombre"
                                        placeholder="Nombre del projecto"
                                        fullWidth
                                        required
                                        color="info"
                                        sx={{ mb: 2 }}
                                        helperText={
                                            <ErrorMessage name="name">
                                                {(msg) => (
                                                    <span
                                                        style={{
                                                            color: '#d6423e',
                                                        }}
                                                    >
                                                        {msg}
                                                    </span>
                                                )}
                                            </ErrorMessage>
                                        }
                                    />

                                    <Field
                                        as={TextField}
                                        name="description"
                                        id="outlined-multiline-static"
                                        label="Descripción"
                                        multiline
                                        placeholder="Descripción del proyecto"
                                        fullWidth
                                        required
                                        color="info"
                                        sx={{ mb: 2 }}
                                        helperText={
                                            <ErrorMessage name="description">
                                                {(msg) => (
                                                    <span
                                                        style={{
                                                            color: '#d6423e',
                                                        }}
                                                    >
                                                        {msg}
                                                    </span>
                                                )}
                                            </ErrorMessage>
                                        }
                                    />

                                    <FormControl>
                                        <FormLabel
                                            color="info"
                                            id="group-label"
                                            required
                                        >
                                            Categoría
                                        </FormLabel>
                                        <RadioGroup
                                            row
                                            aria-labelledby="group-label"
                                            name="buttons-group"
                                            color="info"
                                            value={category}
                                            onChange={categoryChange}
                                            sx={{ mb: 2 }}
                                        >
                                            <FormControlLabel
                                                value="programacion-web"
                                                control={<Radio />}
                                                label="Programación Web"
                                            />
                                            <FormControlLabel
                                                value="data-science"
                                                control={<Radio />}
                                                label="Data Science"
                                            />
                                            <FormControlLabel
                                                value="other"
                                                control={<Radio />}
                                                label="Otro"
                                            />
                                        </RadioGroup>
                                    </FormControl>

                                    {category === 'other' && (
                                        <Field
                                            as={TextField}
                                            name="category"
                                            placeholder="Nombre de la categoría"
                                            label="Nombre de la categoría"
                                            fullWidth
                                            required
                                            color="info"
                                            sx={{ mb: 2 }}
                                        />
                                    )}

                                    <Field
                                        name="requirements"
                                        component={Autocomplete}
                                        options={tecnologies}
                                        getOptionLabel={(option: any) =>
                                            option.name
                                        }
                                        multiple
                                        size="small"
                                        color="info"
                                        renderInput={(
                                            // params: AutocompleteRenderInputParams
                                            params: TextFieldProps
                                        ) => (
                                            <TextField
                                                {...params}
                                                color="info"
                                                name="requirements"
                                                label="Requerimientos"
                                                placeholder="Requerimientos"
                                            />
                                        )}
                                        sx={{ mb: 2 }}
                                    />

                                    {/* <Field
                    as={TextField}
                    name='name'
                    label='Test teorico'
                    placeholder='Nombre del projecto'
                    fullWidth
                    color='info'
                    sx={{ mb: 2 }}
                    helperText={
                      <ErrorMessage name='name'>
                        {(msg) => <span style={{ color: '#d6423e' }}>{msg}</span>}
                      </ErrorMessage>
                    }
                  /> */}

                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Test teorico"
                                        multiline
                                        fullWidth
                                        sx={{ mb: 2 }}
                                        rows={2}
                                    />

                                    <FormControl fullWidth>
                                        <InputLabel
                                            color="info"
                                            id="demo-simple-select-label"
                                        >
                                            Participantes
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            color="info"
                                            value={participants}
                                            label="Participantes"
                                            onChange={participantChange}
                                            sx={{ mb: 2 }}
                                        >
                                            {nParticipants.map((number) => (
                                                <MenuItem
                                                    key={number}
                                                    value={number}
                                                >
                                                    {number}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                    {/* IMAGES */}
                                    <FormControl fullWidth>
                                        <InputLabel>Images</InputLabel>
                                        <FilledInput
                                            disabled
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="upload picture"
                                                        component="label"
                                                    >
                                                        <input
                                                            hidden
                                                            accept="image/*"
                                                            multiple
                                                            type="file"
                                                            onChange={
                                                                handleFilesChange
                                                            }
                                                        />
                                                        <FileUploadIcon />
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>

                                    {images &&
                                        images.map((image) => (
                                            <div
                                                key={image.name}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'space-between',
                                                    background: '#e5e5e5',
                                                    marginTop: '10px',
                                                    padding: '10px',
                                                }}
                                            >
                                                <ImageIcon />
                                                <div
                                                    style={{ fontSize: '12px' }}
                                                >
                                                    <p>{image.name}</p>
                                                    <p>
                                                        {image.size / 1000} KB
                                                    </p>
                                                </div>
                                                <button
                                                    id={image.name}
                                                    onClick={imageClick}
                                                    style={{
                                                        width: '25px',
                                                        border: 'none',
                                                        background: 'inherit',
                                                        cursor: 'pointer',
                                                    }}
                                                >
                                                    <img
                                                        src={deleteIcon}
                                                        id={image.name}
                                                        alt="Delete"
                                                    />
                                                </button>
                                            </div>
                                        ))}

                                    <Button
                                        sx={{
                                            marginTop: 2,
                                            fontFamily: 'poppins',
                                        }}
                                        type="submit"
                                        variant="contained"
                                        fullWidth
                                        color="primary"
                                        disabled={props.isSubmitting}
                                    >
                                        Publicar Proyecto
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </Paper>
                </Grid>
            </div>
            <Footer />
        </Box>
    );
};

export default ProjectForm;
