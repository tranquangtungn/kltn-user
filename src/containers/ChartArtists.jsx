import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import fetchTopArtistsAction from "../api/fetchTopSingers";

import Loading from "../components/Loading/Loading";
import Card from "../components/CardArtists/Card";

class ChartArtists extends Component {
  componentDidMount() {
    const { fetchTopArtists } = this.props;
    fetchTopArtists();
  }

  render() {
    const { artists, loading, error } = this.props;

    if (loading) return <Loading />;
    else {
      return (
        <React.Fragment>
          {error && <span>{error}</span>}
          <h1>Featured Artists</h1>
          <div className="featured-artists">
            {artists?.items.slice(10, 20).map((artist) => (
              <Card key={artist._id} artist={artist} />
            ))}
          </div>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  error: state.topSingers.error,
  artists: state.topSingers.singers,
  loading: state.topSingers.loading,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchTopArtists: fetchTopArtistsAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ChartArtists);
