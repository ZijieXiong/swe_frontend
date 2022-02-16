import React from 'react';
import {useHistory} from 'react-router-dom';
import NavBar from '../../components/Navbar'
export default function Home(){
  const history = useHistory();

  function navigateToPage(path) {
    history.push(path);
  }

  return (
  
    <div className="content">

      <h1> Pancake Flippers </h1>
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
    </div>
  );
};

