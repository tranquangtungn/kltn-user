import React from "react";
import "./CardSong.css";

import convertDurationTrack from "../../core/functions/convertDurationTrack";
import PlayButton from "../Buttons/PlayButton";
import HeartButton from "../Buttons/HeartButton";

const CardSong = ({ song, artist }) => {
  return (
    <div className="container-song">
      <div className="cover-container">
        <img src={song.background} alt={song.title} />
      </div>
      <div className="info-container">
        <span>{song.trackname}</span>
        <div className="contributors">
          <p className="track-artist">
            {artist}
          </p>
        </div>
      </div>
      <p className="duration">{convertDurationTrack(song.duration)}</p>
      <PlayButton url={song.tracklink} />
      <HeartButton track={song} />
    </div>
  );
};

export default CardSong;
