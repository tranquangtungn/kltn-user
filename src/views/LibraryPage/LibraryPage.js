import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
import navbarStyles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// nodejs library that concatenates classes
import classNames from "classnames";
import { AddAlbum } from "components/AddAlbum/AddAlbum.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import { EditAlbum } from "components/EditAlbum/EditAlbum.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { ListAlbum } from "components/ListAlbum/ListAlbum.js";
import * as config from "config.js";
import { GlobalProvider } from "context/GlobalState.js";
import { Formik, Form, FastField } from "formik";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import { useLocation } from "react-router-dom";
// react components for routing our app without refresh
// @material-ui/core components
import CustomHeader from "components/Header/CustomHeader.js";
import InputField from "components/InputField/InputField"
import { Button, FormGroup, Label, Input, FormText } from 'reactstrap';
import TrackComponent from 'components/TrackComponent/TrackComponent';
const useStyles = makeStyles(styles);
const useNavbarStyles = makeStyles(navbarStyles);

export default function LibraryPage(props) {
  const location = useLocation();

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


  const { ...rest } = props;

  const initialValues = {
    name: '',
    description: ''
  };

  return (
    <div>
      <CustomHeader token={location.state.accessToken} />
      <div>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.section}>
            <div className={classes.container}>
              <div id="nav-tabs">

                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>

                    <CustomTabs
                      headerColor="primary"
                      tabs={[
                        {
                          tabName: "Upload Track",

                          tabContent: (
                            <Formik
                              initialValues={initialValues}
                              onSubmit={values => console.log('Submit: ', values)}

                            >
                              {formikProps => {
                                const { values, error, touched } = formikProps

                                return (
                                  <Form>
                                    <FastField
                                      name="name"
                                      component={InputField}

                                      label="Name"
                                      placeholder="Input your playlist name..."
                                    />
                                    <FastField
                                      name="description"
                                      component={InputField}
                                      type="textarea"
                                      label="Description"
                                      placeholder="Input your album description..."
                                    />
                                    <FastField
                                      name="file"
                                      component={InputField}
                                      type="file"
                                      label="File"
                                      placeholder="Your track file..."
                                    />
                                    <FormGroup>

                                      <FormText color="muted">
                                        This is some placeholder block-level help text for the above input.
                                        It's a bit lighter and easily wraps to a new line.
                                       </FormText>
                                    </FormGroup>
                                    <Button type="submit">
                                      upload
                                    </Button>
                                  </Form>
                                )
                              }
                              }
                            </Formik>
                          )
                        },
                        {
                          tabName: "History",

                          tabContent: (
                            <div>



                            </div>

                          )
                        },
                        {
                          tabName: "My Playlist",

                          tabContent: (
                            <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
                              <GlobalProvider>
                                <Router>
                                  <Switch>
                                    < Route exact path="/library/" component={ListAlbum} />
                                    < Route path="/library/add" component={AddAlbum} />
                                    < Route path="/library/edit/:id" component={EditAlbum} />
                                  </Switch>
                                </Router>
                              </GlobalProvider>

                            </div>
                          )
                        },
                        {
                          tabName: "My Tracks",

                          tabContent: (
                            <p className={classes.textCenter}>
                              think that’s a responsibility that I have, to push
                              possibilities, to show people, this is the level that
                              things could be at. So when you get something that has
                              the name Kanye West on it, it’s supposed to be pushing
                              the furthest possibilities. I will be the leader of a
                              company that ends up being worth billions of dollars,
                              because I got the answers. I understand culture. I am
                              the nucleus.
                            </p>
                          )
                        }
                      ]}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <h3>
                      <small>Tabs on Plain Card</small>
                    </h3>
                    <CustomTabs
                      plainTabs
                      headerColor="danger"
                      tabs={[
                        {
                          tabName: "Home",
                          tabContent: (
                            <p className={classes.textCenter}>
                              I think that’s a responsibility that I have, to push
                              possibilities, to show people, this is the level that
                              things could be at. So when you get something that has
                              the name Kanye West on it, it’s supposed to be pushing
                              the furthest possibilities. I will be the leader of a
                              company that ends up being worth billions of dollars,
                              because I got the answers. I understand culture. I am
                              the nucleus.
                            </p>
                          )
                        },
                        {
                          tabName: "Updates",
                          tabContent: (
                            <p className={classes.textCenter}>
                              I think that’s a responsibility that I have, to push
                              possibilities, to show people, this is the level that
                              things could be at. I will be the leader of a company
                              that ends up being worth billions of dollars, because I
                              got the answers. I understand culture. I am the nucleus.
                              I think that’s a responsibility that I have, to push
                              possibilities, to show people, this is the level that
                              things could be at.
                            </p>
                          )
                        },
                        {
                          tabName: "History",
                          tabContent: (
                            <p className={classes.textCenter}>
                              think that’s a responsibility that I have, to push
                              possibilities, to show people, this is the level that
                              things could be at. So when you get something that has
                              the name Kanye West on it, it’s supposed to be pushing
                              the furthest possibilities. I will be the leader of a
                              company that ends up being worth billions of dollars,
                              because I got the answers. I understand culture. I am
                              the nucleus.
                            </p>
                          )
                        }
                      ]}
                    />
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
        </div>

      </div>




    </div>
  );
}
