import { FC, useState, useEffect } from 'react';
import { Alert, Snackbar } from '@mui/material';
import { State } from '../../reducers/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import { responseCleaned } from '../../actions/response';

type AlertData = {
    severity?: string | any;
    message?: string | any;
};

interface SnackbarProps {
    successMsg?: string | any;
    errorMsg?: string | any;
}

export const SnackBar: FC<SnackbarProps> = ({ successMsg, errorMsg }) => {
    // Traemos la request del estado.
    const { status } = useSelector((state: State) => state.response);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    // Si ya termino el progreso.
    useEffect(() => {
        if (status != null) handleOpen();
        console.log(status);
    }, [status]);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setTimeout(() => {
            dispatch(responseCleaned());
        }, 500);
    };

    // Esta es la estructura basica.
    let alertField: AlertData = {
        severity: status >= 200 && status < 400 ? 'success' : 'error',
        message: status >= 200 && status < 400 ? 'Exitoso' : 'Error',
    };

    // Si se personalizo el mensaje, analizamos el estado de la respuesta.
    if (status >= 200 && status < 400 && successMsg != null)
        alertField.message = successMsg;
    else if (status >= 400 && errorMsg != null) alertField.message = errorMsg;

    return (
        <Snackbar
            open={open}
            autoHideDuration={2500}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            <Alert severity={alertField.severity} onClose={handleClose}>
                {alertField.message}
            </Alert>
        </Snackbar>
    );
};
