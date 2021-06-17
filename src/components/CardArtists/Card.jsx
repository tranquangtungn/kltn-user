import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ artist }) => {
  return (
    <Link to={`/artist/${artist._id}`} className="card">
      <img className="blur" src={artist.avatar} alt={artist.name} />
      <img className="pic" src={artist.avatar} alt={artist.name} />
      <span>{artist.name}</span>
    </Link>
  );
};

export default Card;
