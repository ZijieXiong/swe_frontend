import React from 'react'
//import {useEffect} from 'react'
//Utilizing foodmenu_css 
import axios from 'axios' //to use axios run "npm install axios"  in terminal
import { useState, useEffect } from 'react';


export default function Drink_Menu({drinkName}) {
    const [drinkitems, setDrinkItems] = useState(undefined)
    const [error, setError] = useState('')
    
    useEffect(() => {
        fetch('https://swe-temp.herokuapp.com/drink_menu/list',{
            mode:"no-cors"
        })
        .then((res) => {
            return res.json()
            // if (res.data) {
            //     console.log(res)
            //     setDrinkItems(res.data);
            // }
        }).then(data=>console.log("data", data)).catch((err) => {
            console.log(err);
            setError(err.toString());
        })
    }, [])
    
    
    return (
        <div>
<h1>this is drink </h1>
            {/* <p>{drinkName}</p> */}
        </div>
    )
}
