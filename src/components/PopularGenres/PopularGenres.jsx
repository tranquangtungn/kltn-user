import React from "react";
import "./PopularGenres.css";
import { Link } from "react-router-dom";

const PopularGenres = () => {
  return (
    <div className="container-popular">
      <h1>Popular</h1>
      <Link to="/genre/60ea86952cd5641f8a3f48dd">
        <div className="container-images">
          {/* <img src="../../assets/popular-genres.jpeg" alt="hip hop latino" /> */}
        </div>
        <h2 className="title">
          Hip Hop <span>Nhạc trẻ</span>
        </h2>
      </Link>
    </div>
  );
};

export default PopularGenres;
