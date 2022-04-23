import React, {useState} from "react";
import ReactDom from "react-dom";
import "./Login.css";

export default function Login() {

    //States 
    const [errormessage, seterrormessage] = useState({});
    const [checksubmission, setchecksubmission] = useState(false);

    //Temp database 
    const database  = [
        {
            username: 'user1',
            password: 'password1'
        },
        {
            username: 'user2',
            password: 'password2'
        }
    ];

    const errors = {
        user: "invalid username",
        passwd: "invalid password"
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        var {user, passwd} = document.forms[0]; 

        const userInfo = database.find((user) => user.username === user.value);

        if (userInfo) {
            if(userInfo.password != passwd.value) {
                displayErrorMessage({name: "pass", message: errors.pass});

            }

            else {
                setchecksubmission(true);
            }
        }
        else {
            seterrormessage({name: 'user', message: errors.user});
        }
    };

    const displayErrorMessage = (name) => 
    name === errormessage.name && ( 
        <div className = "error"> {errormessage.message} 
        </div>
    );

    const LoginForm = (
        <div className= "login_main"> 
                <form onSubmit = {handleSubmit}>
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


    );

    
    return (
        <> 
            <p> Login </p>
            {checksubmission ? <div>Successfully logged in</div>: LoginForm} 
        </>
    );
}
