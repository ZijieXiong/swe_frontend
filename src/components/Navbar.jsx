import React from 'react';



function NavBar() {
    return (
        <div>
            <nav>
                <div className = "logo">Pancakes</div>
                <ul className = "nav-links">
                    <li><a> Food menu </a></li>
                    <li><a> Drink menu </a></li>
                    <li><a> Order Now!</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;