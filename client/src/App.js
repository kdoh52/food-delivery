// import logo from './logo.svg';
import React, { useState, useMemo } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import History from "./components/History";
import { UserContext } from "./contexts/UserContext";


function App() {
  const [user, setUser] = useState();

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Signup}/>
        <UserContext.Provider value={value}>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/history" component={History}/>
        </UserContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
