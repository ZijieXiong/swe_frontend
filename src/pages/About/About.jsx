import React from 'react';


export default function About() {
    return(
        <>
        <div className = "About_section">

            <h1 id = "About_Title"> About us </h1>

            <p> Idea born with the interests of 5 intellectual students, we serve to provide the best quality food and the best service to our customer  </p>

            <p> Locate us!</p>

            <p> Google Maps API here</p>

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
            <button type="submit">Submit</button>
            </form>
            </div>

        </div>
  
        </>

    ); 
}

