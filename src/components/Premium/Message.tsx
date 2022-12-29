import { Dispatch, FC, SetStateAction } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material';

interface Props {
    openMessage: boolean
    setOpenMessage: Dispatch<SetStateAction<boolean>>
}

export const Message: FC<Props> = ({ openMessage, setOpenMessage }) => {
    const API_URL = process.env.REACT_APP_API || 'http://localhost:3001/api'

    const handleClose = () => {
        setOpenMessage(false);
    }

    const btnStyle = {
        backgroundColor: '#0496ff',
        margin: '0 5px',
        color: '#fff',
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: '#006ba6',
        },
    }

    return (
        <div>
            <Dialog
                open={openMessage}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Serás redirigido a <b>Stripe</b>, no olvides <b>ingresar tu correo</b> con el que te registraste
                        en <b>NABIJASH</b> para generar tu factura correctamente.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' sx={btnStyle} onClick={handleClose}>
                        Cancelar
                    </Button>

                    <form action={`${API_URL}/checkout`} method='POST'>
                        <input type="hidden" name="lookup_key" value="PREM" />
                        <Button variant='contained' sx={btnStyle} onClick={handleClose} autoFocus type='submit'>
                            Aceptar
                        </Button>
                    </form>
                </DialogActions>
            </Dialog>
        </div>
    )
}
