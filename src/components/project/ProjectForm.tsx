import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Formik, Form, Field, ErrorMessage } from 'formik';
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
    Typography,
    AutocompleteRenderInputParams,
} from '@mui/material';

import { Autocomplete } from 'formik-mui';

import { newProject } from '../../actions/projects';
import SearchBar from '../ui/SearchBar';

import {
    spanStyle,
    typographyStyle,
} from '../../styles/Profile/SkillsFormStyles';
import Error from '../ui/Error';

const ProjectForm: FC = () => {
    const nParticipants = [...Array(8)].map((_, index) => index + 1);

    const dispatch = useDispatch();

    const [participants, setParticipants] = useState('1');
    const [input, setInput] = useState('');
    const [requirements, setRequirements] = useState<string[]>([]);
    const [category, setCategory] = useState('programacion-web');

    const token = localStorage.getItem('token') || '';

    const categoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCategory((event.target as HTMLInputElement).value);
    };

    const participantChange = (event: SelectChangeEvent) => {
        setParticipants(event.target.value);
    };

    const handleClick = () => {
        setRequirements([...requirements, input]);
        setInput('');
    };

    const removeRequirement = (event: React.MouseEvent<HTMLButtonElement>) => {
        const id = (event.target as HTMLElement).id;
        const filter = requirements.filter((requirement) => requirement !== id);
        setRequirements(filter);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    const initialValues = {
        name: '',
        description: '',
        category: '',
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('* Ingresa el nombre del proyecto'),
        description: Yup.string().required(
            '* Ingresa una descripción del proyecto'
        ),
    });

    const onSubmit = (values: any, props: any) => {
        const listRequeriments: any = values.requirements?.map(
            (e: any) => e.name
        );
        const data = {
            name: values.name,
            description: values.description,
            participants: participants,
            requirements: listRequeriments,
            category: values?.category || category,
        };
        dispatch(newProject(data, token));
        setTimeout(() => {
            props.resetForm();
            props.setSubmitting(false);
            setRequirements([]);
            setParticipants('1');
        }, 1000);
    };

    const tecnologies = [
        { name: 'JavaScript' },
        { name: 'PHP' },
        { name: 'React' },
        { name: 'TypeScript' },
    ];
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

                                {/* <div>
                                    <TextField
                                        name="requirement"
                                        label="Requerimientos"
                                        variant="outlined"
                                        placeholder="Ejemplo: React"
                                        value={input}
                                        size="small"
                                        onChange={handleInputChange}
                                        sx={{ mb: 2, mr: 1, width: '79%' }}
                                    />
                                    <Button
                                        variant="contained"
                                        onClick={handleClick}
                                        disabled={input === ''}
                                    >
                                        Agregar
                                    </Button>
                                </div> */}

                                <Field
                                    name="requirements"
                                    multiple
                                    size="small"
                                    component={Autocomplete}
                                    options={tecnologies}
                                    getOptionLabel={(option: any) =>
                                        option.name
                                    }
                                    renderInput={(
                                        params: AutocompleteRenderInputParams
                                    ) => (
                                        <TextField
                                            {...params}
                                            name="requirements"
                                            label="Select Languajes"
                                            placeholder="Requires"
                                        />
                                    )}
                                    sx={{ mb: 2 }}
                                />

                                <div
                                    style={{
                                        width: '96%',
                                        margin: '0px auto',
                                        marginBottom: '10px',
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                    }}
                                >
                                    {requirements.map((requirement) => (
                                        <Typography
                                            key={requirement}
                                            sx={typographyStyle}
                                            textAlign="center"
                                        >
                                            {requirement}
                                            <span
                                                style={spanStyle}
                                                id={requirement}
                                                onClick={removeRequirement}
                                            >
                                                X
                                            </span>
                                        </Typography>
                                    ))}
                                </div>

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

                                <Button
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
    );
};

export default ProjectForm;
