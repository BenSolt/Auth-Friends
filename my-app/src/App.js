import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
    <Link to="/login">Login</Link>
    <Link to="/protected">Protected Page</Link>
   
    <Switch>
          <PrivateRoute path="/protected">
            <GasPrices />
          </PrivateRoute>
          <Route path="/login" component={Login} />
          <Route
            render={() => {
              return <img src="https://http.cat/404" />;
            }}
          />
        </Switch>
     
    </div>
  );
}

export default App;
