import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Typography, Select, MenuItem, FormHelperText, InputLabel, FormControl } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    formControl: {
    //   margin: theme.spacing(1),
      minWidth: 167,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

export default function Signup() {
    const classes = useStyles();
    const [role, setRole] = useState('Ordering');

    return (
        <div>
            <Typography variant='h2'>
                Sign up
            </Typography>
            <form>
                <TextField
                //   variant="filled"
                margin="normal"
                required
                //   fullWidth
                id="firstName"
                //   onChange={handleInputChange}
                name="firstName"
                //   autoFocus
                label="First Name"
                />
                <br/>
                <TextField
                margin="normal"
                required
                id="lastName"
                name="lastName"
                label="Last Name"
                />
                <br/>
                <TextField
                margin="normal"
                required
                id="email"
                name="email"
                label="Email"
                />
                <br/>
                <TextField
                margin="normal"
                required
                id="phone"
                name="phone"
                label="Phone"
                />
                <br/>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        required
                        // value={role}
                        // onChange={handleChange}
                        >
                        <MenuItem value="ordering">Ordering</MenuItem>
                        <MenuItem value="delivering">Delivering</MenuItem>
                    </Select>
                </FormControl>
            </form>
        </div>
    )
}
