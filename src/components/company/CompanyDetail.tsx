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
                            <Paper
                                elevation={5}
                                sx={{
                                    padding: '10px',
                                    // backgroundColor: 'red',
                                    width: 'max-content',
                                }}
                            >
                                <Typography component="legend">
                                    Nivel de satisfaccion del proyecto
                                </Typography>
                                <Rating name="read-only" readOnly value={3} />
                            </Paper>
                            <Box>
                                {company?.project &&
                                    company?.project.map((e: any) => {
                                        return (
                                            <Paper
                                                sx={{
                                                    padding: '20px',
                                                    marginTop: '20px',
                                                }}
                                                elevation={5}
                                            >
                                                {e.name}
                                            </Paper>
                                        );
                                    })}
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
