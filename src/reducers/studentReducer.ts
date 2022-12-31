
// import { type, userInfo } from "os";
import { types } from "../types/types";


interface State {
    user: object | any;
}

const initialState: object | any = {
    user: {
        project: [],
    },
};

type Action = {
    type: string;
    payload?: {};
};

export const studentReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case types.getListStudents:
            return {
                ...state,
                users: action.payload,
            };

        case types.studentRegister:
            return {
                ...state,
                user: action.payload,
            };

        case types.studentGetInfo:
            return {
                ...state,
                user: action.payload,
            };

        case types.studentUpdateInfo:
            return {
                ...state,
                user: { ...state.user, ...action.payload },
            };

        case types.studentSearch:
            return {
                ...state,
                user: action.payload,
            };
        case types.deleteOrInactiveStudent:
            return {
                ...state,
                user: action.payload,
            };
        case types.unApplyStudent:
            const newUser: object | any = state.user;
            // Sacamos el proyecto del cual nos dimos de baja.
            const filterProjects: object | any = state.user.project.filter(
                (e: object | any) => e.uid != action.payload
            );
            newUser.project = filterProjects;
            newUser.working = [];
            return {
                ...state,
                user: newUser,
            };
        default:
            return state;
    }
};
