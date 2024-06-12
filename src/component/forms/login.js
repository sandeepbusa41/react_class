import React, { useState } from 'react';
import './styles.css';


function LoginForm() {

    const [username,setName]=useState
    const  [password,setPassword]=useState
  


    //username validation
    function userValidate(event){
        username=event.target.value
        console.log(username)
    }

    //password validate
    function passwordValidate(){

              console.log('hi')

    }








    return (
        <div className="login-container">
            <form action="action_page.php" method="post">
                <div className="imgcontainer">
                    <img src="img_avatar2.png" alt="Avatar" className="avatar" />
                </div>

                <div className="container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required  value={username}  onClick={userValidate}/>

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required  value={password} onClick={passwordValidate}/>

                    <button type="submit">Login</button>
                </div>

                <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
                    <button type="button" className="cancelbtn">Cancel</button>
                    <span className="psw">Forgot <a href="#">password?</a></span>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
