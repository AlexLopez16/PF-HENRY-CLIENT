import { FC, useState, useEffect } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import { State } from '../../reducers/rootReducer';

export const PreLoader: FC = () => {
    // Traemos el estado del request.
    const { inProgress } = useSelector((state: State) => state.request);
    // Estado para mostrar PreLoader.
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (inProgress) handleOpen();
        else handleClose();
    }, [inProgress]);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Backdrop
                sx={{
                    zIndex: '10000',
                   
                    // backdropFilter: 'blur(.5px)',
                    // backgroundColor: 'white',
                }}
                open={open}
            >
                <CircularProgress color="primary" />
            </Backdrop>
        </div>
    );
};
