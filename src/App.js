import React from 'react';
import './App.css';
import 'react-multi-carousel/lib/styles.css';
import "@reach/dialog/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Pdp from '../src/sitePages/pdp';
import Home from './home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {

    return (

      <Router>
      <div>
        <Switch>
          <Route path="/pdp">
            <Pdp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

    );
  }
}

export default App;
