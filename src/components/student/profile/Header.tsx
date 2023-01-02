import { FC, Dispatch, SetStateAction } from 'react';
import {
    Paper,
    Grid,
    IconButton,
    Avatar,
    Typography,
    Button,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

import {
    paperStyle,
    iconStyle,
    container,
    avatarStyle,
} from '../../../styles/Profile/HeaderStyles';
import { SnackBar } from '../../SnackBar/SnackBar';

interface Props {
    edit: { header: boolean; about: boolean; skills: boolean };
    setEdit: Dispatch<
        SetStateAction<{ header: boolean; about: boolean; skills: boolean }>
    >;
    name?: string;
    lastName?: string;
    country?: string;
    image?: string;
}

export const Header: FC<Props> = ({
    edit,
    setEdit,
    name,
    lastName,
    country,
    image,
}) => {
    const handlerEdit = () => {
        setEdit({
            ...edit,
            header: !edit.header,
        });
    };

    return (
        <Paper elevation={5} style={paperStyle}>
            <SnackBar />
            <Grid textAlign="right">
                <IconButton aria-label="settings" onClick={handlerEdit}>
                    <EditIcon
                        sx={iconStyle}
                        color="primary"
                        fontSize="medium"
                    />
                </IconButton>
            </Grid>
            <div style={container}>
                <div>
                    <Avatar sx={avatarStyle} src={image}>
                        {name?.slice(0, 1).toUpperCase()}
                    </Avatar>
                </div>

                <div>
                    <Typography
                        sx={{
                            fontSize: '30px',
                            fontWeight: 'bold',
                        }}
                    >
                        {name}&nbsp;{lastName}
                    </Typography>
                    <Typography>{country}</Typography>
                </div>
            </div>
        </Paper>
    );
};
