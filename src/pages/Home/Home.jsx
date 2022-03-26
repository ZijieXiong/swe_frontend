import React from 'react';
import {useHistory} from 'react-router-dom';
import image1 from '../../images/0.jpg'
import image2 from '../../images/1.jpg'
import image3 from '../../images/2.jpg'
import image4 from '../../images/3.jpg'


export default function Home(){
  const history = useHistory();

  function navigateToPage(path) {
    history.push(path);
  }

  return (
    <>
    <div className="content">
      <img id = "mainimg" src = {image1} />
      <div id="container"></div>
      <h1 className = "title"> Pancakes</h1>
      <h2 className = "secondtitle"> New York </h2> 

      <div className = "space">
      </div>
      <div className = "blue"> 
      </div>
      <div className = "welcomemessage">
        <h1> Welcome to our </h1>
        <h1 id = "move_right"> restaurant! </h1>
      </div>
      <div className = "blue2"> 
      </div>

      <div className = "grid">
      <button
        onClick={() => navigateToPage('/sign-up')}
        className="page-button-group1"
      >
        Sign up
      </button>
      <button
        onClick={() => navigateToPage('/logIn')}
        className="page-button-group2"
      >
        Log in
      </button>
      <button
        onClick={() => navigateToPage('/food_menu')}
        className="page-button-group1"
      >
        Make a Reservation 
      </button>
      </div>

      <h3 className = "text"> Restaurant focused on serving soft, delicate pancakes, with syrup, butter, chocolate lava, or your favorite fruits.
      </h3>

      <div class="gallery">
          <img src={image2} alt="image1" width="600" height="400" />
      </div>
      <div class="gallery">
          <img src={image3} alt="image2" width="600" height="400" />
      </div>
      <div class="gallery">
          <img src={image4} alt="image3" width="600" height="400" />
      </div>
    


    </div>

    </>
  );
};

