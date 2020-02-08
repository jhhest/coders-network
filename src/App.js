import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import Login from "./pages/login/Login";
import Posts from "./pages/posts/Posts";
import Developers from "./pages/Developers"
import { MenuListComponent } from "./components/menulistComponent/MenuListComponent";

// import { MuiThemeProvider } from "@material-ui/core/styles";
import clsx from "clsx";
import {
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  Divider,
  IconButton,
  Container
} from "@material-ui/core";

import { StylesProvider } from "@material-ui/styles";

import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon
} from "@material-ui/icons";

import styles from "./App.module.css";
export default class App extends Component {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      // <MuiThemeProvider>
      <Fragment>
        <StylesProvider injectFirst>
          <AppBar
            className={clsx(styles.appBar, {
              [styles.appBarShift]: open
            })}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                edge="start"
                className={clsx(styles.menuButton, open && styles.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                Coders Network
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            className={styles.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: styles.drawerPaper
            }}
          >
            <div className={styles.drawerHeader}>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <MenuListComponent />
          </Drawer>
          <main
            className={clsx(styles.content, {
              [styles.contentShift]: open
            })}
          >
            <div className={styles.drawerHeader} />
            <Container fixed>
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/about-us" component={AboutUs} />
                <Route path="/posts" component={Posts} />
                <Route path="/developers" component={Developers} />
                <Route exact path="/" component={HomePage} />
              </Switch>
            </Container>
          </main>
        </StylesProvider>
      </Fragment>
      // </MuiThemeProvider>
    );
  }
}
