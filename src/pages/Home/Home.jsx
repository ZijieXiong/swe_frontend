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
      <img id="pancake0" src="../../images/0.jpg" alt="Pancake 0"></img>
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
      <p>Restaurant focused on serving soft, delicate pancakes with butter, syrup, chocolate lava, or your favorite fruits.</p>
      <img id="pancake0" src="../../images/1.jpg" alt="Pancake 1"></img>
      <img id="pancake0" src="../../images/2.jpg" alt="Pancake 2"></img>
      <img id="pancake0" src="../../images/3.jpg" alt="Pancake 3"></img>
    </div>
    </>
  );
};

