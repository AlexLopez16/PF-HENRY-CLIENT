import { Dispatch, FC, SetStateAction, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as yup from 'yup';

import { Button, Paper, TextField, Modal, Typography } from '@mui/material';
import { AdminEliminatedProject } from '../../../actions/Admin';
import { getAllProject } from '../../../actions/projects';

interface Props {
    idPrj: string;
    openModal: boolean;
    setOpenModal: Dispatch<SetStateAction<boolean>>
}


const CancelMessage: FC<Props> = ({ idPrj, openModal, setOpenModal }) => {
    const dispatch = useDispatch();
    const token: any = localStorage.getItem('token');


    const handleClose = () => setOpenModal(false);

    const initialValues = {
        respuesta: '',
    };

    const validationSchema = yup.object().shape({
        respuesta: yup.string().required('Respuesta requerida'),
    });

    const onSubmit = (values: any) => {
        dispatch(AdminEliminatedProject(idPrj, token, values));

        dispatch(
            getAllProject(
                undefined,
                undefined,
                token,
                undefined,
                undefined,
                undefined,
                6,
                0
            )
        );
        handleClose()
    };

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'fit-content',
        bgcolor: 'background.paper',
        border: '2px solid #0496ff',
        boxShadow: 24,
        p: 4,
        textAlign: 'center',
        borderRadius: '20px',
    };

    return (
        <div>
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"

            >
                <Paper
                    elevation={10}
                    sx={style}
                >
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        <Form>
                            <Typography>Escribe el motivo por el cual no fue aceptado</Typography>
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
                                type="submit"
                                variant="contained"
                                fullWidth
                                color="secondary"
                            >
                                Enviar respuesta
                            </Button>
                        </Form>
                    </Formik>
                </Paper>
            </Modal>
        </div>
    );
};

export default CancelMessage;
