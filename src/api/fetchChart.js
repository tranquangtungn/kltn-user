import fetch from "cross-fetch";
import {
    actionTopTracksPending,
    actionTopTracksSuccess,
    actionTopTracksError,
} from "../state/chart/topTracksAction";

export default function fetchTopTracks() {
    return (dispatch) => {
        dispatch(actionTopTracksPending());
        fetch("/tracks/top-music")
            // fetch("/chart")
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }

                dispatch(actionTopTracksSuccess(res));
                return res;
            })
            .catch((error) => {
                dispatch(actionTopTracksError(error));
            });
    };
}