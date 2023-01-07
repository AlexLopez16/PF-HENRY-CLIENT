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
  Button,
} from "@mui/material";

import { buttonStyle } from "../../styles/Profile/HeaderFormStyles";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { postReview } from "../../actions/revius";
import TextField from "@mui/material/TextField";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: theme.palette.action.disabled,
  },
}));

const customIcons: {
  [index: string]: {
    icon: React.ReactElement;
    label: string;
    number: Number;
  };
} = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: "Very Dissatisfied",
    number: 1,
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: "Dissatisfied",
    number: 2,
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: "Neutral",
    number: 3,
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: "Satisfied",
    number: 4,
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: "Very Satisfied",
    number: 5,
  },
};

function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

export const RatingMail = () => {
  const [ratingProject, setRatingProject] = React.useState<number | null>(2);
  const [ratingCompany, setRatingCompany] = React.useState<number | null>(2);

  const dispatch = useDispatch();

  type Values = {
    description: string;
  };

  const [queryParameters] = useSearchParams();

  let idProject: string | any = queryParameters.get("project");
  let name: string | any = queryParameters.get("student");
  let image: string | any = queryParameters.get("image");
  let project: string | any = queryParameters.get("projectName");
  let id: string | any = queryParameters.get("id");
  let tok: string | any = queryParameters.get("token");

  const initialValues = {
    description: "",
    ratingCompany: "",
    ratingProject: "",
  };

  const validationSchema = Yup.object().shape({
    description: Yup.string().required(
      "* Ingresa una descripción del proyecto"
    ),
  });

  const onSubmit = (values: string | any) => {
    const data = {
      description: values.description,
      ratingCompany: ratingCompany,
      ratingProject: ratingProject,
      id: id,
      idProject: idProject,
    };

    dispatch(postReview(data, tok));
  };

  return (
    <div>
      <Paper
        elevation={10}
        style={{ width: 500, height: "100%", padding: 20, margin: "50px auto" }}
      >
        <CardHeader
          avatar={<Avatar src={`${image}`} sx={{ width: 70, height: 70 }} />}
          title={`${name}`}
        />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <Box sx={{ width: "100%", maxWidth: 500 }}>
              <div>
                <Typography variant="h6">{`${project}`}:</Typography>
              </div>
              <div>
                <Field
                  as={TextField}
                  name="description"
                  label="description"
                  size="small"
                  multiline
                  rows={5}
                  color="info"
                  sx={{ width: "100%", margin: "10px 0" }}
                  helperText={
                    <ErrorMessage name="description">
                      {(message) => (
                        <span
                          style={{
                            color: "#d6423e",
                          }}
                        >
                          {message}
                        </span>
                      )}
                    </ErrorMessage>
                  }
                />
              </div>
            </Box>

            <Typography component="legend">
              Nivel de satisfaccion con la empresa
            </Typography>
            <Rating
              name="simple-controlled"
              value={ratingCompany}
              onChange={(event, newRatingCompany) => {
                setRatingCompany(newRatingCompany);
              }}
            />

            <div>
              <Box>
                <Typography component="legend">
                  Nivel de satisfaccion del proyecto
                </Typography>
                <Rating
                  name="simple-controlled"
                  value={ratingProject}
                  onChange={(event, newRatingProject) => {
                    setRatingProject(newRatingProject);
                  }}
                />
              </Box>

              <Button type="submit" style={buttonStyle} variant="contained">
                Enviar
              </Button>
            </div>
          </Form>
        </Formik>
      </Paper>
    </div>
  );
};
