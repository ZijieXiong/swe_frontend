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




    const [foodItems, setFoodItems] = useState([])
    const [error, setError] = useState('')
    
    // useEffect(() => {
    //     axios.get('https://swe-temp.herokuapp.com/food_menu/list')
    //     .then((res) => {
    //         if (res.data) {
    //            const formattedData = Object.values(res.data)
    //              setFoodItems(formattedData);
    //         }
    //     })      
       
    //     .catch((err) => {
    //         console.log(err);
    //         setError(err.toString());
    //     })
    // }, [])
    useEffect(() => {
        axios.get('https://swe-temp.herokuapp.com/food_menu/list')
        .then((res) => {

            //if(res.data) {
           // const beverages = Object.value(res.data.Alcoholic.Beer)
           //const beverages = Object.entries(res.data.Alcoholic.Beer)
           const foods = [] 
           //console.log((res.data.Beer))
           const food = res.data.Appetizer
           // do foreach
           Object.keys(res.data.Appetizer).forEach(food=>{
           console.log((food, res.data.Appetizer[food] ))

           
           foods.push({foodName: res.data.Appetizer[food].foodName , price: res.data.Appetizer[food].price})
           console.log(foods)
           })
           setFoodItems(foods)
        })
        

    }, [])

    return (
        <>


        <div id = "foodmenu_top">

            <h1>  Food menu </h1>
            <h2> Take a look at what we have to offer! </h2>
        </div>

        {foodType.map((type) => (
                   
                   <h1> <p key={type.typeName}>{type.typeName} </p></h1>
                   ))}

        <h1> Appetizers</h1>
        <section class = "grid_container">
            <div className = "fooditems"> 
                <h1 class = "foodname"> Food item </h1>

                <h3 class = "ingredients"> Ingredients: </h3>

                <p class = "price">  Price: </p>
            </div>
            
            <div className = "fooditems"> 
                <h1 class = "foodname"> Food item </h1>

                <h3 class = "ingredients"> Ingredients: </h3>

                <p class = "price">  Price: </p>
            </div>

            <div className = "fooditems"> 
                <h1 class = "foodname"> Food item </h1>

                <h3 class = "ingredients"> Ingredients: </h3>

                <p class = "price">  Price: </p>
            </div>
            
            <div className = "fooditems"> 
                <h1 class = "foodname"> Food item </h1>

                <h3 class = "ingredients"> Ingredients: </h3>

                <p class = "price">  Price: </p>
            </div>

            <div className = "fooditems"> 
                <h1 class = "foodname"> Food item </h1>

                <h3 class = "ingredients"> Ingredients: </h3>

                <p class = "price">  Price: </p>
            </div>

            <div className = "fooditems"> 
                <h1 class = "foodname"> Food item </h1>

                <h3 class = "ingredients"> Ingredients: </h3>

                <p class = "price">  Price: </p>
            </div>
            </section>

        <h1> Main courses </h1>
        <section class = "grid_container">
            <div className = "fooditems"> 
                <h1 class = "foodname"> Food item </h1>

                <h3 class = "ingredients"> Ingredients: </h3>

                <p class = "price">  Price: </p>
            </div>
            
            <div className = "fooditems"> 
                <h1 class = "foodname"> Food item </h1>

                <h3 class = "ingredients"> Ingredients: </h3>

                <p class = "price">  Price: </p>
            </div>

            <div className = "fooditems"> 
                <h1 class = "foodname"> Food item </h1>

                <h3 class = "ingredients"> Ingredients: </h3>

                <p class = "price">  Price: </p>
            </div>
            
            <div className = "fooditems"> 
                <h1 class = "foodname"> Food item </h1>

                <h3 class = "ingredients"> Ingredients: </h3>

                <p class = "price">  Price: </p>
            </div>

            <div className = "fooditems"> 
                <h1 class = "foodname"> Food item </h1>

                <h3 class = "ingredients"> Ingredients: </h3>

                <p class = "price">  Price: </p>
            </div>

            <div className = "fooditems"> 
                <h1 class = "foodname"> Food item </h1>

                <h3 class = "ingredients"> Ingredients: </h3>

                <p class = "price">  Price: </p>
            </div>
            </section>


        <h1> Sides</h1>




        <div>
        {foodItems.map((product) => (
                   <section class = "grid_container">
                   <div className = "fooditems"> 
                       <h1 class = "foodname"> Food item </h1>
                       <p key={product.foodName}>{product.foodName} </p>
                       <h3 class = "ingredients"> Ingredients: </h3>
       
                       <p class = "price">  Price: {product.price}  </p>
                      
                   </div>
                   </section>
      ))}
          
        </div>
        </>

        

    )
}


