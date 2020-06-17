import { Reducer } from "redux";
import { AuthActionTypes } from "./actionType";
import { IAuthState, ActionModel } from "./model";

const unloadedState: IAuthState = {
    authChecking: false,
    isAuth: false,
    authAction: {
        open: false,
        loading: false
    }
};

export const AuthReducer: Reducer<IAuthState> = (
    state: IAuthState = unloadedState,
    action: ActionModel,
) => {
    switch (action.type) {
        case AuthActionTypes.IsAuth: {
            return {
                ...state,
                isAuth: action.status,
                authChecking: true
            } as IAuthState;
        }
        case AuthActionTypes.Login: {
            return {
                ...state,
                authAction: {
                    ...state.authAction,
                    loading: true,
                },
            } as IAuthState;
        }
        case AuthActionTypes.LoginSuccess: {
            return {
                ...state,
                isAuth: true,
                authAction: {
                    ...state.authAction,
                    loading: false,
                    open: false
                },
            } as IAuthState;
        }
        case AuthActionTypes.LoginFail: {
            return {
                ...state,
                authAction: {
                    ...state.authAction,
                    loading: false,
                },
            } as IAuthState;
        }
        //#################### Logout cases
        case AuthActionTypes.LogOut: {
            return {
                ...state,
                isAuth: false,
                authChecking: false
            } as IAuthState;
        }
    }
    return state;
};
