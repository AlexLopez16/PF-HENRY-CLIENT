import {
    Alert,
    Box,
    Button,
    Container,
    Paper,
    Rating,
    Stack,
    Typography,
} from '@mui/material';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useParams } from 'react-router-dom';
import { getDetailCompany } from '../../actions/company';
import { State } from '../../reducers/rootReducer';
import bgComponents from '../../assets/bg.png';
import { RatingProject } from '../project/RatingProject';

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
    }, []);
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
                                                    display: 'flex',
                                                    justifyContent:
                                                        'space-between',
                                                }}
                                                elevation={5}
                                            >
                                                {e.name}
                                                <Link
                                                    to={`/projects/${e._id}`}
                                                    style={{
                                                        textDecoration: 'none',
                                                        marginTop: 'auto',
                                                        fontFamily: 'poppins',
                                                    }}
                                                    target="_blank"
                                                >
                                                    <Button
                                                        variant="contained"
                                                        type="submit"
                                                        size="small"
                                                        color="primary"
                                                        // onClick={() =>
                                                        //     handleClick(
                                                        //         projectId
                                                        //     )
                                                        // }
                                                    >
                                                        Mas Info
                                                    </Button>
                                                </Link>
                                            </Paper>
                                        );
                                    })}
                            </Box>

                            <Box
                            // sx={{
                            //     height: 'max-content',
                            // }}
                            >
                                {detail.reviews.map((review: any) => (
                                    <RatingProject
                                        avatar={review?.student?.image}
                                        name={review?.student?.name}
                                        lastName={review.student?.lastName}
                                        description={review.description}
                                        ratingCompany={review.ratingCompany}
                                        ratingProject={review.ratingProject}
                                        projectName={review?.project?.name}
                                    />
                                ))}
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
