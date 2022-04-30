import React from "react";


function Add_To_Cart() {
    alert("Item successfully added!");
    // cart += item.price;
}

function total() {
    alert('Thank you for your order!');
}

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



        </div> 



            

        </>
    )
}
