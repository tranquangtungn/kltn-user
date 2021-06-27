import React from "react";
import "./HintResults.css";

import { Link } from "react-router-dom";

import ItemResult from "./ItemResult";

const HintResults = ({ artistsFound, albumsFound, songsFound }) => {
  return (
    <div id="hint-container">
      <div>
        <section>
          <h3 className="title-section">Artists</h3>
          {artistsFound.items.singers.length > 0 ? (
            artistsFound.items.singers.map((artist) => (
              <Link key={artist._id} to={`/artist/${artist._id}`}>
                <ItemResult
                  key={artist._id}
                  text={artist.name}
                  pic={artist.avatar}
                />
              </Link>
            ))
          ) : (
            <div className="error">No Matches Were Found</div>
          )}
        </section>
        <section>
          <h3 className="title-section">Albums</h3>
          {albumsFound.items.albums.length > 0 ? (
            albumsFound.items.albums.map((album) => (
              <Link key={album._id} to={`/album/${album._id}`}>
                <ItemResult
                  key={album._id}
                  text={album.albumname}
                  pic={album.background}
                />
              </Link>
            ))
          ) : (
            <div className="error">No Matches Were Found</div>
          )}
        </section>
        <section>
          <h3 className="title-section">Songs</h3>
          {songsFound.items.tracks.length > 0 ? (
            songsFound.items.tracks.map((track) => (
              <Link key={track._id} to={`/album/${track.album.id}`}>
                <ItemResult
                  key={track._id}
                  text={track.trackname}
                  pic={track.background}
                />
              </Link>
            ))
          ) : (
            <div className="error">No Matches Were Found</div>
          )}
        </section>
      </div>
    </div>
  );
};

export default HintResults;
