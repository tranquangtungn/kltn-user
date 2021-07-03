import {
    GET_TOP_SINGERS_LOADING,
    GET_TOP_SINGERS_SUCCESS,
    GET_TOP_SINGERS_ERROR,
} from "../../core/constants/action-types";

const initialState = {
    loading: true,
    singers: [],
    error: null,
};

export default function topSingers(state = initialState, action) {
    switch (action.type) {
        case GET_TOP_SINGERS_LOADING:
            return {
                ...state,
                loading: true,
            };
        case GET_TOP_SINGERS_SUCCESS:
            return {
                ...state,
                loading: false,
                singers: action.payload,
            };
        case GET_TOP_SINGERS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}