import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Typography, Select, MenuItem, Button, InputLabel, FormControl } from "@material-ui/core";
import API from '../utils/API'
import Navbar from './Navbar';

const useStyles = makeStyles((theme) => ({
    formControl: {
    //   margin: theme.spacing(1),
      minWidth: 167,
      marginTop: '5px',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    title: {
        fontSize: 40
    },
    sidenote: {
        // marginTop: '100px',
        fontSize: 15
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        // margin: '0 auto',
        backgroundColor: '#25ba41',
        height: '100vh'
    },
    child: {
        // alignItems: 'center',
        // margin: '0 auto',
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white',
        width: '200px',
        padding: 50,
        paddingTop: 40,
        borderRadius: 20,
        margin: 0,
        position: 'absolute',
        top: '50%',
        msTransform: 'translateY(-50%)',
        transform: 'translateY(-50%)',
    },
    button: {
        color: 'white',
        backgroundColor: 'black',
        marginTop: '25px',
        marginBottom: '15px',
        '&:hover': {
            backgroundColor: "gray",
        },
    },
    field: {
        marginTop: '8px'
    }
}));

export default function Signup() {
    const classes = useStyles();
    const [role, setRole] = useState('');
    const [formObject, setFormObject] = useState([]);
    const history = useHistory();


    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormObject({ ...formObject, [name]: value });
    }

    function handleRoleChange(event) {
        setRole(event.target.value);
        setFormObject({ ...formObject, 'role': role });
    };

    function handleSubmit(event) {
        event.preventDefault();

        console.log(formObject)
        console.log(role)
        setFormObject({ ...formObject, 'role': role }, registerUser(formObject));
        // console.log(formObject)
        // registerUser(formObject);
    };

    function registerUser(userData) {
        // console.log(userData)
        if (userData.firstName && userData.lastName && userData.email && userData.password && userData.phone && userData.role) {
            API.saveUser(userData)
            .then(history.push("/login"))
            .catch((err) => console.log(err));
        } else {
            console.log('reject')
        }
    }

    return (
        <div>
            {/* <Navbar /> */}
            <div className={classes.container}>
                <div className={classes.child}>
                    <Typography className={classes.title} variant='h2'>
                        Sign up
                    </Typography>
                    <br />
                    <form>
                        <TextField
                        //   variant="filled"
                        className={classes.field}
                        margin="normal"
                        required
                        //   fullWidth
                        id="firstName"
                        onChange={handleInputChange}
                        name="firstName"
                        //   autoFocus
                        label="First Name"
                        />
                        <br/>
                        <TextField
                        className={classes.field}
                        margin="normal"
                        required
                        id="lastName"
                        onChange={handleInputChange}
                        name="lastName"
                        label="Last Name"
                        />
                        <br/>
                        <TextField
                        className={classes.field}
                        margin="normal"
                        required
                        id="email"
                        onChange={handleInputChange}
                        name="email"
                        label="Email"
                        />
                        <TextField
                        className={classes.field}
                        margin="normal"
                        required
                        id="password"
                        onChange={handleInputChange}
                        name="password"
                        type='password'
                        label="Password"
                        />
                        <br/>
                        <TextField
                        className={classes.field}
                        margin="normal"
                        required
                        id="phone"
                        onChange={handleInputChange}
                        name="phone"
                        label="Phone"
                        />
                        <br/>
                        <FormControl className={classes.formControl}>
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
                        </FormControl>
                        <Button onClick={handleSubmit} className={classes.button} variant="contained">Sign up</Button>
                    </form>
                    <Typography className={classes.sidenote} variant='p'>
                        Already have an account? 
                        <br/>
                        <a href='/login'>Log in</a>
                    </Typography>
                </div>
            </div>
        </div>
    )
}
