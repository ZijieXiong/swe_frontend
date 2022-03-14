import React from "react"

export default function Login() {
    return (
        <>
        <div className= "login_main"> 
            <form action="action_page.php" style="border:1px solid #ccc">
                <div class="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <label for="first-name"><b>First Name</b></label>
                    <input type="text" placeholder="Enter your first name" name="first-name" required></input>
                    <label for="last-name"><b>Last Name</b></label>
                    <input type="text" placeholder="Enter your last name" name="last-name" required></input>
                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter your email" name="email" required></input>
                    <label for="password"><b>Password</b></label>
                    <input type="text" placeholder="Enter your password" name="password" required></input>
                </div>
            </form>
        </div>
        </>
    );
}