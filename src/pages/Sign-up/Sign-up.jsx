import React from "react"
import './Sign-up.css';

export default function SignUp() {
    return (
        <>
        <div> 
            <form>
                <div id="sign-up-form">
                    <div id="title"><h1>Sign up</h1></div>
                    <p>Welcome, New User!</p>
                    <div id="gap"></div>
                    <label for="first-name"><b>First Name</b></label>
                    <input type="text" placeholder="Enter your first name" name="first-name" required></input>
                    <label for="last-name"><b>Last Name</b></label>
                    <input type="text" placeholder="Enter your last name" name="last-name" required></input>
                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter your email" name="email" required></input>
                    <label for="password"><b>Password</b></label>
                    <input type="password" placeholder="Enter your password" name="password" required></input>
                    <input type="submit" id="submit"></input>
                </div>
            </form>
        </div>
        </>
    );
}
