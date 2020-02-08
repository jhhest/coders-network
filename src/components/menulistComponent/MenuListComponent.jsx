import React, { Component } from "react";

import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

import { Link } from "react-router-dom";

import {
  AccountCircle as LoginIcon,
  Home as HomeIcon,
  SpeakerNotes as PostIcon,
  RecentActors as DevelopersIcon
} from "@material-ui/icons";

import Styling from "./MenuListcomponent.module.css";

export class MenuListComponent extends Component {
  render() {
    return (
      <List>
        <Link to="/">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>

        <Link to="/login">
          <ListItem button>
            <ListItemIcon>
              <LoginIcon />
            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItem>
        </Link>

        <Link to="/posts">
          <ListItem button>
            <ListItemIcon>
              <PostIcon />
            </ListItemIcon>
            <ListItemText primary="Posts" />
          </ListItem>
        </Link>

        <Link to="/developers">
          <ListItem button>
            <ListItemIcon>
              <DevelopersIcon />
            </ListItemIcon>
            <ListItemText primary="Developers" />
          </ListItem>
        </Link>
      </List>
    );
  }
}

export default MenuListComponent;
