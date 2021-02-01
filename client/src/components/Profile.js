import React, { useContext, useEffect } from "react";
import { UserContext } from '../contexts/UserContext';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Typography, Select, MenuItem, Button, InputLabel, FormControl } from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: 50
    },
    details: {
        fontSize: 20
    },
    container: {
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        marginTop: '60px',
        padding: '50px'
    },
    child: {
        margin: 0,
        position: 'absolute',
    },
}));

export default function Profile() {
    const classes = useStyles();
    const { user, setUser } = useContext(UserContext);
    let userData = JSON.parse(user)

    useEffect(() => {
        userData = JSON.parse(user)
        console.log(userData)
    }, [])

    return (
        <div>
            <Navbar/>
            <div className={classes.container}>
                <div className={classes.child}>
                    <Typography className={classes.heading} variant="h2">
                        {userData.firstName}'s Profile
                    </Typography>
                    <br/>
                    <Typography className={classes.details} variant="h2">
                        email: {userData.email}
                    </Typography>
                    <br/>
                    <Typography className={classes.details} variant="h2">
                        phone: {userData.phone}
                    </Typography>
                </div>
            </div>
        </div>
    )
}
