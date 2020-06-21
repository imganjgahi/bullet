import { TasksActionTypes } from "./actionType";
import { AuthApi } from "./api";
import { Alert } from "react-native";
import { insertEvent, getEvents } from '../../utils/db';
import { AppAction } from "../../store/state";
import { ActionModel } from "./model";
export const getTaskList = (cb: any = null): AppAction<ActionModel> => async (dispatch, getState) => {
    dispatch({type: TasksActionTypes.GetTasksList})
    try {
        const res = await AuthApi.getList()
        const dbRes = await getEvents()
        console.log("DEB: ", dbRes)
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
export const createNewTask = (data: any, cb: any): AppAction<ActionModel> => async (dispatch, getState) => {
    dispatch({type: TasksActionTypes.CreateNewTask})
    try {
        const sqRes = await insertEvent(data)
        // const res = await AuthApi.create(data)
        console.log("sqRes: ", sqRes)
        if(sqRes){
            dispatch({type: TasksActionTypes.CreateNewTaskSuccess})
            getTaskList(cb)(dispatch, getState)
        }
    } catch (error) {
        console.log("error: ", error)
        //loagin perosses faild
        dispatch({type: TasksActionTypes.CreateNewTaskFaild})
        Alert.alert("خطا: ", error)
    }
    
}
