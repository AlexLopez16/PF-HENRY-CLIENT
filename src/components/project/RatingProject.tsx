import * as React from 'react';
import { FC } from 'react';
import { styled } from '@mui/material/styles';
import Rating, { IconContainerProps } from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import {
  Box,
  Typography,
  Paper,
  CardHeader,
  Avatar,
  List,
} from '@mui/material';
import { useSelector } from 'react-redux';

// const StyledRating = styled(Rating)(({ theme }) => ({
//   "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
//     color: theme.palette.action.disabled,
//   },
// }));

// const customIcons: {
//   [index: string]: {
//     icon: React.ReactElement;
//     label: string;
//   };
// } = {
//   1: {
//     icon: <SentimentVeryDissatisfiedIcon color="error" />,
//     label: "Very Dissatisfied",
//   },
//   2: {
//     icon: <SentimentDissatisfiedIcon color="error" />,
//     label: "Dissatisfied",
//   },
//   3: {
//     icon: <SentimentSatisfiedIcon color="warning" />,
//     label: "Neutral",
//   },
//   4: {
//     icon: <SentimentSatisfiedAltIcon color="success" />,
//     label: "Satisfied",
//   },
//   5: {
//     icon: <SentimentVerySatisfiedIcon color="success" />,
//     label: "Very Satisfied",
//   },
// };

interface RatingProps {
  avatar?: string;
  name?: string;
  lastName?: string;
  description?: string;
  projectName?: string;
  ratingCompany?: number;
  ratingProject?: number;
}

export const RatingProject: FC<RatingProps> = ({
  avatar,
  name,
  lastName,
  projectName,
  description,
  ratingCompany,
  ratingProject,
}) => {
  return (
    <Paper
      elevation={10}
      style={{
        width: 400,
        height: '100%',
        padding: 20,
        margin: '50px auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
      }}
    >
      <CardHeader
        avatar={<Avatar src={avatar} sx={{ width: 80, height: 80 }} />}
      />
      <Typography sx={{ maxWidth: 360, display: 'flex' }} variant='body1'>
        {name} {lastName}
      </Typography>

      <Typography variant='h6' sx={{ fontFamily: 'montserrat', mb: 1 }}>
        {projectName}{' '}
      </Typography>

      <List component='div' disablePadding>
        <Typography
          sx={{
            fontFamily: 'montserrat',
            mb: 1,
            maxWidth: 360,
            display: 'flex',
            fontStyle: 'italic',
          }}
          variant='body1'
        >
          {description}
        </Typography>
      </List>
      <Typography component='legend' sx={{ fontFamily: 'poppins' }}>
        Nivel de satisfaccion con la empresa
      </Typography>
      <Rating name='read-only' readOnly value={ratingCompany} sx={{ mb: 2 }} />

      <Typography component='legend' sx={{ fontFamily: 'poppins' }}>
        Nivel de satisfaccion del proyecto
      </Typography>
      <Rating name='read-only' readOnly value={ratingProject} sx={{ mb: 2 }} />
    </Paper>
  );
};
