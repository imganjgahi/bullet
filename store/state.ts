import { IAuthState } from "../actions/Auth/model";
import { ITaskState } from "../actions/Tasks/model";

export interface IApplicationState {
    auth: IAuthState,
    tasks: ITaskState
}

export type AppAction<TAction> = (dispatch: (action: TAction) => void, getState: () => IApplicationState) => void;