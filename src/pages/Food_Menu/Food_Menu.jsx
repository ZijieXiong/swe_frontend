import React from 'react'
//import {useEffect} from 'react'
//Utilizing foodmenu_css 
import axios from 'axios' //to use axios run "npm install axios"  in terminal
import { useState, useEffect } from 'react';


export default function Food_Menu({foodName}) {
    const [foodItems, setFoodItems] = useState([])
    const [error, setError] = useState('')
    
    useEffect(() => {
        axios.get('https://swe-temp.herokuapp.com/food_menu/list')
        .then((res) => {
            if (res.data) {
               const formattedData = Object.values(res.data)
                 setFoodItems(formattedData);
            }
        })      
       
        .catch((err) => {
            console.log(err);
            setError(err.toString());
        })
    }, [])

    return (
        <>
        <div id = "foodmenu_top">

            <h1> Food menu </h1>
            <h2> Take a look at what we have to offer! </h2>
            
        </div>


        <div>
        {foodItems.map((product) => (
        <p key={product.foodName}>{product.foodName} </p>
      ))}
           {/* <p>{foodName}</p> */}
        </div>
        </>

        

    )
}


