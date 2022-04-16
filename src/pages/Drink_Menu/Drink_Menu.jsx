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

    const [drinkitems, setDrinkItems] = useState(undefined)
    const [error, setError] = useState('')
    
    useEffect(() => {
        axios.get('https://swe-temp.herokuapp.com/drink_menu/list')
        .then((res) => {

            //if(res.data) {
           // const beverages = Object.value(res.data.Alcoholic.Beer)
           //const beverages = Object.entries(res.data.Alcoholic.Beer)
           const beverages = [] 
           console.log((res.data.Beer))
           const drink = res.data.Beer.Beer1
           // do foreach
           Object.keys(res.data.Beer).forEach(drink=>{
           console.log((drink, res.data.Beer[drink] ))

           
           beverages.push({drinkName: res.data.Beer[drink].drinkName , price: res.data.Beer[drink].price})
           console.log(beverages)
        })
            
              
           

            console.log(res.data.Beer.Beer1)
            console.log(beverages)
            
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
setDrinkItems(beverages)

        })
    }, []);
    
    
    return (
    
        <>
      


        <div id = "drinkmenu_top">
        <h1> Drinks menu </h1>
        </div>

        <h1> Take a look at the beverages we offer</h1>

        <div>
        {drinkType.map((type) => (
                   <h1> <p key={type.typeName}>{type.typeName} </p></h1>

      ))}
          
        </div>
        <section class = "grid_container">
            
            <div>
        {drinkitems && drinkitems.map((item) => (
                       <div key={item.drinkName}>
                           <div className = "fooditems"> 

                           <h1 class = "foodname"> {item.drinkName}</h1>
                           <p class = "price">  Price:  {item.price} </p>
                                                   
                       </div>
                       </div>

                    ))}
        </div>
                

            
            </section>


        <section class = "grid_container">
            <div className = "fooditems"> 

            
                <h1 class = "foodname"> Drink item </h1>

                <p class = "price">  Price: </p>
            </div>
            
            <div className = "fooditems"> 
                <h1 class = "foodname"> Drink item </h1>

                <p class = "price">  Price: </p>
            </div>

            <div className = "fooditems"> 
                <h1 class = "foodname"> Drink item </h1>


                <p class = "price">  Price: </p>
            </div>
            
            <div className = "fooditems"> 
                <h1 class = "foodname"> Drink item </h1>

                <p class = "price">  Price: </p>
            </div>

            <div className = "fooditems"> 
                <h1 class = "foodname"> Drink item </h1>

                <p class = "price">  Price: </p>
            </div>

            <div className = "fooditems"> 
                <h1 class = "foodname"> Drink item </h1>

                <p class = "price">  Price: </p>
            </div>
        </section>
        <h1> Coffee/Tea</h1>
        <section class = "grid_container">
            <div className = "fooditems"> 
                <h1 class = "foodname"> Drink item </h1>

                <p class = "price">  Price: </p>
            </div>
            
            <div className = "fooditems"> 
                <h1 class = "foodname"> Drink item </h1>

                <p class = "price">  Price: </p>
            </div>

            <div className = "fooditems"> 
                <h1 class = "foodname"> Drink item </h1>

                <p class = "price">  Price: </p>
            </div>
            
            <div className = "fooditems"> 
                <h1 class = "foodname"> Drink item </h1>

                <p class = "price">  Price: </p>
            </div>

            <div className = "fooditems"> 
                <h1 class = "foodname"> Drink item </h1>

                <p class = "price">  Price: </p>
            </div>

            <div className = "fooditems"> 
                <h1 class = "foodname"> Drink item </h1>

                <p class = "price">  Price: </p>
            </div>
        </section>

        <div>
        {drinkitems && drinkitems.map((item, index) => (
                    <section class = "grid_container"> 
                    <div className = "fooditems">
                    <h1 class = "foodname"> Drink item </h1>
                       <div key={item.drinkName}>
                           <p> {item.drinkName} </p>
                           <p> Price: {item.price} </p>
                       </div>
                    </div>
                    </section>

                    ))}
        </div>
        </>
    )
}