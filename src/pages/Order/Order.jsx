import React from "react";
import axios from 'axios'
import {useState, useEffect} from 'react';


function Add_To_Cart() {
    alert("Item successfully added!");
    // cart += item.price;
}


function total() {
    alert('Thank you for your order!');
}


//Food items gotta be in the database 
//Food name = array[string] //Same lengths 
//foodQuantity=  array[integer] 
//Drink name = array[string]
//drinkQuantity = array[integer]




//Order endpoint 
//

/*
const[app_fooditems, setAppFoodItems] = useState(undefined)
const[enter_fooditems, setEntFoodItems] = useState(undefined)
const[des_fooditems, setDesFoodItmes] = useState(undefined)
const[error, setError] = useState('')

Order types. Traverse based on username and get food item from username
Order types, switch; we choose Dine-in, delivery, or pickup,
traverse through username, keys in username, 
*/

//Order list push based on these specs


//For order/list endpoint, print out the following orders with description corresponding to username
//A dictionary with data,
// const order = {username, orderType, special reqs, phoneNum}  
//We want to output this 

export default function Order() { 

    return (
        <>
        <div id = "Order_Section">
            <div className = "order_menu" >
                <h1> Order Now! </h1>

                <i class="icon-shopping-cart"></i> 

            </div>

            <div className = "Drink_List"> 
            <ul> Drinks </ul>
                    <li> Beer  <button onClick = {Add_To_Cart}> Add </button></li>
                    <li> Coffee <button onClick = {Add_To_Cart}> Add </button> </li>
                    <li> Tea  <button onClick = {Add_To_Cart}> Add </button> </li>
            </div> 
            <div className = "Food_List">
                <ul> Appetizer </ul> 
                    <li> French fries <button onClick = {Add_To_Cart}> Add </button> </li>
                    <li> Salad  <button onClick = {Add_To_Cart}> Add </button> </li>

                <ul> Main Course</ul> 
                    <li> Pancake <button onClick = {Add_To_Cart}> Add </button> </li>
                    <li> Waffle <button onClick = {Add_To_Cart}> Add </button> </li>
            </div> 

        <p> Total </p>
        <p> Proceed with items? </p>
        <button onClick = {total} id = "completed_order"> Order</button>

        <h1>Phone Num </h1>
        <h1>Username </h1>
        <h2>Order Type</h2>
        <h3>Special requests</h3>

        </div>
        
        </>
    )
}
