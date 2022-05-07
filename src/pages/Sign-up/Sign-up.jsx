import React, {useEffect, useState} from "react";
import './Sign-up.css';
import axios from 'axios';

import {useHistory} from 'react-router-dom';
import {backendurl} from '../../config';

export default function SignUp() {

    const [users, setUsers] = useState(undefined);
    const [error, setError] = useState(undefined);

    const [refresh, setRefresh] = useState(0);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isUserCreated, setIsUserCreated] = useState(false);
    const [newUserName, setNewUserName] = useState('');
    const [password, setNewUserPassword] = useState('');
    const [type, setNewUserType] = useState('');

    const history = useHistory();


    //we can do this if we have an end point for user list
    // useEffect(() => {
    //     axios.get(`${backendurl}/users/list`)
    //       .then((response) => {
    //         if (response.data){
    //           setUsers(response.data);
    //         }
    //       })
    //       .catch(error => {
    //         setError(error);
    //         console.log(error);
    //       });
    //   }, [refresh])

    const handleCreateUser = () => {
        axios.post(`${backendurl}user/register/${newUserName}&${password}&${1}`)
        .then(() => {
            setIsModalOpen(false);
            setRefresh(refresh +1 );
            setIsUserCreated(true);

        })
        .catch(error => {
            setError(error);
            console.log(`${backendurl}user/register/${newUserName}&${password}&${1}`)
            console.log(error);
        })


    }


    return (

        <>
      
        
         <div>
             {isUserCreated && 
             <p id = "user-created">"User was created"</p>
             }


<br></br>
<br></br>
<br></br>



 
       
        </div>





        <div> 
          

                <div id="sign-up-form">
                            <div id="title"><h1>Sign up</h1></div>
                    <p>Welcome, New User!</p>
                               <div id="gap"></div>
                    <label htmlFor="first-name"><b>Username</b></label>
                    <input

value={newUserName}
onChange={(e) => setNewUserName(e.target.value)}
                    
                    type="text" placeholder="Enter your username" name="first-name" required></input>
                   
                 


                    
                    <label htmlFor="password"><b>Password</b></label>
                    <input 
                    
                    value={password}
onChange={(e) => setNewUserPassword(e.target.value)}
                    
                   
                    
                    type="password" placeholder="Enter your password" name="password" required></input>
                    <button id="sign-up-submit" type="submit" onClick={handleCreateUser}> Submit</button>
                </div>
          
          
           
      </div>



        </>
    );
}
