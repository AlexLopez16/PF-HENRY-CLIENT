import Swal from 'sweetalert2';

import 'animate.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateStudentInfo } from '../../actions/student';
import { State } from '../../reducers/rootReducer';
import { FC } from 'react';

export const alert = () => {
  Swal.fire({
    title: 'Excelente!',
    text: 'Revise su correo para confirmar la cuenta',
    imageUrl: 'https://media.tenor.com/n2Pnf0j5PlIAAAAC/mail-download.gif',
    imageWidth: 300,
    imageHeight: 200,
    imageAlt: 'Custom image',
  });
};



// export const Alert3:FC = async() => {

//   const { data }: object | any = useSelector((state: State) => state.auth);

//   let id = data.id

//   const dispatch = useDispatch();
//  let token = localStorage.getItem('token') || '';
//   const { value: email } = await Swal.fire({
//     title: 'Antes de continuar ingrese su E-mail',
//     input: 'email',
//     inputLabel: 'Para poder comunicarnos con usted',
//     inputPlaceholder: 'Ingrese su E-mail',
   
//   })
  
//   if (email) {
//     Swal.fire(`E-Mail ingresado: ${email}`)
//     dispatch (updateStudentInfo(id,token,{email}))
//   }

//   }
 