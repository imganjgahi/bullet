import { AppAction } from "../../store/state";
import { AuthActionTypes } from "./actionType";
import { ActionModel, LoginType, RegisterType } from "./model";
import { AuthApi } from "./api";
import axios from '../../AxiosConfig';
import { Alert } from "react-native";

export const AuthActions = {

    //send request to server
    registerRequest: (data: RegisterType): AppAction<ActionModel> => async (dispatch, getState) => {
        dispatch({type: AuthActionTypes.Login})
        try {
            const res = await AuthApi.register(data)
            if(res.data){
                //login was succeed
                //save token on loacalStorage
                const loginData:LoginType = {email: data.email, password: data.password}
                AuthActions.loginRequest(loginData)(dispatch, getState)
                dispatch({type: AuthActionTypes.LoginSuccess})
                console.log("registerRequest: ", res)
            }
        } catch (error) {
            //loagin perosses faild
            console.log("registerRequesterror: ", error)
            dispatch({type: AuthActionTypes.LoginFail})
            Alert.alert("Error: ", error.response)
        }
        
    },

    //send request to server
    loginRequest: (data: LoginType): AppAction<ActionModel> => async (dispatch, getState) => {
        dispatch({type: AuthActionTypes.Login})
        try {
            const res = await AuthApi.login(data)
            if(res.data){
                //login was succeed
                //save token on loacalStorage
                window.localStorage.setItem("Nili", res.data.token);
                axios.defaults.headers.common['Authorization'] = `${res.data.token}` 
                dispatch({type: AuthActionTypes.LoginSuccess})
            }
        } catch (error) {
            //loagin perosses faild
            dispatch({type: AuthActionTypes.LoginFail});
            Alert.alert(error.response.data.message)
        }
        
    },


    logOutRequest: (): AppAction<ActionModel> => (dispatch, getState) => {
        //remove token from storage and axios header
        axios.defaults.headers.common['Authorization'] = "" 
        window.localStorage.removeItem("Nili");
        dispatch({type: AuthActionTypes.LogOut});
    }
};
