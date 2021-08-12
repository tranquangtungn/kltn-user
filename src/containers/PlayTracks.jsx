import React, { Component } from 'react'

import AudioPlayer from 'react-playlist-player'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import fetchTopTracksAction from "../api/fetchChart";

class PlayTrack extends Component {
    state = {
        currentPlayList: {}
    }

    loadPlayList = () =>
        this.setState({
            currentPlayList: {
                playlistCoverUrl: 'images/1624180384latino.jpg',
                playlistName: 'top trend',
                bandName: 'top trend 2021',
                songs: [
                    {
                        position: '1',
                        songName: 'foo',
                        songUrl: '/tracks/play/60fbb661c27aeb0c014b08b0'
                    },
                    {
                        position: '2',
                        songName: 'bar',
                        songUrl: '/tracks/play/60f918c6c27aeb0c014b0570'
                    },
                    {
                        position: '3',
                        songName: 'baz',
                        songUrl: '/tracks/play/60f50b88c27aeb0c014ada28'
                    }
                ],
                type: 'album'
            }
        })

    render() {
        return (
            <div className={'PlayTrack'}>

                <AudioPlayer currentPlayList={this.state.currentPlayList} onToggle={({ audioPlaying }) => console.log({ audioPlaying })} />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    error: state.topTracks.error,
    tracks: state.topTracks.tracks,
    loading: state.topTracks.loading,
});


const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            fetchTopTracks: fetchTopTracksAction,
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(PlayTrack);
