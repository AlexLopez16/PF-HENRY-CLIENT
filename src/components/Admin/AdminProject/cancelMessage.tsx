import { Dispatch, FC, SetStateAction, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as yup from 'yup';

import {
    Button,
    Paper,
    TextField,

} from '@mui/material';


interface Props {
    formactive: boolean,
    setFormactive: Dispatch<SetStateAction<boolean>>,
    idPrj?:string
}

type Values = {
    respuesta: string;
}

const CancelMessage: FC<Props> = ({ setFormactive, formactive ,idPrj}) => {
console.log(idPrj);

    const initialValues = {
        respuesta: ''
    }


    const validationSchema = yup.object().shape({
        respuesta: yup.string().required('Respuesta requerida')
    })

    const onSubmit = (values: Values) => {
        console.log("info",values,"idprj",idPrj);

        setFormactive(!formactive)
    }

    return (
        <div>
            <Paper
                elevation={10}
                sx={{ display: "flex", flexDirection: "column", margin: "auto", maxWidth: 400 }}
            >

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >

                    <Form>
                        <Field
                            as={TextField}
                            name="respuesta"
                            label="Respuesta"
                            size="small"
                            color="info"
                            sx={{ width: '100%', margin: '10px 0' }}
                            helperText={
                                <ErrorMessage name="respuesta">
                                    {(message) => (
                                        <span
                                            style={{
                                                color: '#d6423e',
                                            }}
                                        >
                                            {message}
                                        </span>
                                    )}
                                </ErrorMessage>
                            }
                        />


                        <Button
                            sx={{
                                fontFamily: 'montserrat',
                                fontWeight: 'bold',
                            }}
                            type='submit'
                            variant='contained'
                            fullWidth
                            color='secondary'
                        >
                            Enviar respuesta
                        </Button>

                    </Form>
                </Formik>
            </Paper>
        </div>
    );
};

export default CancelMessage;
