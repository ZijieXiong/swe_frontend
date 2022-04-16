import React, {useState} from "react";
import ReactDom from "react-dom";
import "./Login.css";


const [errormessage, seterrormessage] = useState({});
const [checksubmission, setchecksubmission] = useState(false);

const displayErrorMessage = (name) => 
    name === errormessage.name && ( 
        <div className = "error"> {errormessage.message} 
        </div>
    );

const handleSubmit = (event) => {
    event.preventDefault();
};

export default function Login() {
    return (
        <>
        <div>
            <form>
           
            <div className= "login_main"> 
                <form> 
                    <div id ="sign-up-form">
                        <div id = "title"> <h1> Login </h1> </div>
                        <div id = "gap"></div>
                        <label> Email </label>
                        <input type = "text" name = "uname" required />

                        {displayErrorMessage("uname")}

                        <label>Password </label>
                        <input type = "password" name = "pass" required />
                        {displayErrorMessage("pass")}
                    
                    <div className = "button-container">
                        <input type = "submit" />
                    </div>
                    </div>
                </form>


            </div>

            
            </form>
            </div>

        </>
    );
}
