import { Dispatch, FC, SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";

import { Formik, Form, Field, ErrorMessage } from "formik";

import * as yup from "yup";

import { Button, Paper, TextField } from "@mui/material";
import { cancelReview } from "../../../actions/Admin";


interface Props {
  formactive: boolean;
  setFormactive: Dispatch<SetStateAction<boolean>>;
  idrev: string;

}

const ReviewCancel: FC<Props> = ({ setFormactive, formactive, idrev}) => {
  const dispatch = useDispatch();
  const token: any = localStorage.getItem("token");

  const initialValues = {
    respuesta: "",
  };

  const validationSchema = yup.object().shape({
    respuesta: yup.string().required("Respuesta requerida"),
  });

  const onSubmit = (values: any) => {

    dispatch(cancelReview(idrev, token, values))

    setFormactive(!formactive);
  };

  return (
    <div>
      <Paper
        elevation={10}
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          maxWidth: 400,
        }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <Field
              as={TextField}
              name="respuesta"
              label="Respuesta"
              size="small"
              color="info"
              sx={{ width: "100%", margin: "10px 0" }}
              helperText={
                <ErrorMessage name="respuesta">
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

            <Button
              sx={{
                fontFamily: "montserrat",
                fontWeight: "bold",
              }}
              type="submit"
              variant="contained"
              fullWidth
              color="secondary"
            >
              Enviar respuesta
            </Button>
          </Form>
        </Formik>
      </Paper>
    </div>
  );
};

export default ReviewCancel;
