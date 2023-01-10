import {
    Alert,
    Box,
    Container,
    Paper,
    Rating,
    Stack,
    Typography,
} from '@mui/material';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetailCompany } from '../../actions/company';
import { State } from '../../reducers/rootReducer';
import bgComponents from '../../assets/bg.png';
import images from '../../components/exports/images';
import style from '../../styles/carousel.module.css';
import { motion } from 'framer-motion';

export const CompanyDetail: FC = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    const { detail }: object | any = useSelector(
        (state: State) => state.company
    );
    useEffect(() => {
        if (id && token) {
            dispatch(getDetailCompany(id, token));
        }
    }, [dispatch]);
    let company = null;
    if (detail) company = detail.company;

    return (
        <Box
            sx={{
                // backgroundImage: `url(${bgComponents})`,
                width: '100%',
                height: '100vh',
                padding: '20px',
            }}
        >
            {detail ? (
                <Container maxWidth="lg">
                    <Box>
                        <Paper
                            elevation={10}
                            style={{
                                padding: '20px',
                                // marginTop: '20px',
                                // height: '300rem',
                                backgroundImage: `url(${bgComponents})`,
                                objectFit: 'cover',
                                objectPosition: 'center',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Box>
                                    <Typography
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            color: 'white',
                                        }}
                                        variant="h6"
                                    >
                                        {company?.name}.
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            color: '#898989',
                                        }}
                                    >
                                        {company?.country}.
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        gap: '10px',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            padding: '10px',
                                            width: 'max-content',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            color: 'white',
                                        }}
                                    >
                                        <Typography component="legend">
                                            Rating de la empresa
                                        </Typography>
                                        <Box
                                            sx={{
                                                padding: '2px',
                                                backgroundColor: 'white',
                                                borderRadius: '50px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Rating
                                                name="read-only"
                                                readOnly
                                                value={detail.ratingCompany}
                                            />
                                        </Box>
                                    </Box>
                                    <Box
                                        sx={{
                                            padding: '10px',
                                            width: 'max-content',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            color: 'white',
                                        }}
                                    >
                                        <Typography component="legend">
                                            Rating de los proyectos
                                        </Typography>
                                        <Box
                                            sx={{
                                                padding: '2px',
                                                backgroundColor: 'white',
                                                borderRadius: '50px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Rating
                                                name="read-only"
                                                readOnly
                                                value={detail.ratingProjects}
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    width: '500px',
                                    margin: '0 auto',
                                }}
                            >
                                {company?.project &&
                                    company?.project.map((e: any) => {
                                        return (
                                            <Paper
                                                sx={{
                                                    padding: '10px',
                                                    marginTop: '20px',
                                                }}
                                                elevation={5}
                                            >
                                                {e.name}
                                            </Paper>
                                        );
                                    })}
                            </Box>

                            <Box>
                                <motion.div
                                    className={style.sliderContainer}
                                    style={{
                                        paddingBottom: 100,
                                        paddingTop: 50,
                                    }}
                                >
                                    <motion.div
                                        className={style.slider}
                                        animate={{
                                            translateX: 160,
                                        }}
                                        drag="x"
                                        dragConstraints={{
                                            right: 0,
                                            left: -7300,
                                        }}
                                    >
                                        {images.map((image) => (
                                            <motion.div className={style.item}>
                                                <img
                                                    src={image}
                                                    alt=""
                                                    style={{
                                                        height: 150,
                                                        width: 300,
                                                        borderRadius: 30,
                                                    }}
                                                />
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </motion.div>
                            </Box>
                        </Paper>
                    </Box>
                </Container>
            ) : (
                <Stack
                    spacing={2}
                    sx={{
                        margin: '20px auto',
                        maxWidth: 'fit-content',
                    }}
                >
                    <Alert severity="info">Empresa no encontrada!</Alert>
                </Stack>
            )}
        </Box>
    );
};
