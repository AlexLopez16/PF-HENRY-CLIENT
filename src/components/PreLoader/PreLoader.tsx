import { FC, useState, useEffect } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import { State } from '../../reducers/rootReducer';
import bgComponents from '../../assets/bg.png';

export const PreLoader: FC = () => {
    // Traemos el estado del request.
    const { inProgress } = useSelector((state: State) => state.request);
    // Estado para mostrar PreLoader.
    const [open, setOpen] = useState(true);
    useEffect(() => {
        if (inProgress) handleOpen();
        else handleClose();
    }, [inProgress]);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setTimeout(() => {
            setOpen(false);
        }, 1000)
    };
    return (
        <div>
            <Backdrop
                sx={{
                    zIndex: '10000',
                   
                    // backdropFilter: 'blur(10px)',
                    // backgroundColor: 'white',
                    backgroundImage: `url(${bgComponents})`,
                }}
                open={open}
            >
                <CircularProgress color="primary" />
            </Backdrop>
        </div>
    );
};
