import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './pages/Home/Home';
import Rooms from './pages/Rooms/Rooms';
import Users from './pages/Users/Users';
import NavBar from './components/Navbar'
import Food_Menu from './pages/Food_Menu/Food_Menu';
import './App.css';
import Drink_Menu from './pages/Drink_Menu/Drink_Menu';

function App() {
  return (
    <>
      <div className="navbar">
      <NavBar />
      </div>
    
      <div className="content">

          <Switch>
            <Route exact={true} path={'/'}>
              <Home />
            </Route>
            <Route exact={true} path={'/rooms'}>
              <Rooms />
            </Route>
            <Route exact={true} path={'/drink_menu'}>
              <Drink_Menu />
            </Route>
           
            <Route exact={true} path={'/users'}>
              <Users />
            </Route>
          </Switch>

      </div>
      </>
  );
}

export default App;
