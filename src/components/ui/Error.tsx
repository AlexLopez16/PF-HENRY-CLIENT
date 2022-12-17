import { FC, useState, useEffect } from 'react';
import * as React from 'react';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { clearError } from '../../actions/error';

import { State } from '../../reducers/rootReducer';
import { Snackbar } from '@mui/material';

interface props {
    children?: JSX.Element | JSX.Element[];
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Error: FC<props> = (props) => {
    // Traemos el estado del error y el mensaje.
    const { status, message } = useSelector((state: State) => state.error);

    const dispatch = useDispatch();

    // Elementos a mostrar error.
    const [open, setOpen] = useState(false);

    // Importantisimo analizar el componentDidUpdate, para evitar renderizados de mas.
    useEffect(() => {
        if (status !== 0) handleOpen();
    }, [status]);

    // Definimos que tipo de error mostrar.
    let typeError = '';
    if (status === (401 || 500)) typeError = 'error';
    else if (status === 400) typeError = 'info';

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
        // Limpiamos el error del state, luego de cerrar el mensaje.
        setTimeout(() => {
            dispatch(clearError());
        }, 1000);
    };

    return (
        <>
            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <Alert severity={`${typeError}`} onClose={handleClose}>
                    {status} - {message}
                </Alert>
            </Snackbar>
        </>
    );
};

export default Error;
