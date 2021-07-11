import { combineReducers } from "redux";

import topTracks from "./chart/topTracksReducer";
import topSingers from "./topSingers/topSingersReducer";
import singleArtist from "./singleArtist/singleArtistReducer";
import albumsArtist from "./albumsArtist/albumsArtistReducer";
import topArtistTracks from "./topArtistTracks/topArtistTracksReducer";
import topAlbums from "./topAlbums/topAlbumsReducer";
import relatedArtists from "./relatedArtists/relatedArtistsReducer";
import singleAlbums from "./singleAlbum/singleAlbumReducer";
import searchArtists from "./search/searchArtistsReducer";
import searchAlbums from "./search/searchAlbumsReducer";
import searchTracks from "./search/searchTracksReducer";
import genres from "./genres/genresReducer";
import artistsByGenre from "./byGenre/byGenreReducer";
import topTopRadios from "./radio/topRadiosReducer";
import singleRadio from "./radio/singleRadioReducer";
import favorites from "./favorites/favoriteReducer";
import { authentication } from '../_reducers/authentication.reducer';
import { registration } from '../_reducers/registration.reducer';
import { users } from '../_reducers/users.reducer';

export default combineReducers({
    topTracks,
    topSingers,
    singleArtist,
    albumsArtist,
    topArtistTracks,
    topAlbums,
    relatedArtists,
    singleAlbums,
    searchArtists,
    searchAlbums,
    searchTracks,
    genres,
    artistsByGenre,
    topTopRadios,
    singleRadio,
    favorites,
    authentication,
    registration,
    users,
});