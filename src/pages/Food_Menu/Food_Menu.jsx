import React from 'react'
//import {useEffect} from 'react'
//Utilizing foodmenu_css 
import axios from 'axios' //to use axios run "npm install axios"  in terminal
import { useState, useEffect } from 'react';



export default function Food_Menu({foodName}) {

    const [foodType, setFoodType] = useState([])
    useEffect(() => {
        // adding event listeners on mount here
        axios.get('https://swe-temp.herokuapp.com/food_menu/type')
        .then((res) => {
            if (res.data) {
                const formattedData = Object.values(res.data)
                  setFoodType(formattedData);
             }
        })
        
        }, [] );

    const[app_fooditems, setAppFoodItems] = useState(undefined)
    const[ent_fooditems, setEntFoodItems] = useState(undefined)
    const[des_fooditems, setDesFoodItems] = useState(undefined)
    const[error, setError] = useState('')

    useEffect(() => {
        axios.get('https://swe-temp.herokuapp.com/food_menu/list')
        .then((res) => {

            //if(res.data) {
           // const beverages = Object.value(res.data.Alcoholic.Beer)
           //const beverages = Object.entries(res.data.Alcoholic.Beer)
           const app_food = []
	   const ent_food = []
	   const des_food = []
           //console.log((res.data.Beer))
           const food = res.data.Appetizer
           // do foreach
           Object.keys(res.data.Appetizer).forEach(food=>{
           app_food.push({foodName: res.data.Appetizer[food].foodName, price: res.data.Appetizer[food].price, description: res.data.Appetizer[food].description})
           console.log(app_food) })

	   Object.keys(res.data.Entree).forEach(food=>{
	   ent_food.push({foodName: res.data.Entree[food].foodName, price: res.data.Entree[food].price, description: res.data.Entree[food].description})
	   console.log(ent_food) })

	   Object.keys(res.data.Dessert).forEach(food=>{
           des_food.push({foodName: res.data.Dessert[food].foodName, price: res.data.Dessert[food].price, description: res.data.Dessert[food].description})
	   console.log(des_food) })

	   setAppFoodItems(app_food)
	   setEntFoodItems(ent_food)
	   setDesFoodItems(des_food)
        })
        

    }, [])

    return (
        <>

        <div id = "foodmenu_top">
	<h1>  Food menu </h1>
        </div>
	
	<div>
        {foodType.map((type) => {
	   
	   let foodItems;
	   
	   switch (type.typeName) {
	      case "Appetizer":
		 foodItems = app_fooditems
	         break;

	      case "Entree":
		 foodItems = ent_fooditems
	         break;

	      case "Dessert": 
		 foodItems = des_fooditems
		 break;
	   }
	return (
        
	<div>
           <p key={type.typeName}> {type.typeName} </p>
	   <div>
	   <section class = "grid_container">
	{foodItems && foodItems.map((item) => (
		<div key={item.foodName}>
		   <div className = "fooditems">

		   <h1 class = "foodName"> {item.drinkName}</h1>
		   <p class = "price"> Description: {item.description}</p>
		   <p class = "price"> Price: ${item.price} </p>

		</div>
		</div>

        	))}
		</section>
	</div>
	   </div>
	    )
	</div>
	})}
    )
}


