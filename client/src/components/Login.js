import React, { useState, useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Typography, Select, MenuItem, Button, InputLabel, FormControl } from "@material-ui/core";
import API from '../utils/API'
import { useHistory } from "react-router-dom";
import Auth from "../Auth";
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

export default function Login() {
    const classes = useStyles();
    // const [role, setRole] = useState('');
    const [formObject, setFormObject] = useState([]);
    const history = useHistory();
    // const { user, setUser } = useContext(UserContext);


    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormObject({ ...formObject, [name]: value });
    }

    function handleSubmit(event) {
        event.preventDefault();

        console.log(formObject)
        // API.getUsers()
        if (formObject.password && formObject.email) {
            API.loginUser({
              password: formObject.password,
              email: formObject.email,
            })
              .then((res) => {
                // console.log(res.data.user);
                console.log(JSON.stringify(res.data.user.user));
                console.log(formObject);
                // save the token
                Auth.authenticateUser(res.data.token);
                // localStorage.setItem("user", JSON.stringify(res.data.user));
                // setUser(res.data.user.user)
                // setUser(JSON.stringify(res.data.user.user))

                history.push("/profile");
              })
              .catch((err) => {
                console.log(err);
              });
        }
    };

    return (
        <div>
            {/* <Navbar /> */}
            <div className={classes.container}>
                <div className={classes.child}>
                    <Typography className={classes.title} variant='h2'>
                        Log In
                    </Typography>
                    <br />
                    <form>
                        <TextField
                        className={classes.field}
                        margin="normal"
                        required
                        id="email"
                        onChange={handleInputChange}
                        name="email"
                        label="Email"
                        />
                        <br/>
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
                        <Button onClick={handleSubmit} className={classes.button} variant="contained">Login</Button>
                    </form>
                    <Typography className={classes.sidenote} variant='p'>
                        Create an account?
                        <br/>
                        <a href='/'>Sign up</a>
                    </Typography>
                </div>
            </div>
        </div>
    )
}
