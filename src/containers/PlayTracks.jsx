import React, { Component } from 'react'

import AudioPlayer from 'react-playlist-player'

class PlayTrack extends Component {
    state = {
        currentPlayList: {}
    }

    loadPlayList = () =>
        this.setState({
            currentPlayList: {
                playlistCoverUrl: 'path/to/coverUrl',
                playlistName: 'playlist name',
                bandName: 'band name',
                songs: [
                    {
                        position: '1',
                        songName: 'foo',
                        songUrl: 'path/to/songUrl'
                    },
                    {
                        position: '2',
                        songName: 'bar',
                        songUrl: 'path/to/songUrl'
                    },
                    {
                        position: '3',
                        songName: 'baz',
                        songUrl: 'path/to/songUrl'
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

export default PlayTrack;