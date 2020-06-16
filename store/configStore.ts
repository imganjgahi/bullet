import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./reducer";

export default function configureStore(initialState: any) {
    const middleware = [thunk];
    const rootReducer = combineReducers({ ...reducers });

    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(...middleware)
        ),
    );
}