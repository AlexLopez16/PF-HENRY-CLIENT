import { FC, useState } from 'react';
import {
    Container,
    Box,
    Paper,
    Typography,
    TextField,
    Button,
    Grid,
} from '@mui/material';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { TextField } from 'formik-mui';
import { string } from 'yup/lib/locale';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../reducers/rootReducer';
import { Link, Navigate } from 'react-router-dom';
import { validaToken, reSendEmail, isVerify } from '../../actions/auth';
import { PreLoader } from '../PreLoader/PreLoader';
import { showError } from '../../actions/error';
import { SnackBar } from '../SnackBar/SnackBar';
import bg from '../../assets/bg.png';
import Footer from '../../pages/LandingPage/Footer';
import mailConfirm from '../../assets/mailConfirm.png';
import Header from '../NavbarLandingPage/HeaderLanding';

export const VerifyEmailCompany: FC = () => {
    return (
        <>
            <PreLoader />
            <SnackBar />
            <Header />
            <Grid
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Box
                    sx={{
                        backgroundImage: `url(${bg})`,
                        maxWidth: '1920px',
                        height: 800,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Paper
                            elevation={10}
                            sx={{
                                padding: 5,
                                mt: 20,
                                width: '35%',
                                backgroundColor: 'black',
                                boxShadow:
                                    'rgba(255, 255, 255, 255.16) 0px 1px 4px, rgb(255, 255, 255) 0px 0px 0px 3px',
                                borderRadius: 10,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <img
                                    src={mailConfirm}
                                    id={Image.name}
                                    alt="ConfirmIcon"
                                />
                            </Box>

                            <Typography
                                variant="h6"
                                sx={{
                                    textAlign: 'center',
                                    pt: 2,
                                    fontFamily: 'montserrat',
                                    fontWeight: 'bold',
                                    color: 'white',
                                }}
                            >
                                Cuenta creada en espera de verificación!
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    textAlign: 'center',
                                    mt: 2,
                                    fontFamily: 'montserrat',
                                    fontStyle: 'italic',
                                    color: 'white',
                                }}
                            >
                                Tu cuenta ha sido registrada,un administrador de
                                Henry validara su información, una vez validada
                                se le enviara la notificación al correo para
                                ingresar.
                            </Typography>
                        </Paper>
                    </Box>
                </Box>
            </Grid>
            <Footer />
        </>
    );
};
