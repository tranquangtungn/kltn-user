import React, { Component } from "react";
import ChartAlbums from "../containers/ChartAlbums";
import PopularGenres from "../components/PopularGenres/PopularGenres";
import ChartTracks from "../containers/ChartTracks";
import ChartArtists from "../containers/ChartArtists";


import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
class HomePage extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const { user } = this.props;
    return (
      <div className="container-right">
        <ChartAlbums />
        <div className="home-divide">
          <div className="popular-left">
            <PopularGenres />
          </div>
          <div className="popular-right">
            <ChartTracks />
          </div>
        </div>
        <ChartArtists />
        <p>
          <br />
          <br />
          <br />
          <br />
        </p>
      </div>
    );
  }
}
function mapState(state) {
  const { user } = state.authentication
  return { user };
}
const actionCreators = {
  getUsers: userActions.getAll,

}

export default connect(mapState, actionCreators)(HomePage);
