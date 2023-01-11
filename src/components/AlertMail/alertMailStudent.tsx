import Swal from 'sweetalert2';

import 'animate.css';

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

export const alert2 = () => {
  Swal.fire({
    title: 'Excelente!',
    text: 'Por favor al ingresar revise su perfil y agregue su mail',
    imageUrl: 'https://media.tenor.com/n2Pnf0j5PlIAAAAC/mail-download.gif',
    imageWidth: 300,
    imageHeight: 200,
    imageAlt: 'Custom image',
  });
};

export const alert3 = async () => {

  const { value: email } = await Swal.fire({
    title: 'Ingrese su E-mail',
    input: 'email',
    inputLabel: 'Para poder comunicarnos con usted',
    inputPlaceholder: 'Ingrese su E-mail'
  })

  if (email) {
    Swal.fire(`Entered email: ${email}`)
  }
}