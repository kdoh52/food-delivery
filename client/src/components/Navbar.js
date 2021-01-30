import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography, Toolbar, IconButton, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

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
    }
  }));


export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.navbar} position="static">
                <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Food Delivery App
                </Typography>
                {/* <Button color="inherit">Register</Button>
                <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
        </div>
    )
}
