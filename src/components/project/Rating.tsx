import * as React from "react";
import { styled } from "@mui/material/styles";
import Rating, { IconContainerProps } from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import {
  Box,
  Typography,
  Paper,
  CardHeader,
  Avatar,
  Collapse,
  List,
  ListItemButton,
  Button,
} from "@mui/material";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { RatingMail } from "./RatingMail";
import { buttonStyle } from "../../styles/Profile/HeaderFormStyles";
import { useSelector } from "react-redux";
import { State } from "../../reducers/rootReducer";
import {useLocation, useSearchParams} from "react-router-dom"




// let {} = useSelector(  )



const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
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
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: "Very Satisfied",
  },
};

function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

export const GroupRating = () => {
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  
const [queryParameters] = useSearchParams();

let idProject:string|any  = queryParameters.get("project");
let name: string|any  = queryParameters.get("student");
let image: string|any  = queryParameters.get("image");
let project: string|any  = queryParameters.get("projectName");
  return (
    <Paper
      elevation={10}
      style={{ width: 1000, height: "100%", padding: 20, margin: "50px auto" }}
    >
      <CardHeader
        avatar={
          <Avatar src={`${image}`}sx={{ width: 70, height: 70 }} />
        }
        title={`${name}`}
      />

      <Box sx={{ width: "100%", maxWidth: 360 }}>
        <div>
          <Typography variant="h6">
          {`${project}`}
          </Typography>
        </div>
      </Box>

      <List>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <List>
              <RatingMail />
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
        <div>
          <Button type="submit" style={buttonStyle} variant="contained">
            Enviar
          </Button>
        </div>
      </List>
    </Paper>
  );
};
