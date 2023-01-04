/**
 * By Sciangula Hugo.
 * NOTA: estructura demo de esqueloto para myproject.
 */

import { Box, Paper } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';
import { State } from '../../reducers/rootReducer';

export const ProjectCardSkeleton = () => {
    const { inProgress } = useSelector((state: State) => state.request);
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Skeleton
                    variant="text"
                    sx={{
                        width: '150px',
                        height: '25px',
                        marginTop: '20px',
                    }}
                />
            </Box>

            <Paper
                elevation={10}
                style={{
                    padding: '20px',
                    marginTop: '20px',
                }}
            >
                <Stack>
                    {/* For variant="text", adjust the height via font-size */}

                    <Skeleton
                        variant="text"
                        sx={{ fontSize: '.8rem', width: '120px' }}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Skeleton
                            variant="text"
                            sx={{ fontSize: '1.2rem', width: '100px' }}
                        />
                        <Skeleton
                            variant="rounded"
                            sx={{ width: '90px', height: '30px' }}
                        />
                    </Box>
                    <Skeleton
                        variant="text"
                        sx={{ fontSize: '.8rem', width: '250px' }}
                    />
                    <Skeleton
                        variant="text"
                        sx={{ fontSize: '.8rem', width: '200px' }}
                    />
                    <Skeleton
                        variant="text"
                        sx={{ fontSize: '.8rem', width: '150px' }}
                    />
                    <Skeleton
                        variant="rounded"
                        sx={{
                            width: '110px',
                            height: '25px',
                            margin: '10px 0 5px 0px',
                        }}
                    />
                </Stack>
            </Paper>
        </>
    );
};
