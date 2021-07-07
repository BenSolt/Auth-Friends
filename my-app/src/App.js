import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';

import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';
import AddFriendForm from './components/AddFriendForm';

function App() {
  return (
    <div className="App">
    <Link to="/login">Login</Link>
    <Link to="/protected">Protected Page</Link>
   {/* <Login/> */}
    <Switch>
          <Route path="/login" component={Login} />
          
          <PrivateRoute path="/protected">
            <AddFriendForm/>
            <Friends />
          </PrivateRoute>
         
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
