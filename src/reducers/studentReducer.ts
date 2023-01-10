// import { type, userInfo } from "os";
import { types } from '../types/types';

interface State {
    users: {}[];
    user: object | any;
    total1: number | any;
}

const initialState: object | any = {
    users: [],
    user: {
        project: [],
    },
    total1: 0,
};

type Action = {
    type: string;
    payload?: Object | any;
};

export const studentReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case types.getListStudents:
            const { total, students }: any = action.payload;
            return {
                ...state,
                users: students,
                total1: total,
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
            let users: any[] = state.users;
            for (let index = 0; index < users?.length; index++) {
                let currentValue: any = users[index];

                if (currentValue.uid === action?.payload?.uid) {
                    currentValue = action.payload;
                    users[index] = currentValue;
                }
            }

            return {
                ...state,
                user: { ...state.user.project, project: users },
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
