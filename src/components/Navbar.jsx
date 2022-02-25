import React from 'react';
import { Link } from 'react-router-dom';
import Drink_Menu from '../pages/Drink_Menu/Drink_Menu';


function NavBar() {


   



    return (
        <div>
            <nav>
                <div className = "logo">
                    <Link to ="/"> Pancakes </Link>
                    </div>
                <ul className = "nav-links">
                    <Link to="food_menu" ><li>Food menu </li></Link>
                    <Link to="drink_menu"><li>Drink menu</li></Link>
                    <li><a> Order Now!</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;