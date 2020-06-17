import { AsyncStorage } from "react-native";
import { AppAction } from "../../store/state";
import { TasksActionTypes } from "./actionType";
import { ActionModel } from "./model";
import { AuthApi } from "./api";
import { Alert } from "react-native";

export const getTaskList = (cb: any = null) => async (dispatch: any, getState: any) => {
    dispatch({type: TasksActionTypes.GetTasksList})
    try {
        const res = await AuthApi.getList()
        if(res.data){
            dispatch({type: TasksActionTypes.GetTasksListSuccess, data: res.data})
            if(cb){
                cb()
            }
        }
    } catch (error) {
        //loagin perosses faild
        dispatch({type: TasksActionTypes.GetTasksListFaild})
        Alert.alert("خطا: ", error.response.data.message)
    }
    
}
export const createNewTask = (data: any, cb: any) => async (dispatch: any, getState: any) => {
    dispatch({type: TasksActionTypes.CreateNewTask})
    try {
        const res = await AuthApi.create(data)
        if(res.data){
            dispatch({type: TasksActionTypes.CreateNewTaskSuccess})
            getTaskList(cb)(dispatch, getState)
        }
    } catch (error) {
        //loagin perosses faild
        dispatch({type: TasksActionTypes.CreateNewTaskFaild})
        Alert.alert("خطا: ", error.response.data.message)
    }
    
}
