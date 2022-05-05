import React from 'react'
//import {useEffect} from 'react'
//Utilizing foodmenu_css 
import axios from 'axios' //to use axios run "npm install axios"  in terminal
import { useState, useEffect } from 'react';



export default function Drink_Menu({drinkName}) {
    
    const [drinkType, setDrinkType] = useState([])
    useEffect(() => {
        // adding event listeners on mount here
        axios.get('https://swe-temp.herokuapp.com/drink_menu/type')
        .then((res) => {
            if (res.data) {
                const formattedData = Object.values(res.data)
                  setDrinkType(formattedData);
             }
        })
        
        }, [] );

    const [beer_drinkitems, setBeerDrinkItems] = useState(undefined)
    const [wine_drinkitems, setWineDrinkItems] = useState(undefined)
    const [error, setError] = useState('')
    
    useEffect(() => {
        axios.get('https://swe-temp.herokuapp.com/drink_menu/list')
        .then((res) => {

            //if(res.data) {
           // const beverages = Object.value(res.data.Alcoholic.Beer)
           //const beverages = Object.entries(res.data.Alcoholic.Beer)
           const beer_beverages = [] 
           const wine_beverages = []
          // console.log((res.data.Beer))
           const drink = res.data.Beer.Beer1
           // do foreach
           Object.keys(res.data.Beer).forEach(drink=>{
          // console.log((drink, res.data.Beer[drink] ))

           
           beer_beverages.push({drinkName: res.data.Beer[drink].drinkName , price: res.data.Beer[drink].price, description: res.data.Beer[drink].description})
           console.log(beer_beverages) })

           Object.keys(res.data.Wine).forEach(drink=>{
            // console.log((drink, res.data.Beer[drink] ))
  
             
             wine_beverages.push({drinkName: res.data.Wine[drink].drinkName , price: res.data.Wine[drink].price, description: res.data.Wine[drink].description})
             console.log(wine_beverages)

        })
            
              
           

           // console.log(res.data.Beer.Beer1)
          //  console.log(beverages)
            
            //const alcoholicBeverages = Object.entries(res.data["Alcoholic Beverages"])
            
           //const merged =  [...beverages, ...alcoholicBeverages]
           // }
           //const formatedData = merged.map(item=>{ 
              
        //     const formatedData = beverages.map(item=>{
        //         console.log(item)


        //         return {
        //             drinkName : item[0],
        //             type: item[1],
        //             price: item[2]                 
        //         }               
        //    })
           
//setDrinkItems(formatedData)
setBeerDrinkItems(beer_beverages)
setWineDrinkItems(wine_beverages)


        })
    }, []);
    
    
    return (
    
        <>
      


        <div id = "drinkmenu_top">
        <h1> Drinks menu </h1>

        <h1> Take a look at the beverages we offer</h1>
        </div>
        <div>
        {drinkType.map((type) => {

            let drinkItems;

            switch (type.typeName) { 
                case "Beer": drinkItems = beer_drinkitems


                break;

                case "Wine": drinkItems = wine_drinkitems

                break;

            }
           return (
              
            <div>
                <h1> <p key={type.typeName}><h1>{type.typeName}</h1> </p></h1>
                <div>
                <section class = "grid_container">
        {drinkItems && drinkItems.map((item) => (
                       <div key={item.drinkName}>
                           <div className = "fooditems"> 

                           <h1 class = "foodname"> {item.drinkName}</h1>
                           <p class = "price"> Description: {item.description}</p>
                           <p class = "price">  Price: ${item.price} </p>
                                                   
                       </div>
                       </div>

                    ))}
                    </section>
        </div>
            </div>
             )
              

        })}
          
        </div>
        
     
        </>
    )
}