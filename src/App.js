import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './pages/Home/Home';
import Rooms from './pages/Rooms/Rooms';
import Users from './pages/Users/Users';
import NavBar from './components/Navbar'
import './App.css';

function App() {
  return (
    <>
      <div className="navbar">
      <NavBar />
      </div>
    
      <div className="content">
        <Router>
          <Switch>
            <Route exact={true} path={'/'}>
              <Home />
            </Route>
            <Route exact={true} path={'/rooms'}>
              <Rooms />
            </Route>
            <Route exact={true} path={'/users'}>
              <Users />
            </Route>
          </Switch>
        </Router>
      </div>
      </>
  );
}

export default App;
