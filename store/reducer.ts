import { AuthReducer } from "../actions/Auth/reducer";
import { TaskReducer } from "../actions/Tasks/reducer";

export const reducers = {
    auth: AuthReducer,
    tasks: TaskReducer
}