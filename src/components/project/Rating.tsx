import * as React from 'react';
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
    Collapse,
    List,
    ListItemButton,
   
  } from "@mui/material";
  
  import ArrowRightIcon from '@mui/icons-material/ArrowRight';
  import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons: {
  [index: string]: {
    icon: React.ReactElement;
    label: string;
  };
} = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

export const RadioGroupRating =() =>{

    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
      };
  return (


        <Paper elevation={10} style={{ width: 400, height: "100%", padding: 20, margin: "50px auto" }}>
    
    
          <CardHeader
          avatar={
            <Avatar src="/broken-image.jpg"
              sx={{ width: 50, height: 50 }}
            />
          }
           
    
            title="nombre de alumno"
          // subheader="September 14, 2016"
          />
    
          <Box sx={{ width: '100%', maxWidth: 360, }}>
            <div>
              <Typography variant="h6">Nombre del proyecto o de la empresa</Typography>
            </div>
          </Box>
    
    
          <List>
            <ListItemButton sx={{ marginLeft: 39, }} onClick={handleClick}>
    
              {open ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
            </ListItemButton>
    
    
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <List
    
                >
                  <Typography
                    sx={{ maxWidth: 360, display: 'flex' }}
    
                    variant="body1">Descripcion: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, iste eligendi eius officiis similique veritatis placeat, autem nesciunt consectetur architecto distinctio atque assumenda! Illum tempora repellendus est nesciunt. Exercitationem, totam.</Typography>
                </List>
              </List>
              <StyledRating
      name="highlight-selected-only"
      defaultValue={2}
      IconContainerComponent={IconContainer}
      getLabelText={(value: number) => customIcons[value].label}
      highlightSelectedOnly
    />
            </Collapse>
          </List>
    
        </Paper>
      )
    
    }
    <StyledRating
      name="highlight-selected-only"
      defaultValue={2}
      IconContainerComponent={IconContainer}
      getLabelText={(value: number) => customIcons[value].label}
      highlightSelectedOnly
    />
  
