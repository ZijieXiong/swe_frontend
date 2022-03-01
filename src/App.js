import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './pages/Home/Home';
import Rooms from './pages/Rooms/Rooms';
import Users from './pages/Users/Users';
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import Food_Menu from './pages/Food_Menu/Food_Menu';
import './App.css';
import Drink_Menu from './pages/Drink_Menu/Drink_Menu';
import LogIn from './pages/LogIn/LogIn';

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
            <Route exact={true} path={'/food_menu'}>
              <Food_Menu />
            </Route>
            
            <Route exact={true} path={'/users'}>
              <Users />
            </Route>
          </Switch>

      </div>
      <Footer />
      <Route exact={true} path={'/log_in'}>
              <LogIn />
            </Route>
      </>
  );
}

export default App;
