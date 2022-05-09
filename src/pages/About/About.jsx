import React from "react";
import "./About.css";

import axios from "axios"; //to use axios run "npm install axios"  in terminal
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { backendurl } from "../../config";

// 'https://swe-temp.herokuapp.com/review_list/review'

function feedback() {
  alert("Thank you for your feedback! 😊 ");
}

export default function About({ customerReview }) {
  const [review_list, setReview] = useState([]);
  useEffect(() => {
    // adding event listeners on mount here
    axios
      .get("https://swe-temp.herokuapp.com/review_list/review")
      .then((res) => {
        if (res.data) {
          const formattedData = Object.values(res.data);
          setReview(formattedData);
          console.log(res.data);
        }
      });
  }, []);

  const [refresh, setRefresh] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReviewCreated, setReviewCreated] = useState(false);
  const [error, setError] = useState(undefined);
  const [leaveReview, setLeaveReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userObject = {
      review: leaveReview,
    };

    axios
      .post(
        `https://swe-temp.herokuapp.com/review_list/${leaveReview}`,
        userObject
      )

      .then((res) => {
        console.log(res.data);

        setReviewCreated(true);
        setRefresh(refresh + 1);
      })
      .catch((error) => {
        setError(error);
        console.log(userObject);
        console.log(`${backendurl}review_list/${userObject}`);
        console.log(error);
      });
  };

  return (
    <>
      <div id="About_section">
        <h1 className="About_Title"> About Us </h1>
        <p className="about-text">
          The idea was born with the interests of 5 intellectual students at NYU
          Tandon. <br />
          We serve to provide the best quality food and service to our
          customers.
        </p>
        <div id="map-section">
          <h1 className="About_Title">Locate Us</h1>
          <div id="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.073682845903!2d-73.98876518478383!3d40.69437484663089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a4a4d8396f3%3A0xda9b313d596491f7!2sNew%20York%20University%20Tandon%20School%20of%20Engineering!5e0!3m2!1sen!2sus!4v1651271074763!5m2!1sen!2sus"
              width="600"
              height="450"
              title="Google Map"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div id="feedback-section">
          <h1 className="About_Title">Let Us Know</h1>
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
                </label>
                <input
                  value={leaveReview}
                  onChange={(e) => setLeaveReview(e.target.value)}
                  required
                />

                <button
                  id="about_submit_button"
                  onClick={handleSubmit}
                  type="submit"
                >
                  Submit
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>

      <div id="comments-section">
        <h1 class="About_Title">Reviews</h1>
        <div className="wrapper2">
          {review_list.map((type) => (
            <p>{type.review} </p>
          ))}
        </div>
      </div>
    </>
  );
}
