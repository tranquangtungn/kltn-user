import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import fetchTopTracksAction from "../api/fetchChart";

import Loading from "../components/Loading/Loading";
import CardSong from "../components/CardTracks/CardSong";

class ChartTracks extends Component {
  componentDidMount() {
    const { fetchTopTracks } = this.props;
    fetchTopTracks();
  }

  render() {
    const { tracks, loading, error } = this.props;
    //console.log("Track: ", tracks);
    console.log(tracks)
    if (loading) return <Loading />;
    else {
      return (
        <div>
          {error && <span>{error}</span>}
          <h1>Top Songs</h1>
          <section className="top-songs-container">
            {tracks?.items.slice(0, 6)?.map((track) => (
              <CardSong key={track._id} song={track} singer={track.singer.name} />
            ))}
          </section>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  error: state.chart.error,
  tracks: state.chart.top,
  loading: state.chart.loading,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchTopTracks: fetchTopTracksAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ChartTracks);
