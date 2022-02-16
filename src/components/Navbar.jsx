import React from 'react';
import Drink_Menu from '../pages/Drink_Menu/Drink_Menu';
import { useState, useEffect } from 'react';
import axios from 'axios' //to use axios run "npm install axios"  in terminal

function NavBar() {


    const [drinkitems, setDrinkItems] = useState(undefined)
    const [error, setError] = useState('')

    useEffect(() => {
        axios.get('https://swe-temp.herokuapp.com/drink_menu/list')
        .then((res) => {
            if (res.data) {
                console.log(res)
                setDrinkItems(res.data);
            }
        })      
       
        .catch((err) => {
            console.log(err);
            setError(err.toString());
        })
    }, [])


    return (
        <div>
            <nav>
                <div className = "logo">Pancakes</div>
                <ul className = "nav-links">
                    <li><a href= "https://www.google.com/"> Food menu </a></li>
                    <li><a className = "Drink menu">Drink menu</a></li>
                    <li><a> Order Now!</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;