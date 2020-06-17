import { Action } from "redux";
import {TasksActionTypes} from './actionType';

export interface ITaskState {
    loading: boolean;
    tasksList: any;
}

interface IGetTasksList extends Action<string> {
    type: TasksActionTypes.GetTasksList;
}
interface IGetTasksListSuccess extends Action<string> {
    type: TasksActionTypes.GetTasksListSuccess;
    data: any;
}
interface IGetTasksListFaild extends Action<string> {
    type: TasksActionTypes.GetTasksListFaild;
}


interface ICreateNewTask extends Action<string> {
    type: TasksActionTypes.CreateNewTask;
}
interface ICreateNewTaskSuccess extends Action<string> {
    type: TasksActionTypes.CreateNewTaskSuccess;
}
interface ICreateNewTaskFaild extends Action<string> {
    type: TasksActionTypes.CreateNewTaskFaild;
}



export type ActionModel = IGetTasksList 

| IGetTasksListSuccess
| IGetTasksListFaild
| ICreateNewTask
| ICreateNewTaskSuccess
| ICreateNewTaskFaild