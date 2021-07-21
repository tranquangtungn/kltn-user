import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import fetchAlbumAction from "../api/fetchSingleAlbum";

// import convertDurationTrack from "../core/functions/convertDurationTrack";
import convertDurationAlbum from "../core/functions/convertDurationAlbum";
import convertNumber from "../core/functions/convertNumber";
import addProperty from "../core/functions/addProperty";

import Loading from "../components/Loading/Loading";
import PlayButton from "../components/Buttons/PlayButton";
import HeartButton from "../components/Buttons/HeartButton";

class SingleAlbum extends Component {
  componentDidMount() {
    const idAlbum = this.props.match.params.id;
    const { fetchAlbum } = this.props;
    fetchAlbum(idAlbum);
  }

  render() {
    const { album, loading } = this.props;

    if (loading) return <Loading />;
    return (
      <div className="container-right">
        <header>
          <img src={album.items?.background} alt={`${album.items?.albumname}`} />
          <section className="info">
            <h1>{album.items?.albumname}</h1>
            <div className="tags-genres">
              {album.genres?.data?.map((genre) => (
                <Link to={`/genre/${genre.id}`}>
                  <p key={genre.id}>{genre.name}</p>
                </Link>
              ))}
            </div>
            <div className="details">
              <p>{album.items?.tracks.count} Songs</p>
              <p id="dot">&bull;</p>
              <p>{convertDurationAlbum(Math.floor(Math.random() * 500) + 1000)}</p>
            </div>
            <p>{convertNumber(Math.floor(Math.random() * 50000) + 10000)} Fans</p>
          </section>
        </header>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th id="duration-header"></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {album.items?.tracks.map((track, index) => (
              <tr key={track._id}>
                <td>{index + 1}</td>
                <td>
                  <p>{track.trackname}</p>
                </td>
                <td className="duration-field">

                </td>
                <td>
                  <PlayButton url={track.tracklink} />
                </td>
                <td>
                  <HeartButton track={addProperty(track, track.background)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.singleAlbums.error,
  album: state.singleAlbums.info,
  loading: state.singleAlbums.loading,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchAlbum: fetchAlbumAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SingleAlbum);
