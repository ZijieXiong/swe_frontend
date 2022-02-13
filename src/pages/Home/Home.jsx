import React from 'react';
import {useHistory} from 'react-router-dom';

export default function Home(){
  const history = useHistory();

  function navigateToPage(path) {
    history.push(path);
  }

  return (
    <div className="content">
      <ul>
      <li><a class="active" href="https://www.google.com/">Home</a></li>
      <li><a href="#news">Food menu</a></li>
      <li><a href="#contact">Drink Menu</a></li>
      <li><a href="www.google.com">Delivery!</a></li>
     </ul>
     



      <h1> Pancake Flippers </h1>
      <h1>🤗 Welcome!</h1>
      <button
        onClick={() => navigateToPage('/rooms')}
        className="page-button"
      >
        Food Menu
      </button>
      <button
        onClick={() => navigateToPage('/users')}
        className="page-button"
      >
        Drink Menu
      </button> 
    </div>
  );
};

