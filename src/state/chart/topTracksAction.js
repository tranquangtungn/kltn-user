import {
    GET_TOP_TRACKS_LOADING,
    GET_TOP_TRACKS_SUCCESS,
    GET_TOP_TRACKS_ERROR,
} from "../../core/constants/action-types";

export function actionTopTracksPending() {
    return {
        type: GET_TOP_TRACKS_LOADING,
    };
}

export function actionTopTracksSuccess(data) {
    return {
        type: GET_TOP_TRACKS_SUCCESS,
        payload: data,
    };
}

export function actionTopTracksError(error) {
    return {
        type: GET_TOP_TRACKS_ERROR,
        payload: error,
    };
}