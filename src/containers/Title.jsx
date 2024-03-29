import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import fetchArtistAction from "../api/fecthSingleArtist";
// import convertNumber from "../core/functions/convertNumber";

import Loading from "../components/Loading/Loading";
import FollowButton from "../components/Buttons/FollowButton";

class Title extends Component {
  componentDidMount() {
    const idArtist = this.props.id;
    const { fetchArtist } = this.props;
    fetchArtist(idArtist);
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      const { fetchArtist } = this.props;
      fetchArtist(this.props.id);
    }
  }

  render() {
    const { artist, loading } = this.props;

    if (loading) return <Loading />;
    return (
      <div className="header-artist">
        <img src={artist.items.avatar} alt={artist.items.name} />
        <div className="artist-info">
          <h1>{artist.items.name}</h1>
          <p>{Math.floor(Math.random() * 50000) + 10000} Fans</p>
          <FollowButton artist={artist.items} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.singleArtist.loading,
  error: state.singleArtist.error,
  artist: state.singleArtist.info,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchArtist: fetchArtistAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Title);
