/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "views/LibraryPage/node_modules/components/CustomDropdown/CustomDropdown.js.js";
import Button from "views/LibraryPage/node_modules/components/CustomButtons/Button.js.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function RightHeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>


      <ListItem className={classes.listItem}>
        <Link to={"/login"} className={classes.link}>
          <Button
            color="transparent"

            target="_blank"
            className={classes.navLink}
            simple
          >
            Login
          </Button>
        </Link>
      </ListItem>

    </List>
  );
}
