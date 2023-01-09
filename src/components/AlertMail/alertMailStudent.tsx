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
