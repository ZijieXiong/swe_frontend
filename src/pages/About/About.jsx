import React from 'react';
import "./About.css";

function feedback() {
    alert("Thank you for your feedback! 😊 ");
}

export default function About() {
    return(
        <>
        <div id = "About_section">
            <h1 id = "About_Title"> About us </h1>
            <p> Idea born with the interests of 5 intellectual students, we serve to provide the best quality food and the best service to our customer  </p>
            <p> Locate us!</p>
            <div id="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12099.738741605584!2d-74.00972389218747!3d40.6974361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a37de6900e3%3A0x7669214287d4ff65!2sClark&#39;s!5e0!3m2!1szh-CN!2sus!4v1650658286174!5m2!1szh-CN!2sus" width="600" height="450" title="Google Map" allowfullscreen></iframe>
            </div>
            <p> Please leave any feedback </p>
            <div className="wrapper">
                <form>
                <fieldset>
            <label>
            <p>First Name</p>
            <input name="name" />
            </label>
            <label>
            <p>Last Name</p>
            <input name = "name" />
            </label>
            <label>
            <p>Feedback</p>
            <input name = "name" />
            </label>
            </fieldset>
            <button onclick = {feedback} type="submit">Submit</button>
            </form>
            </div>

        </div>
  
        </>

    ); 
}

