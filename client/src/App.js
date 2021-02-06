// import logo from './logo.svg';
import React, { useState, useMemo } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import History from "./components/History";
import NewOrder from "./components/NewOrder";
import { UserContext } from "./contexts/UserContext";
import { Provider } from 'react-redux';

import store from './store'

function App() {
  // const [user, setUser] = useState();

  // const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Signup}/>
          {/* <UserContext.Provider value={value}> */}
            <Route exact path="/login" component={Login}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/history" component={History}/>
            <Route exact path="/order" component={NewOrder}/>
          {/* </UserContext.Provider> */}
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
