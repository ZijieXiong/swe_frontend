import React from 'react';
import "./About.css";

import axios from 'axios' //to use axios run "npm install axios"  in terminal
import { useState, useEffect } from 'react';

// 'https://swe-temp.herokuapp.com/review_list/review' 

function feedback() {
    alert("Thank you for your feedback! 😊 ");
}

export default function About({customerReview}) {
    const [review, setReview] = useState([])
    useEffect(() => {
        // adding event listeners on mount here
        axios.get('https://swe-temp.herokuapp.com/review_list/review' )
        .then((res) => {
            if (res.data) {
                const formattedData = Object.values(res.data)
                setReview(formattedData);
                console.log(res.data);
             }
        })
        
        }, [] );





    return(
        <>
        
       

        <div id = "About_section">
            <h1 class = "About_Title"> About Us </h1>
            <p class="about-text">The idea was born with the interests of 5 intellectual students at NYU Tandon. <br/>We serve to provide the best quality food and service to our customers.</p>
            <div id="map-section">
                <h1 class="About_Title">Locate Us</h1>
                <div id="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.073682845903!2d-73.98876518478383!3d40.69437484663089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a4a4d8396f3%3A0xda9b313d596491f7!2sNew%20York%20University%20Tandon%20School%20of%20Engineering!5e0!3m2!1sen!2sus!4v1651271074763!5m2!1sen!2sus" width="600" height="450" title="Google Map" allowfullscreen></iframe>
                </div>
            </div>
            <div id="feedback-section">
                <h1 class="About_Title">Let Us Know</h1>
                <div className="wrapper">
                    <form>
                    <fieldset>
                        <p id="feedback-form-title">Feedback Form</p>
                        <label>
                        <p>Name</p>
                        <input name="name" />
                        </label>
                       
                        <label>
                        <p>Feedback</p>
                        <input name = "name" />
                        </label>
                        <button id="about_submit_button" onclick = {feedback} type="submit">Submit</button>
                    </fieldset>
                </form>
                </div>
            </div>
        </div>

        <div id = "comments-section">
        <h1 class="About_Title">Reviews</h1>
        <div className="wrapper2">
        { review.map((type) => (
                   
                   <h1> <p key={type.review}>{type.review} </p></h1>
                  
                   ))}


                   </div>
                   </div>
  
        </>

    ); 
}

