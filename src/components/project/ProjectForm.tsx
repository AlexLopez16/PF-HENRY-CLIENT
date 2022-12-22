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
    TextFieldProps
} from '@mui/material';

import ImageIcon from '@mui/icons-material/Image';
import FileUploadIcon from '@mui/icons-material/FileUpload';

import { newProject } from '../../actions/projects';
import Error from '../ui/Error';
import deleteIcon from "../../assets/delete-icon.svg";
import { fileUpload } from '../../helpers/fileUpload';

const ProjectForm: FC = () => {
    const nParticipants = [...Array(8)].map((_, index) => index + 1);

    const dispatch = useDispatch();

    const [participants, setParticipants] = useState('1');
    const [category, setCategory] = useState('programacion-web');

    //Upload Images Init
    interface data {
        name: string
        size: number
    }

    const [images, setImages] = useState<data[]>([])
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
        requirements: []
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
        const imagesUrl: string[] = []

        for (const image of images) {
            await fileUpload(image, 'projects')
                .then(res => imagesUrl.push(res))
                .catch(err => console.log(err))
        }

        const data = {
            name: values.name,
            description: values.description,
            participants: participants,
            requirements: listRequeriments,
            category: values?.category || category,
            images: imagesUrl
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
        { name: 'JavaScript' },
        { name: 'PHP' },
        { name: 'React' },
        { name: 'TypeScript' },
    ];

    //Upload Images
    const handleFilesChange = async (event: React.ChangeEvent<HTMLInputElement | {}>) => {
        const files = (event.target as HTMLInputElement).files || [];
        const data = Array.from(files)

        setImages([
            ...images,
            ...data
        ])
    }

    const imageClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        const id = (event.target as HTMLButtonElement).id
        const filter = images.filter(image => image.name !== id)
        setImages(filter)
    }

    return (
        <div>
            <Error />
            <Grid>
                <Paper
                    elevation={10}
                    style={{
                        width: 600,
                        height: '100%',
                        padding: 20,
                        margin: '50px auto',
                    }}
                >
                    <Grid textAlign="center" sx={{ mb: 2 }}>
                        <h2>Publica tu proyecto</h2>
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
                                    sx={{ mb: 2 }}
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
                                    name="description"
                                    id="outlined-multiline-static"
                                    label="Descripción"
                                    multiline
                                    rows={2}
                                    placeholder="Descripción del proyecto"
                                    fullWidth
                                    required
                                    sx={{ mb: 2 }}
                                    helperText={
                                        <ErrorMessage name="description">
                                            {(msg) => (
                                                <span style={{ color: 'red' }}>
                                                    {msg}
                                                </span>
                                            )}
                                        </ErrorMessage>
                                    }
                                />

                                <FormControl>
                                    <FormLabel id="group-label" required>
                                        Categoría
                                    </FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="group-label"
                                        name="buttons-group"
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
                                        sx={{ mb: 2 }}
                                    />
                                )}

                                <Field
                                    name="requirements"
                                    component={Autocomplete}
                                    options={tecnologies}
                                    getOptionLabel={(option: any) => option.name}
                                    multiple
                                    size="small"
                                    renderInput={(
                                        // params: AutocompleteRenderInputParams
                                        params: TextFieldProps
                                    ) => (
                                        <TextField
                                            {...params}
                                            name="requirements"
                                            label="Requerimientos"
                                            placeholder="Requerimientos"
                                        />
                                    )}
                                    sx={{ mb: 2 }}
                                />

                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">
                                        Participantes
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
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
                                                <IconButton aria-label="upload picture" component="label">
                                                    <input
                                                        hidden
                                                        accept="image/*"
                                                        multiple
                                                        type="file"
                                                        onChange={handleFilesChange}
                                                    />
                                                    <FileUploadIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>

                                {
                                    images && (
                                        images.map(image => (
                                            <div key={image.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#e5e5e5', marginTop: '10px', padding: '10px' }}>
                                                <ImageIcon />
                                                <div style={{ fontSize: '12px' }}>
                                                    <p>{image.name}</p>
                                                    <p>{image.size / 1000} KB</p>
                                                </div>
                                                <button id={image.name} onClick={imageClick} style={{ width: '25px', border: 'none', background: 'inherit', cursor: 'pointer' }}>
                                                    <img src={deleteIcon} id={image.name} alt='Delete' />
                                                </button>
                                            </div>
                                        ))
                                    )
                                }

                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    color="primary"
                                    disabled={props.isSubmitting}
                                    sx={{ mt: 2 }}
                                >
                                    Publicar Proyecto
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Paper>
            </Grid>
        </div>
    );
};


export default ProjectForm;