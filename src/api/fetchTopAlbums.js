import fetch from "cross-fetch";
import {
    actionTopAlbumsPending,
    actionTopAlbumsSuccess,
    actionTopAlbumsError,
} from "../state/topAlbums/topAlbumsAction";

export default function fetchTopAlbum() {
    return (dispatch) => {
        dispatch(actionTopAlbumsPending());
        fetch("/albums/top-trend")
            // fetch("/chart")
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }

                dispatch(actionTopAlbumsSuccess(res));
                return res;
            })
            .catch((error) => {
                dispatch(actionTopAlbumsError(error));
            });
    };
}