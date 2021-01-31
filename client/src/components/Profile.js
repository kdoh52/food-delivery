import React, { useContext, useEffect } from "react";
import { UserContext } from '../contexts/UserContext';
import { TextField, Typography, Select, MenuItem, Button, InputLabel, FormControl } from "@material-ui/core";
import Navbar from "./Navbar";


export default function Profile() {
    const { user, setUser } = useContext(UserContext);
    let userData = JSON.parse(user)

    useEffect(() => {
        userData = JSON.parse(user)
        console.log(userData)
    }, [])

    return (
        <div>
            <Navbar/>
            <Typography variant="h2">
                {userData.firstName}'s Profile
            </Typography>
            <Typography variant="h2">
                email: {userData.email}
            </Typography>
            <Typography variant="h2">
                phone: {userData.phone}
            </Typography>
        </div>
    )
}
