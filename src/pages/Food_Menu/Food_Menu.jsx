import React from 'react'
//import {useEffect} from 'react'
//Utilizing foodmenu_css 
import axios from 'axios' //to use axios run "npm install axios"  in terminal
import { useState, useEffect } from 'react';


export default function Food_Menu({drinkName}) {
    const [fooditems, setFoodItems] = useState(undefined)
    const [error, setError] = useState('')
    
    useEffect(() => {
        axios.get('https://swe-temp.herokuapp.com/food_menu/list')
        .then((res) => {
            if (res.data) {
                console.log(res)
                setFoodItems(res.data);
            }
        })      
       
        .catch((err) => {
            console.log(err);
            setError(err.toString());
        })
    }, [])
    
    
    return (
        <div>
<h1>this is food </h1>
           {/* <p>{foodName}</p> */}
        </div>
    )
}
