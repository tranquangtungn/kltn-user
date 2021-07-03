import {
    GET_TOP_SINGERS_LOADING,
    GET_TOP_SINGERS_SUCCESS,
    GET_TOP_SINGERS_ERROR,
} from "../../core/constants/action-types";

export function actionTopSingersPending() {
    return {
        type: GET_TOP_SINGERS_LOADING,
    };
}

export function actionTopSingersSuccess(data) {
    return {
        type: GET_TOP_SINGERS_SUCCESS,
        payload: data,
    };
}

export function actionTopSingersError(error) {
    return {
        type: GET_TOP_SINGERS_ERROR,
        payload: error,
    };
}