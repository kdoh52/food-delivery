import React, { useContext, useEffect } from "react";
import { UserContext } from '../contexts/UserContext';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Typography, Select, MenuItem, Button, InputLabel, FormControl } from "@material-ui/core";
import Navbar from "./Navbar";

import { connect } from 'react-redux';
import { fetchUsers } from '../actions/userActions'

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

// export default function Profile() {
//     const classes = useStyles();
//     const { user, setUser } = useContext(UserContext);
//     let userData = JSON.parse(user)

//     useEffect(() => {
//         userData = JSON.parse(user)
//         console.log(userData)
//     }, [])

//     return (
//         <div>
//             <Navbar/>
//             <div className={classes.container}>
//                 <div className={classes.child}>
//                     <Typography className={classes.heading} variant="h2">
//                         {userData.firstName}'s Profile
//                     </Typography>
//                     <br/>
//                     <Typography className={classes.details} variant="h2">
//                         email: {userData.email}
//                     </Typography>
//                     <br/>
//                     <Typography className={classes.details} variant="h2">
//                         phone: {userData.phone}
//                     </Typography>
//                 </div>
//             </div>
//         </div>
//     )
// }

class Profile extends React.Component {
    // const { user, setUser } = useContext(UserContext);
    // let userData = JSON.parse(user)

    // useEffect(() => {
    //     userData = JSON.parse(user)
    //     console.log(userData)
    // }, [])
    componentWillMount() {
        this.props.fetchUsers();
    }
    componentDidUpdate() {
        console.log(this.props.users)
    }
    render() {
        // const classes = useStyles();
        const users = this.props.users.map(user => (
            <div key={user._id}>
                <h3>{user.firstName}</h3>
                <h3>{user.lastName}</h3>
                <h3>{user.email}</h3>
            </div>
        ))
        return (
            <div>
                <Navbar/>
                <div>
                {/* <div className={classes.container}> */}
                    <div>
                        {users}
                    {/* <div className={classes.child}> */}
                        <Typography variant="h2">
                        {/* <Typography className={classes.heading} variant="h2"> */}
                            's Profile
                        </Typography>
                        <br/>
                        <Typography variant="h2">
                        {/* <Typography className={classes.details} variant="h2"> */}
                            email: 
                        </Typography>
                        <br/>
                        <Typography variant="h2">
                        {/* <Typography className={classes.details} variant="h2"> */}
                            phone: 
                        </Typography>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = state => ({
    users: state.users.items
})

export default connect(mapStatetoProps, { fetchUsers })(Profile)