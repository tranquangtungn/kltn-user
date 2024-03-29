import React from "react";
import "./Sidebar.css";
import { NavLink, Link } from "react-router-dom";
import ToogleTheme from "../../components/Buttons/Toggle";
import {
  faHome,
  faSearch,
  faBroadcastTower,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  return (
    <div className="container">

      <Link className="title-sidebar" exact to="/" activeClassName="active" style={{ textAlign: 'center' }}>
        <p>Music Discovery</p>
      </Link>
      <section className="sidebar-topics">


        <ToogleTheme />
        <NavLink exact to="/" className="item" activeClassName="active">
          <span>Home</span>
        </NavLink>

        <NavLink exact to="/discover" className="item" activeClassName="active">
          <span>Discover</span>
        </NavLink>
        {/* 
        <NavLink exact to="/radio" className="item" activeClassName="active">
          <span>Radio</span>
        </NavLink> */}

        {/* <NavLink exact to="/foryou" className="item" activeClassName="active">
          <span>For you</span>
        </NavLink> */}
      </section>

      {/* your library */}
      <section className="sidebar-library">
        <h4>Your Library</h4>


        <NavLink exact to="/artists" className="item" activeClassName="active">
          {/* <FontAwesomeIcon className="icon" icon={faUser} /> */}
          <span>Artists</span>
        </NavLink>

        <NavLink exact to="/songs" className="item" activeClassName="active">
          {/* <FontAwesomeIcon className="icon" icon={faRecordVinyl} /> */}
          <span>Songs</span>
        </NavLink>


      </section>

      {/* Footer on mobile */}
      <section className="sidebar-mobile">
        <NavLink exact to="/" className="item" activeClassName="active">
          <FontAwesomeIcon className="icon" icon={faHome} />
          <span>Home</span>
        </NavLink>

        <NavLink exact to="/discover" className="item" activeClassName="active">
          <FontAwesomeIcon className="icon" icon={faSearch} />
          <span>Discover</span>
        </NavLink>

        <NavLink
          exact
          to="/favorites"
          className="item"
          activeClassName="active"
        >
          <FontAwesomeIcon className="icon" icon={faHeart} />
          <span>Favorites</span>
        </NavLink>

        <NavLink exact to="/radio" className="item" activeClassName="active">
          <FontAwesomeIcon className="icon" icon={faBroadcastTower} />
          <span>Radio</span>
        </NavLink>
      </section>
    </div>
  );
};

export default Sidebar;
