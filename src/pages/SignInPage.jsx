import React, { Suspense, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import * as config from "config.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomParticles from "components/CustomParticiles/CustomParticles";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';
import { Link, Redirect, Route, useRouteMatch } from "react-router-dom";
import Axios from 'axios';
const useStyles = makeStyles(styles);


export default function LoginPage(props) {


  const match = useRouteMatch();

  //hook state
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [user, setUser] = React.useState({
    username: "",
    password: "",
    accessToken: "",
    message: "",

  })
  const [userLoginFb, setUserLoginFb] = React.useState({
    id: "",
    firstname: "",
    lastname: "",
    gender: "",
    birthday: "",
    picture: "",
    email: ""
  })
  const [userLoginGg, setUserLoginGg] = React.useState({
    id: "",
    firstname: "",
    lastname: "",
    picture: "",
    email: ""
  })

  function submitHandler(e) {
    e.preventDefault();
    Axios.post(`${config.API_URL}/accounts/login`, user)
      .then(response => {
        console.log(response.data)
        if (response.data.message === "Successfully")
          setUser({ ...user, accessToken: response.data.items.accessToken })
        else
          console.log(response.data.message)
        setUser({ ...user, message: response.data.message })
      })
      .catch(error => {
        console.log(error)
      })

  }

  //const [error, serError] = React.useState("");
  //
  // const login = details => {
  //   console.log(details);
  // }
  // const Logout = () => {
  //   console.log("Logout");
  // }

  const responseFacebook = response => {
    console.log(response)
    setUserLoginFb({
      id: response.id,
      firstname: response.first_name,
      lastname: response.last_name,
      gender: response.gender,
      picture: response.picture.data.url,
      email: response.email,

    })
  }
  useEffect(() => {
    Axios.post(`${config.API_URL}/accounts/login-facebook`, userLoginFb)
      .then(response => {
        console.log(response.data)
        if (response.data.message === "Successfully") {

          setUser({ ...user, accessToken: response.data.items.accessToken })
        } else {
          console.log(response.data.message)
          setUser({ ...user, message: response.data.message })
        }
      })
      .catch(error => {
        console.log(error)
      })
  }, [userLoginFb]);
  const responseGoogle = (respons) => {
    console.log(respons)
    setUserLoginGg({
      id: respons.profileObj.googleId,
      firstname: respons.profileObj.familyName,
      lastname: respons.profileObj.givenName,

      picture: respons.profileObj.imageUrl,
      email: respons.profileObj.email,

    })
  }
  useEffect(() => {
    Axios.post(`${config.API_URL}/accounts/login-google`, userLoginGg)
      .then(response => {
        console.log(response.data)
        if (response.data.message === "Successfully") {

          setUser({ ...user, accessToken: response.data.items.accessToken })
        }


        else
          console.log(response.data.message)
        setUser({ ...user, message: response.data.message })
      })
      .catch(error => {
        console.log(error)
      })
  }, [userLoginGg]);
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>

      <Suspense fallback={<div>Loading...</div>}>
        {(user.accessToken !== "") ? (
          <Redirect to={{
            pathname: "/",
            state: { accessToken: user.accessToken }
          }} />
        ) : (
          <div>
            <Header

              absolute
              color="transparent"
              brand="Music Social Network"
              {...rest}
            />
            <CustomParticles image={require("assets/img/bgpc.jpg")}>
            </CustomParticles>
            <div
              className={classes.pageHeader}
              style={{

                backgroundSize: "cover",
                backgroundPosition: "center center"
              }}
            >
              <div className={classes.container}>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={4}>
                    <Card className={classes[cardAnimaton]}>
                      <form className={classes.form}>
                        <CardHeader color="pacific" className={classes.cardHeader}>
                          <h4>Login</h4>
                          <div className={classes.socialLine}>

                            <FacebookLogin
                              appId="428202575028941"

                              callback={responseFacebook}
                              fields="id,name,first_name,last_name,middle_name,picture,gender,birthday,email"
                              render={renderProps => (
                                <Button
                                  justIcon
                                  target="_blank"
                                  color="transparent"
                                  onClick={e => renderProps.onClick()}
                                >
                                  <i className={"fab fa-facebook"} />
                                </Button>
                              )}
                            />
                            <GoogleLogin
                              clientId="988060389475-ekg1vusjst9a3k94dvv1s4kvioetltr7.apps.googleusercontent.com"
                              render={renderProps => (
                                <Button onClick={renderProps.onClick} disabled={renderProps.disabled} justIcon
                                  href="#pablo"
                                  target="_blank"
                                  color="transparent">
                                  <i className={"fab fa-google-plus-g"} />
                                </Button>
                              )}
                              buttonText="Login"
                              onSuccess={responseGoogle}
                              onFailure={responseGoogle}
                              cookiePolicy={'single_host_origin'}



                            />


                          </div>
                        </CardHeader>
                        <p className={classes.divider}>Or Be Classical</p>
                        <CardBody>

                          <CustomInput
                            onChange={e => setUser({ ...user, username: e.target.value })}
                            value={user.username}
                            labelText="User Name..."
                            id="username"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              type: "text",
                              endAdornment: (
                                <InputAdornment position="end">
                                  <People className={classes.inputIconsColor} />
                                </InputAdornment>
                              )
                            }}

                          />

                          <CustomInput
                            onChange={e => setUser({ ...user, password: e.target.value })}
                            value={user.password}
                            labelText="Password"
                            id="pass"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              type: "password",
                              endAdornment: (
                                <InputAdornment position="end">
                                  <Icon className={classes.inputIconsColor}>
                                    lock_outline
                            </Icon>
                                </InputAdornment>
                              ),
                              autoComplete: "off"
                            }}
                          />
                        </CardBody>
                        <p className={classes.divider}>{user.message}</p>
                        <CardFooter className={classes.cardFooter}>
                          <Button simple color="primary" size="lg" onClick={submitHandler}>
                            Get started
                          </Button>
                          <Link to={"/signup"} className={classes.link}>
                            <Button simple color="primary" size="lg">
                              Sign up
                            </Button>


                          </Link>

                        </CardFooter>
                      </form>
                    </Card>
                  </GridItem>
                </GridContainer>
              </div>
              <Footer whiteFont />
            </div>
          </div>
        )}
      </Suspense>


    </div>


  );
}
