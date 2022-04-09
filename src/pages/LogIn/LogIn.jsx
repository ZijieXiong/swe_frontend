import React from "react"

export default function Login() {
    return (
        <>
            <div className= "login_main"> 
                <h1> Please login to order online!  </h1>
                <form> 
                    <div id ="sign-up-form">
                        <div id = "title"> <h1> Login </h1> </div>
                        <div id = "gap"></div>
                        <label for="email"><b>Email</b></label>
                        <label for="password"><b> </b></label>
                    </div>
                </form>


            </div>

        </>
    );
}
