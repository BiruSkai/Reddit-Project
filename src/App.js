
import { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Main } from './components/main/Main';
import { Login } from './components/login/Login';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login}/> 
        <Route path="/main" component={Main}/>
      </Switch>
    </Router>
  )
}

export default App;
