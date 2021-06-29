import {
    GET_TOP_ALBUMS_LOADING,
    GET_TOP_ALBUMS_SUCCESS,
    GET_TOP_ALBUMS_ERROR,
} from "../../core/constants/action-types";

const initialState = {
    loading: true,
    albums: [],
    error: null,
};

export default function topAlbums(state = initialState, action) {
    switch (action.type) {
        case GET_TOP_ALBUMS_LOADING:
            return {
                ...state,
                loading: true,
            };
        case GET_TOP_ALBUMS_SUCCESS:
            return {
                ...state,
                loading: false,
                albums: action.payload,
            };
        case GET_TOP_ALBUMS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}