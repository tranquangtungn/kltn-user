import React from "react";
import "./CardAlbum.css";
import { Link } from "react-router-dom";

const CardAlbum = ({ album }) => {
  return (
    <Link to={`/album/${album._id}`} className="album">
      <img src={album.background} alt={album.albumname} className="card-album" />
      <p className="Album-Title">{album.albumname}</p>
      {/* <p>{album.year}</p> */}
    </Link>
  );
};

export default CardAlbum;
