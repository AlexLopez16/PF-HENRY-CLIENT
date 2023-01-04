/**
 * By Sciangula Hugo.
 * NOTA: en esta accion vamos a enviar la respuesta del backend a nuestro reducer.
 */

import { types } from '../types/types';

// Cuando la peticion acabo.
export const responseFinished = (payload: object | any) => {
    return {
        type: types.responseFinished,
        payload,
    };
};

// Limpiamos el mensaje del backend.
export const responseCleaned = () => {
    return {
        type: types.responseCleaned,
    };
};
