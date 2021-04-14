import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { isNamedExportBindings } from 'typescript';

const useStyles = makeStyles((theme) => ({
    root: {
        border: "2px double green",
        height: 162,
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 150,
        height: 160,
        position: "absolute",
        border: "2px double green",
        right: "16px",
        borderRadius: "2px"
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 30,
        width: 30,
    },

}));

export default function MediaControlCard(props) {
    const { track, onSubmit } = props;
    const classes = useStyles();
    const theme = useTheme();
    function handleSubmit(e) {
        if (!onSubmit) return;
        const frmValues = {
            id: track._id,
        }
        onSubmit(frmValues)
    }
    return (

        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {track.trackname}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {track.description}
                    </Typography>

                </CardContent>
                <div className={classes.controls}>

                    <IconButton aria-label="play/pause" onClick={handleSubmit}>
                        <PlayArrowIcon className={classes.playIcon} />
                    </IconButton>
                    <Typography variant="subtitle1" color="textSecondary">
                        Lượt nghe {track.total}
                    </Typography>

                </div>
            </div>

            <img
                className={classes.cover}
                src={track.background}
                title="Live from space album cover"
            />


        </Card>
    );
}
