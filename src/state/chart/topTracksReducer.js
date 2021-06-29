import {
    GET_TOP_TRACKS_LOADING,
    GET_TOP_TRACKS_SUCCESS,
    GET_TOP_TRACKS_ERROR,
} from "../../core/constants/action-types";

const initialState = {
    loading: true,
    tracks: [],
    error: null,
};

export default function tracks(state = initialState, action) {
    switch (action.type) {
        case GET_TOP_TRACKS_LOADING:
            return {
                ...state,
                loading: true,
            };
        case GET_TOP_TRACKS_SUCCESS:
            return {
                ...state,
                loading: false,
                tracks: action.payload,
            };
        case GET_TOP_TRACKS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}