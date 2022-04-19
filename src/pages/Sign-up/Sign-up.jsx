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
        axios.post(`${backendurl}/user/register/${newUserName}&${password}&${type}`)
        .then(() => {
            setIsModalOpen(false);
            setRefresh(refresh +1 );
        })
        .catch(error => {
            setError(error);
            console.log(error);
        })


    }





    return (
        <>
         <div>


<br></br>
<br></br>
<br></br>


        {isModalOpen &&
        <div className="create-modal">


         <input
            className="user-input"
            placeholder="User Name"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}

          />

<div className="create-actions">
            <button className="button" onClick={handleCreateUser}>Create New User</button>
            <button className="button" onClick={() => setIsModalOpen(false)}> Cancel </button>
          </div>
          </div>

        }

       
        </div>





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
