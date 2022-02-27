import React from 'react'
//import {useEffect} from 'react'
//Utilizing foodmenu_css 
import axios from 'axios' //to use axios run "npm install axios"  in terminal
import { useState, useEffect } from 'react';



export default function Drink_Menu({drinkName}) {
    const [drinkitems, setDrinkItems] = useState(undefined)
    const [error, setError] = useState('')
    
    useEffect(() => {
        axios.get('https://swe-temp.herokuapp.com/drink_menu/list')
        .then((res) => {
            const beverages = Object.entries(res.data.Beverages)
            const alcoholicBeverages = Object.entries(res.data["Alcoholic Beverages"])
            
           const merged =  [...beverages, ...alcoholicBeverages]

           const formatedData = merged.map(item=>{

            return {
                drinkName : item[0],
                price: item[1]
            }

           })
setDrinkItems(formatedData)
        })
    }, [])
    
    
    return (
        <>
        <div id = "drinkmenu_top">
        <h1> Drinks menu </h1>
        <h1> Take a look at the beverages we offer</h1>
        <section class = "grid_container">
            <div className = "fooditems"> 
                <h1 class = "foodname"> Drink item </h1>

                <h3 class = "ingredients"> Ingredients: </h3>

                <p class = "price">  Price: </p>
            </div>
            
            <div className = "fooditems"> 
                <h1 class = "foodname"> Drink item </h1>

                <h3 class = "ingredients"> Ingredients: </h3>

                <p class = "price">  Price: </p>
            </div>

            <div className = "fooditems"> 
                <h1 class = "foodname"> Food item </h1>

                <h3 class = "ingredients"> Ingredients: </h3>

                <p class = "price">  Price: </p>
            </div>
            
            <div className = "fooditems"> 
                <h1 class = "foodname"> Drink item </h1>

                <h3 class = "ingredients"> Ingredients: </h3>

                <p class = "price">  Price: </p>
            </div>

            <div className = "fooditems"> 
                <h1 class = "foodname"> Drink item </h1>

                <h3 class = "ingredients"> Ingredients: </h3>

                <p class = "price">  Price: </p>
            </div>

            <div className = "fooditems"> 
                <h1 class = "foodname"> Drink item </h1>

                <h3 class = "ingredients"> Ingredients: </h3>

                <p class = "price">  Price: </p>
            </div>


        </section>

        </div>
        <div>
        {drinkitems && drinkitems.map((item, index) => (
                       <div key={item.drinkName}>
                           <p>{item.drinkName} </p>
                           <p> {item.price} </p>
                       </div>

                    ))}
        </div>
        </>
    )
}


