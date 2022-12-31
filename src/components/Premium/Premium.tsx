import { useState, FC, Dispatch, SetStateAction } from 'react';
import { Button, Modal, Box, Typography,
    //  Paper
     } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Message } from './Message';


interface Props {
    openModal: boolean
    setOpenModal: Dispatch<SetStateAction<boolean>>
}

export const Premium: FC<Props> = ({ openModal, setOpenModal }) => {

    const handleClose = () => setOpenModal(false);

    const [openMessage, setOpenMessage] = useState(false)

    const handleContinue = () => {
        handleClose()
        setOpenMessage(true)
    }

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

    const bntStyle = {
        mt: 3,
        backgroundColor: '#0496ff',
        color: '#fff',
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: '#006ba6',
        },
    }

    return (
        <div>
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <Typography id="modal-modal-title" variant="h3" sx={{ fontWeight: 'bold', display: 'flex', justifyContent: 'center' }}>
                        $10/mes
                        <span style={{ fontSize: '15px' }}>*USD</span>
                    </Typography>
                    <Typography variant='h6' sx={{ mt: 2, fontWeight: '600' }}>
                        Plan Premium
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                        <CheckCircleOutlineIcon sx={{ color: '#0496ff' }} /> &nbsp; Acceso a las funciones básicas
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                        <CheckCircleOutlineIcon sx={{ color: '#0496ff' }} /> &nbsp; Reportes y analítcas básicas de tus proyectos
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                        <CheckCircleOutlineIcon sx={{ color: '#0496ff' }} /> &nbsp; Publica hasta 3 proyectos por mes
                    </Typography>
                    <Button
                        variant='contained'
                        sx={bntStyle}
                        onClick={handleContinue}
                    >
                        Comenzar
                    </Button>
                </Box>
            </Modal>

            <Message
                openMessage={openMessage}
                setOpenMessage={setOpenMessage}
            />
        </div>
    )
}
