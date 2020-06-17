import { AsyncStorage } from "react-native";
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
            }
        } catch (error) {
            //loagin perosses faild
            dispatch({type: AuthActionTypes.LoginFail})
            Alert.alert("Error: ", error.response.data.message)
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
                AsyncStorage.setItem("bullet", res.data.token);
                axios.defaults.headers.common['Authorization'] = `${res.data.token}` 
                dispatch({type: AuthActionTypes.LoginSuccess})
            }
        } catch (error) {
            //loagin perosses faild
            dispatch({type: AuthActionTypes.LoginFail})
            Alert.alert("Error: ", error.response.data.message)
        }
        
    },


    setIsAuth: (status: boolean ): AppAction<ActionModel> => (dispatch, getState) => {
        dispatch({type: AuthActionTypes.IsAuth, status});
    },

    logOutRequest: (): AppAction<ActionModel> => (dispatch, getState) => {
        //remove token from storage and axios header
        axios.defaults.headers.common['Authorization'] = "" ;
        AsyncStorage.removeItem("bullet");
        dispatch({type: AuthActionTypes.LogOut});
    }
};
