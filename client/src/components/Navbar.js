import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { AppBar, Typography, Toolbar, IconButton, Button, Box, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import MobileLeftMenuSlider from "@material-ui/core/Drawer";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    navbar: {
        backgroundColor: 'black'
    },
    sliderMenu: {
      background: "#25ba41",
      width: "200px",
      color: "white",
      height: "100%",
    },
    navtitle: {
      fontSize: '25px'
    }
  }));
  const menuItems = [
    {
      // listIcon: <AccountCircle />,
      listText: "Profile",
      listPath: "/profile",
    },
    {
      // listIcon: <AccountCircle />,
      listText: "New order",
      listPath: "/order",
    },
    {
      // listIcon: <AccountCircle />,
      listText: "Order history",
      listPath: "/history",
    },
    {
      // listIcon: <LockOpen />,
      listText: "Logout",
      listPath: "/login",
    },
];

export default function Navbar() {
    const classes = useStyles();
    
    const [state, setState] = useState({
      left: false,
    });
    const toggleSlider = (slider, open) => () => {
      setState({ ...state, [slider]: open });
    };
    const sideList = (slider) => {
      return (
        <Box
          className={classes.sliderMenu}
          component="div"
          onClick={toggleSlider(slider, false)}
        >
          <Divider />
          <List>
            {menuItems.map((items, key) => (
              <ListItem button key={key} component={Link} to={items.listPath}>
                <ListItemIcon style={{ color: "white" }}>
                  {items.listIcon}
                </ListItemIcon>
                <ListItemText primary={items.listText} />
              </ListItem>
            ))}
          </List>
        </Box>
      );
    };

    return (
        <div className={classes.root}>
            {/* <AppBar className={classes.navbar} position="static">
                <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Food Delivery App
                </Typography>
                </Toolbar>
            </AppBar> */}
            <Box component="nav">
              <AppBar position="fixed" style={{ background: "black" }}>
                <Toolbar>
                  <IconButton onClick={toggleSlider("left", true)}>
                    <MenuIcon style={{ color: "white" }} />
                  </IconButton>
                  <Typography
                    className={classes.navtitle}
                    variant="h2"
                    style={{ color: "white", marginLeft: "10px" }}
                  >
                    Food Delivery App
                  </Typography>
                  <MobileLeftMenuSlider
                    anchor="left"
                    open={state.left}
                    onClose={toggleSlider("left", false)}
                  >
                    {sideList("left")}
                  </MobileLeftMenuSlider>
                </Toolbar>
              </AppBar>
            </Box>
        </div>
    )
}
