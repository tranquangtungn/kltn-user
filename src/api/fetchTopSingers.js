import fetch from "cross-fetch";
import {
    actionTopSingersPending,
    actionTopSingersSuccess,
    actionTopSingersError,
} from "../state/topSingers/topSingersAction";

export default function fetchTopSinger() {
    return (dispatch) => {
        dispatch(actionTopSingersPending());
        fetch("/singers/get-list")
            // fetch("/chart")
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }

                dispatch(actionTopSingersSuccess(res));
                return res;
            })
            .catch((error) => {
                dispatch(actionTopSingersError(error));
            });
    };
}