import React from 'react';
import {useHistory} from 'react-router-dom';
import NavBar from '../../components/Navbar'
export default function Home(){
  const history = useHistory();

  function navigateToPage(path) {
    history.push(path);
  }

  return (
    <>
    <h1 id = "title"> 🥞 Pancake Flippers 🥞</h1>
    <div className="content">

      <h1>🤗 Welcome!</h1>
      <button
        onClick={() => navigateToPage('/users')}
        className="page-button"
      >
        Drink Menu
      </button> 
      <button 
        onClick = {() => navigateToPage('/rooms')}
        className= "page-button"
      >
        Delivery 
      </button>
      <button 
        onClick = {() => navigateToPage('/rooms')}
        className= "page-button"
      >
        Sign up
      </button>
      <button 
        onClick = {() => navigateToPage('/rooms')}
        className= "page-button"
      >
        Sign in
      </button>
      <button 
        onClick = {() => navigateToPage('/rooms')}
        className= "page-button"
      >
        Start to order 
      </button>
    </div>
    </>
  );
};

