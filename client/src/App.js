// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Signup}/>
        <Route exact path="/login" component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
