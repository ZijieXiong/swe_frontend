import React from 'react';
import Drink_Menu from '../pages/Drink_Menu/Drink_Menu';


function NavBar() {
    return (
        <div>
            <nav>
                <div className = "logo">Pancakes</div>
                <ul className = "nav-links">
                    <li><a href= "https://www.google.com/"> Food menu </a></li>
                    <li><a>Drink menu </a></li>
                    <li><a> Order Now!</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;