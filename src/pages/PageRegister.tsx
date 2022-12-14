import { FC } from "react";
import { Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import style from "../styles/register.module.css";

const buttonSignIn = {
  alignItems: "center",
  background: "#272727",
  border: 2,
  borderRadius: 8,
  color: "#ffd700",
  cursor: "pointer",
  fontSize: 16,
  height: 48,
  justifyContent: "center",
  maxWidth: "100%",
  p: "0 25px",
  position: "relative",
  userSelect: "none",
  fontWeight: 700,
  "&:hover": {
    background: "#ffd700",
    border: "none",
    color: "#272727",
    TransitionEvent: 1,
  },
};
export const Register: FC = () => {
  return (
    <>
      <div className={style.content_top}>
        <Typography textAlign="center" variant="h4">
        Como empresa crea un proyecto o como alumno se parte de uno. 
        </Typography>
      </div>
      <Box
        height="100vh"
        display="flex"
        justifyContent="space-around"
        sx={{ background: "#e8ca68" }}
      >
        <div className={style.content_left}>
          <Link className={style.link} to="/signup/student">
            <Button sx={buttonSignIn} variant="outlined">
              Estudiante
            </Button>
          </Link>
        </div>
        <div className={style.content_right}>
          <Link className={style.link} to="/signup/company">
            <Button sx={buttonSignIn} variant="outlined">
              Empresa
            </Button>
          </Link>
          
        </div>
{/*         
          <div className={style.content_button}>
        <Typography textAlign="center" variant="h4">
        Como empresa crea un proyecto o como alumno se parte de uno. 
        </Typography>
        </div> */}
      </Box>
    </>
  );
};
