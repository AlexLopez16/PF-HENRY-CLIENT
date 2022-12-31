import Swal from 'sweetalert2'

import 'animate.css';


 export const alert =()=>{

    Swal.fire({
        title: 'Revise su E-mail para ingresar a NABIJASH',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
}