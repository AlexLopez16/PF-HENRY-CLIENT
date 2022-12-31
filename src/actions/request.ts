/**
 * By Sciangula Hugo.
 * NOTA: en este action vamos a setear el estado de la peticion que fue enviada al backend.
 */

import { types } from '../types/types';

// Cuando la peticion esta en curso.
export const requestInProgress = () => {
    return {
        type: types.requestInProgress,
    };
};

// Cuando la peticion acabo.
export const requestFinished = () => {
    return {
        type: types.requestFinished,
    };
};
