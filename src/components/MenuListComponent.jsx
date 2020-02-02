import React, { Component } from "react";

import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

import {
  AccountCircle as LoginIcon,
  Home as HomeIcon,
  SpeakerNotes as PostIcon,
  RecentActors as DevelopersIcon
} from "@material-ui/icons";

export class MenuListComponent extends Component {
  render() {
    return (
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LoginIcon />
          </ListItemIcon>
          <ListItemText primary="Login" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PostIcon />
          </ListItemIcon>
          <ListItemText primary="Posts" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DevelopersIcon />
          </ListItemIcon>
          <ListItemText primary="Developers" />
        </ListItem>
      </List>
    );
  }
}

export default MenuListComponent;
