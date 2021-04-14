//import { useLocation } from "react-router-dom";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from "classnames";
import TrackComponent from 'components/TrackComponent/TrackComponent';
import React, { useEffect, useState } from "react";
import { Redirect, useLocation } from "react-router-dom";
import Components from "components/Header/CustomHeader.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import top100TracksApi from "api/top100TracksApi";
import Footer from "components/Footer/Footer";
import myProfileAPI from "api/myProfileApi";
import playMusicApi from "api/playMusicApi";
import ReactAudioPlayer from "react-audio-player";
import CustomParticles from "components/CustomParticiles/CustomParticles";
import Parallax from "components/Parallax/Parallax.js";
function App() {
    const location = useLocation();
    const [topTracksList, setTopTracksList] = useState([])
    const [playTrack, setPlayTrack] = useState('')
    const [idUser, setIdUser] = useState('')
    useEffect(() => {

        const fetchTopTracks = async () => {
            try {
                const response = await top100TracksApi.get(location.state.accessToken);
                console.log('Fetch tracks successfully: ', response.items);
                setTopTracksList(response.items)
            } catch (error) {
                console.log('Failed to fetch tracks list: ', error);
            }

        }
        fetchTopTracks();

        const getMyProfile = async () => {
            try {


                const respon = await myProfileAPI.get(location.state.accessToken);
                console.log('Fetch products successfully: ', respon.items._id);
                setIdUser(
                    respon.items._id
                )

            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
        }
        getMyProfile();
    }, []);
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    async function handleSubmit(frmValue) {
        console.log(frmValue)
        try {
            console.log(frmValue)

            const respon = await playMusicApi.get(location.state.accessToken, frmValue.id, idUser);
            console.log('Fetch products successfully: ', respon);
            const url = window.URL.createObjectURL(new Blob([respon], { type: 'audio/mpeg' }));
            setPlayTrack(url)
        } catch (error) {
            console.log('Failed to fetch product list: ', error);
        }
    }
    return (
        <div>
            {(location.state === undefined) ? (
                <Redirect to="/login" />
            ) : (
                <div>
                    <Components token={location.state.accessToken} />
                    <CustomParticles image={require("assets/img/bgpc.jpg")}>
                    </CustomParticles>
                    <Parallax >
                        <div className={classes.container}>
                            <GridContainer>
                                <GridItem>
                                    <div className={classes.brand}>
                                        <h1 className={classes.title}>Music social network.</h1>
                                        <h3 className={classes.subtitle}>
                                            listen, upload, connect your music
                </h3>
                                    </div>
                                </GridItem>
                            </GridContainer>
                        </div>
                    </Parallax>
                    <div className={classNames(classes.main, classes.mainRaised)}>

                        <div className={classes.section}>
                            <div className={classes.container}>
                                <div id="nav-tabs">

                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={12}>
                                            <ReactAudioPlayer
                                                src={playTrack}
                                                autoPlay
                                                controls
                                            />
                                        </GridItem>
                                        {topTracksList.map(track => (
                                            <GridItem xs={12} sm={12} md={12}>
                                                <TrackComponent
                                                    onSubmit={handleSubmit}
                                                    track={track}
                                                />
                                            </GridItem>
                                        ))}
                                        {/* <GridItem xs={12} sm={12} md={6}>
                                                <TrackComponent name="Em của ngày hôm qua" description="SƠN TÙNG M-TP" />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={6}>
                                                <TrackComponent name="Trip" description="Ella Mai" />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={6}>
                                                <TrackComponent name="Umbrella" description="Ember Island" />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={6}>
                                                <TrackComponent name="Kẻ Mộng Mơ (Lofi Ver.)" description="Reddy x Freak D" />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={6}>
                                                <TrackComponent name="Đi Về Nhà" description="Đen x JustaTee" />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={6}>
                                                <TrackComponent name="CHÚNG TA CỦA HIỆN TẠI" description="SƠN TÙNG M-TP" />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={6}>
                                                <TrackComponent name="Umbrella" description="Ember Island" />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={6}>
                                                <TrackComponent name="Umbrella" description="Ember Island" />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={6}>
                                                <TrackComponent name="Umbrella" description="Ember Island" />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={6}>
                                                <TrackComponent name="Umbrella" description="Ember Island" />
                                            </GridItem> */}
                                    </GridContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />

                </div>
            )}


        </div>
    );
}

export default App;