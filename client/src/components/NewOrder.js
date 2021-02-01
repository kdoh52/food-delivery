import React, { useState, useContext, useEffect } from "react";
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
    formContainer: {
        marginTop: '120px'
    }
}));

export default function Profile() {
    const classes = useStyles();
    const { user, setUser } = useContext(UserContext);
    const [formObject, setFormObject] = useState([]);
    let userData = JSON.parse(user)

    useEffect(() => {
        userData = JSON.parse(user)
        console.log(userData)
    }, [])

    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormObject({ ...formObject, [name]: value });
    }

    function handleSubmit(event) {
        event.preventDefault();

        console.log(formObject)
        // console.log(role)
        // setFormObject({ ...formObject, 'role': role }, registerUser(formObject));
        // console.log(formObject)
        // registerUser(formObject);
    };

    return (
        <div>
            <Navbar/>
            <div className={classes.container}>
                <div className={classes.child}>
                    <Typography className={classes.heading} variant="h2">
                        Order some food
                    </Typography>
                    <br/>
                    <Typography className={classes.details} variant="h2">
                        Let's eat, {userData.firstName}!
                    </Typography>
                    <br/>
                </div>
                <div className={classes.formContainer}>
                    <form>
                        <TextField
                        //   variant="filled"
                        className={classes.field}
                        margin="normal"
                        required
                        //   fullWidth
                        id="foodLocation"
                        onChange={handleInputChange}
                        name="foodLocation"
                        //   autoFocus
                        label="Food location"
                        />
                        <br/>
                        <TextField
                        className={classes.field}
                        margin="normal"
                        required
                        id="order"
                        onChange={handleInputChange}
                        name="order"
                        label="Order"
                        />
                        <br/>
                        <TextField
                        className={classes.field}
                        margin="normal"
                        required
                        id="address"
                        onChange={handleInputChange}
                        name="address"
                        label="Address"
                        />
                        <br/>
                        {/* <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Role*</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                required
                                id="role"
                                value={role}
                                onChange={handleRoleChange}
                                name="role"
                                label="Role"
                                >
                                <MenuItem value="ordering">Ordering</MenuItem>
                                <MenuItem value="delivering">Delivering</MenuItem>
                            </Select>
                        </FormControl> */}
                        <Button onClick={handleSubmit} className={classes.button} variant="contained">Submit</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
