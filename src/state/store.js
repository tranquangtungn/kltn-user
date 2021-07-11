import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { createLogger } from 'redux-logger';
import { loadState, saveState } from "./loadState/localStorage";

const initialData = loadState();

const middlewares = [thunk];
const loggerMiddleware = createLogger();
const store = createStore(
    rootReducer,
    initialData,
    applyMiddleware(...middlewares, loggerMiddleware)
);

store.subscribe(function () {
    saveState({ favorites: store.getState().favorites });
});

export default store;