import React from 'react'
//import {useEffect} from 'react'
//Utilizing foodmenu_css 
import axios from 'axios' //to use axios run "npm install axios"  in terminal
import { useState, useEffect } from 'react';

export default function Reservation() {
    return (
        //"userName": "Tom",
        // "time": "2021-12-19 00:35:33.134848",
        // "numOfPeople": 1
        <>
      
           <div> 
            <form>
                <div id="Sign-up-form">
                    <div id="title"><h1>Welcome</h1></div>
                    <p>Please make a reservation!</p>
                    <div id="gap"></div>
                    <label for="first-name"><b>Name</b></label>
                    <input type="text" placeholder="Enter your name" name="first-name" required></input>
                    
                    
                    <label for="time"><b>Time</b></label>
                    <input type="time" placeholder="Enter the time" name="time" required></input>

                    <label for="NumberOfPeople"><b>NumberOfPeople</b></label>
                    <input type="NumberOfPeople" placeholder="Enter the number of people" name="NumberOfPeople" required></input>

                    <input type="submit" id="submit"></input>
                </div>
            </form>
        </div>

        </>
    );
}