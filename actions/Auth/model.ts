import { Action } from "redux";
import {AuthActionTypes} from './actionType'


export type RegisterType = {
    name: string;
    email: string;
    password: string;
}
export type LoginType = {
    email: string;
    password: string;
}

export interface IAuthState {
    authChecking: boolean;
    isAuth: boolean;
    authAction: {
        loading: boolean;
        open: boolean;
    }
}

interface IIsAuth extends Action<string> {
    type: AuthActionTypes.IsAuth;
    status: boolean
}
//Register
interface IRegister extends Action<string> {
    type: AuthActionTypes.Register;
}
interface IRegisterSuccess extends Action<string> {
    type: AuthActionTypes.RegisterSuccess;
}
interface IRegisterFail extends Action<string> {
    type: AuthActionTypes.RegisterFail;
}



interface ILogin extends Action<string> {
    type: AuthActionTypes.Login;
}
interface ILoginSuccess extends Action<string> {
    type: AuthActionTypes.LoginSuccess;
}
interface ILoginFail extends Action<string> {
    type: AuthActionTypes.LoginFail;
}

//logout actionType
interface ILogOut extends Action<string> {
    type: AuthActionTypes.LogOut;
}

export type ActionModel = IIsAuth 
    | IRegister
    | IRegisterSuccess
    | IRegisterFail
    | ILogin
    | ILoginSuccess
    | ILoginFail
    | ILogOut