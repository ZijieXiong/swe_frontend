import React from "react";

function Add_To_Cart() {
    alert("Item successfully added!");
    // cart += item.price;

}

export default function Order() {
    return (
        <>
            <div className = "order_menu" >
                <p> Testing </p>
                <p> Order Now! </p>

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

        </>
    )
}
