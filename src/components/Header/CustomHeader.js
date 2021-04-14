import InputBase from '@material-ui/core/InputBase';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
//import { useLocation } from "react-router-dom";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// sections for this page
import Email from "@material-ui/icons/Email";
import SearchIcon from '@material-ui/icons/Search';
import styles from "assets/jss/material-kit-react/views/components.js";
import navbarStyles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// nodejs library that concatenates classes
import classNames from "classnames";
import Button from "components/CustomButtons/Button.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import CustomParticles from "components/CustomParticiles/CustomParticles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Header from "components/Header/Header.js";
import Parallax from "components/Parallax/Parallax.js";
import * as config from "config.js";
import React, { useEffect, useState } from "react";
import { Link, Redirect } from 'react-router-dom';



const useStyles = makeStyles(styles);
const useNavbarStyles = makeStyles(navbarStyles);

export default function Components(props) {



  const [user, setUser] = React.useState({
    firstName: "",
    lastName: "",
    birth: "",
    avatar: "assets/img/profile-bg.jpg",
    gender: "",
    accessToken: "",
    message: "",
  })
  const classes = useStyles();
  const NavbarClasses = useNavbarStyles();
  const Logout = () => {



  }


  const { token, ...rest } = props;
  useEffect(() => {
    console.log(token)

    const options = {
      headers: { 'x-access-token': `${token}` }
    };

    Axios.get(`${config.API_URL}/users/my-profile`, options)
      .then(response => {


        if (response.data.message === "Successfully") {

          setUser({
            ...user,
            firstName: response.data.items.firstname,
            lastName: response.data.items.lastname,
            gender: response.data.items.gender,
            birth: response.data.items.birthday,
            avatar: response.data.items.avatar,
            message: response.data.message,
          })
        } else {
          setUser({ ...user, message: response.data.message })
        }
      })
      .catch(error => {
        console.log(error)
      })
  }, []);
  return (
    <div>
      {(user.message === 'Not authorized to access this resource') ? (
        <Redirect to="/login" />
      ) : (
        <div>
          <Header
            accessToken={token}
            brand="Music social network"
            rightLinks={
              <List className={NavbarClasses.list}>

                <ListItem className={NavbarClasses.listItem}>
                  <Button
                    justIcon
                    round
                    href="#pablo"
                    className={NavbarClasses.notificationNavLink}
                    onClick={e => e.preventDefault()}
                    color="rose"
                  >
                    <Email className={NavbarClasses.icons} />
                  </Button>
                </ListItem>
                <ListItem className={NavbarClasses.listItem}>
                  <CustomDropdown
                    left
                    caret={false}
                    hoverColor="black"

                    buttonText={
                      <img
                        src={user.avatar}
                        className={NavbarClasses.img}
                        alt="profile"
                      />
                    }
                    buttonProps={{
                      className:
                        NavbarClasses.navLink + " " + NavbarClasses.imageDropdownButton,
                      color: "transparent"
                    }}
                    dropdownList={[

                      <Link to={{
                        pathname: "/profile",
                        state: { accessToken: token }
                      }} className={classes.dropdownLink}
                      >
                        About Me
                      </Link>,

                      "Settings and other stuff",
                      <Link to={{
                        pathname: "/login",

                      }} className={classes.dropdownLink}
                        onClick={Logout}>
                        Log out
                      </Link>,
                    ]}
                  />
                </ListItem>
              </List>
            }
            leftLinks={
              <List className={NavbarClasses.list}>
                <ListItem className={NavbarClasses.listItem}>
                  <Link to={{
                    pathname: "/library",
                    state: { accessToken: token }

                  }}
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      textColor: "white"
                    }}
                  >
                    <Button
                      className={NavbarClasses.navLink}
                      color="transparent"
                    >

                      library
                    </Button>
                  </Link>





                  <Button

                    color="transparent"
                    className={NavbarClasses.navLink}
                  >
                    history
                  </Button>

                </ListItem>
                <ListItem className={NavbarClasses.listItem}>
                  <div className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase
                      placeholder="Search…"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </div>
                </ListItem>
              </List>
            }

            fixed
            color="transparent"
            changeColorOnScroll={{
              height: 400,
              color: "pacific"
            }}
            {...rest}
          />



        </div>
      )
      }



    </div>
  );
}
