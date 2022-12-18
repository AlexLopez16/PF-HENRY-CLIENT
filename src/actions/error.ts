/**
 * By Sciangula Hugo.
 * NOTA: Guardamos los errores en el state.
 */

import { types } from '../types/types';

// En el payload vamos a recibir el status y el message de error.
export const showError = (payload: any) => {
    return {
        type: types.showError,
        payload,
    };
};

// Solo limpiamos el estado.
export const clearError = () => {
    return {
        type: types.clearError,
    };
};
