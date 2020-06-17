import { Reducer } from "redux";
import { TasksActionTypes } from "./actionType";
import { ITaskState, ActionModel } from "./model";

const unloadedState: ITaskState = {
        loading: false,
        tasksList: []
};

export const TaskReducer: Reducer<ITaskState> = (
    state: ITaskState = unloadedState,
    action: ActionModel,
) => {
    switch (action.type) {
        case TasksActionTypes.GetTasksList: {
            return {
                ...state,
                authChecking: true
            } as ITaskState;
        }
        case TasksActionTypes.GetTasksListSuccess: {
            return {
                ...state,
                authChecking: false,
                tasksList: action.data
            } as ITaskState;
        }
        case TasksActionTypes.GetTasksListFaild: {
            return {
                ...state,
                authChecking: false
            } as ITaskState;
        }

        //Create
        case TasksActionTypes.CreateNewTask: {
            return {
                ...state,
                loading: true
            } as ITaskState;
        }
        case TasksActionTypes.CreateNewTaskSuccess: {
            return {
                ...state,
                loading: false
            } as ITaskState;
        }
        case TasksActionTypes.CreateNewTaskFaild: {
            return {
                ...state,
                loading: false
            } as ITaskState;
        }
    }
    return state;
};
