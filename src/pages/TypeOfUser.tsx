import { FC } from 'react';
import { Button, Typography, Box, Grid, Container } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';
import style from '../styles/register.module.css';
import registerbg from '../assets/registerbg.png';
import Header from '../components/NavbarLandingPage/HeaderLanding';
import Footer from './LandingPage/Footer';
import { useDispatch } from 'react-redux';
import { gmailLogin } from '../actions/auth';

export const TypeOfUser: FC = () => {
    const dispatch = useDispatch();
    const [queryParameters] = useSearchParams();
    let tokenQuery = queryParameters.get('token');
    console.log(tokenQuery);
    return (
        <>
            <Box
                sx={{
                    backgroundImage: `url(${registerbg})`,
                    pb: 50,
                }}
            >
                <Header />
                <Container>
                    <Typography
                        sx={{
                            color: 'white',
                            mt: 20,
                            mb: 10,
                            fontFamily: 'montserrat',
                            fontSize: '25px',
                            textAlign: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            backgroundColor: 'black',
                            borderRadius: 5,
                        }}
                    >
                        Indica que tipo de usuario eres.
                    </Typography>

                    <Container
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                        }}
                    >
                        <div className={style.content_left}>
                            <Button
                                onClick={() => {
                                    dispatch(
                                        gmailLogin(
                                            tokenQuery as string,
                                            'student'
                                        )
                                    );
                                }}
                                color="primary"
                                sx={{
                                    fontFamily: 'poppins',
                                    marginTop: 30,
                                    position: 'relative',
                                }}
                                variant="contained"
                            >
                                Estudiante
                            </Button>
                        </div>
                        <div className={style.content_right}>
                            <Button
                                onClick={() => {
                                    dispatch(
                                        gmailLogin(
                                            tokenQuery as string,
                                            'company'
                                        )
                                    );
                                }}
                                color="primary"
                                sx={{
                                    fontFamily: 'poppins',
                                    marginTop: 30,
                                    position: 'relative',
                                }}
                                variant="contained"
                            >
                                Empresa
                            </Button>
                        </div>
                    </Container>
                </Container>
            </Box>
            <Footer />
        </>
    );
};
