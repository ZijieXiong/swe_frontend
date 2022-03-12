import React from 'react';
import { Link } from 'react-router-dom';


function NavBar() {

    return (
        <div>
            <nav>
                <div className = "logo">
                    <Link to ="/">Pancakes</Link>
                    </div>
                <ul className = "nav-links">
                    <Link to="food_menu"><li>Food Menu</li></Link>
                    <Link to="drink_menu"><li>Drink Menu</li></Link>
                    <Link to="Order"><li>Order</li></Link>
                    <Link to= "About"><li> About Us</li> </Link>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
