import React from 'react';
import logo from "./logo.png"
import { Counter } from './features/counter/Counter';
import Homepage from "./features/components/Homepage"
import SettingsHomePage from "./features/components/SettingsHomePage"
import MessagesHomePage from "./features/components/MessagesHomePage"
import Profile from "./features/components/Profile"
import Charts from "./features/components/Charts"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/homepage">
          <Homepage />
        </Route>
        <Route path="/Settings">
          <SettingsHomePage />
        </Route>
        <Route path="/Messages/">
          <MessagesHomePage />
        </Route>
        <Route path="/Profile/">
          <Profile />
        </Route>
        <Route path="/Charts/">
          <Charts />
        </Route>
        <Route path="/Services/">
          <Profile />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
