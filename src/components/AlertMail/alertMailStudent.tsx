import Swal from "sweetalert2";

import "animate.css";
import { useDispatch, useSelector } from "react-redux";
import { updateStudentInfo } from "../../actions/student";
import { State } from "../../reducers/rootReducer";
import { FC } from "react";
import axios from "axios";

export const alert = () => {
  Swal.fire({
    title: "Excelente!",
    text: "Revise su correo para confirmar la cuenta",
    imageUrl: "https://media.tenor.com/n2Pnf0j5PlIAAAAC/mail-download.gif",
    imageWidth: 300,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
};

const token = localStorage.getItem("token") || "";


export const Alert3 = async (id:string) => {
  const { value: email } = await Swal.fire({
    title: "Antes de continuar ingrese su E-mail",
    input: "email",
    inputLabel: "Para poder comunicarnos con usted",
    inputPlaceholder: "Ingrese su E-mail",
  });

  if (email) {
    Swal.fire(`E-Mail ingresado: ${email}`);
    try {
      await axios.put(
        `/student/${id}`,
        { email },
        { headers: { "user-token": token } }
      );
    } catch (error) {
      console.log(error);
    }
  }
};

