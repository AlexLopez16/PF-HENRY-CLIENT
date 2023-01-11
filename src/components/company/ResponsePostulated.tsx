import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Paper,
    Typography,
} from '@mui/material';
import { FC, useState } from 'react';

interface ResponsePostulatedProps {
    responses: object | any;
    questions: object | any;
}

export const ResponsePostulated: FC<ResponsePostulatedProps> = ({
    responses,
    questions,
}) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    console.log(responses);
    console.log(questions);
    return (
        <div>
            <Button
                variant="outlined"
                onClick={handleClickOpen}
                sx={{
                    background: 'black',
                }}
                size="small"
            >
                Respuestas
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{'Respuestas del estudiante'}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {questions?.map(
                            (question: string, index: number) => {
                                return (
                                    <Paper elevation={5} sx={{
                                        margin: '10px',
                                        padding: '10px'
                                    }}>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            // color: '#e2e2e2',
                                            fontFamily: 'montserrat',
                                            marginBottom: '10px'
                                        }}
                                        >
                                        {question}
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            // color: '#e2e2e2',
                                            fontFamily: 'montserrat',
                                        }}
                                    >
                                        {responses?.response[index]}
                                    </Typography>
                                        </Paper>
                                );
                            }
                        )}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="outlined"
                        onClick={handleClose}
                        sx={{
                            background: 'black',
                        }}
                        size="small"
                    >
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
