import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ artist }) => {
  return (
    <Link to={`/artist/${artist.id}`} className="card">
      <img className="blur" src={artist.avatar} alt={artist.namenosign} />
      <img className="pic" src={artist.avatar} alt={artist.namenosign} />
      <span>{artist.namenosign}</span>
    </Link>
  );
};

export default Card;
