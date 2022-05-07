import React, {useEffect, useState} from "react";
import "./Login.css";
import axios from 'axios';

import {useHistory} from 'react-router-dom';
import {backendurl} from '../../config';

export default function Login() {

    const [users, setUsers] = useState(undefined);
    const [error, setError] = useState(undefined);

    const [refresh, setRefresh] = useState(0);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLogedIn, setLogedIn] = useState(false);
    const [UserName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const handleLogIn = () => {
        axios.post(`${backendurl}login/${UserName}&${password}`)
        .then(() => {
            setIsModalOpen(false);
            setRefresh(refresh +1 );
            setLogedIn(true);

        })
        .catch(error => {
            setError(error);
            console.log(`${backendurl}login/${UserName}&${password}`)
            console.log(error);
        })


    }

    return (

        <>
      
        
         <div>
             {isLogedIn && 
             <p id = "user-signed-in">"Successfully loged in"</p>
             }


<br></br>
<br></br>
<br></br>



 
       
        </div>





        <div> 
          

                <div id="sign-up-form">
                            <div id="title"><h1>Log in</h1></div>
                    <p>Welcome, User!</p>
                               <div id="gap"></div>
                    <label htmlFor="first-name"><b>Username</b></label>
                    <input

value={UserName}
onChange={(e) => setUserName(e.target.value)}
                    
                    type="text" placeholder="Enter your username" name="first-name" required></input>
                   
                 


                    
                    <label htmlFor="password"><b>Password</b></label>
                    <input 
                    
                    value={password}
onChange={(e) => setPassword(e.target.value)}
                    
                   
                    
                    type="password" placeholder="Enter your password" name="password" required></input>
                    <button id="sign-up-submit" type="submit" onClick={handleLogIn}> Submit</button>
                </div>
          
          
           
      </div>



        </>
    );
}
