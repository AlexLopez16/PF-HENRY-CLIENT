import React, { FC, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
import { Box } from '@mui/system';
import { Card, Grid, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharts } from '../../../actions/Admin';
import { PreLoader } from '../../PreLoader/PreLoader';

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartsAdmin: FC = () => {
    const { data } = useSelector((state: any) => state.admin);
    const dispatch = useDispatch();
    const theme: any = useTheme();
    let token = localStorage.getItem('token');

    const sx = {
        py: 5,
        boxShadow: 0,
        textAlign: 'center',
        justifyContent: 'center',
    };

    useEffect(() => {
        dispatch(getCharts(token));
    }, [dispatch]);

    // console.log(data?.students.state);

    if (!data.students) {
        return <></>;
    }

    return (
        <Box sx={{height: '900px'}}>
            <PreLoader />
            <Grid container spacing={3}>
                <Grid item md={4}>
                    <Card sx={sx}>
                        <Typography>Estudiantes</Typography>
                        <Doughnut data={data.students.state} />
                    </Card>
                </Grid>
                <Grid item md={4}>
                    <Card sx={sx}>
                        <Typography>Compañias</Typography>
                        <Doughnut data={data.companies.state} />
                    </Card>
                </Grid>
                <Grid item md={4}>
                    <Card sx={sx}>
                        <Typography>Compañias</Typography>
                        <Doughnut data={data.companies.premium} />
                    </Card>
                </Grid>
                <Grid item md={4}>
                    <Card sx={sx}>
                        <Typography>Proyectos</Typography>
                        <Doughnut data={data.projects.state} />
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ChartsAdmin;
