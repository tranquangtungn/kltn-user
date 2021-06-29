import { combineReducers } from "redux";

import topTracks from "./chart/topTracksReducer";
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

export default combineReducers({
    topTracks,
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
});