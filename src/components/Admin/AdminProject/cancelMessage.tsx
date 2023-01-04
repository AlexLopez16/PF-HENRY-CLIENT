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
    Card,
} from '@mui/material';



const handleclick=(setFormactive:any ,formactive:any)=>{
    console.log("activado");
    
    setFormactive(false)
}

const CancelMessage: FC = (setFormactive,formactive) => {

    return (
        <div>
            <Paper
              elevation={10}
              sx={{ display: "flex", flexDirection: "column", margin: "auto", maxWidth: 400 }}
            >

                <TextField
                    id="filled-multiline-flexible"
                    label="Respuesta de rechazo"
                    multiline
                    // maxRows={4}
                    variant="filled"
                    />


                <Button
                    sx={{ marginTop: 2, fontFamily: 'poppins' }}
                    // type='submit'
                    variant='contained'
                    fullWidth
                    color='primary'
                    onClick={e=>handleclick(setFormactive,formactive)}
                // disabled={props.isSubmitting}

                >
                    Enviar respuesta
                </Button>


            </Paper>
            <>
            {console.log(formactive)}
            </>
        </div>
    );
};

export default CancelMessage;
