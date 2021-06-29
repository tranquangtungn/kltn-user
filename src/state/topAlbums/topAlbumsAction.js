import {
    GET_TOP_ALBUMS_LOADING,
    GET_TOP_ALBUMS_SUCCESS,
    GET_TOP_ALBUMS_ERROR,
} from "../../core/constants/action-types";

export function actionTopAlbumsPending() {
    return {
        type: GET_TOP_ALBUMS_LOADING,
    };
}

export function actionTopAlbumsSuccess(data) {
    return {
        type: GET_TOP_ALBUMS_SUCCESS,
        payload: data,
    };
}

export function actionTopAlbumsError(error) {
    return {
        type: GET_TOP_ALBUMS_ERROR,
        payload: error,
    };
}