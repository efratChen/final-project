import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import SignUp from './SignUp';
import Home from './Home';
// src\components\content\Home.js
const LogIn = () => {
    // create user obj:
    const [userName, setuserName] = useState();
    const [pass, setPass] = useState();
    const [enter, setEnter] = useState(false);

    const base_url = 'http://localhost:5000/user/login';
    let newUser = React.createRef();
    const handleFormSubmit = () => {
        const user = {
            'userName': userName,
            'pass': pass,
        }
        axios.post(base_url, user)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    const handleFName = (event) => {
        setuserName(event.target.value);
    }
    const Enter=(e)=>{
        // valid check username+password
        setEnter(true)
    }
    const handlePass = (event) => {
        setPass(event.target.value);
    }
   
    return (
        <>
        <form className="ui form" onSubmit={handleFormSubmit}>
            <div className="ui form"></div>
            <div className="two fields">
                <div className="field">
                    <label>User Name</label>
                    <input placeholder='User Name' onChange={handleFName} />'
                    <p>{userName}</p>
                </div>
            </div>
            <div className="two fields">
                <div className="field">
                    <label>password</label>
                    <input placeholder='Password' onChange={handlePass} />'
                    <p>{pass}</p>
                </div></div>
          <div> 
            <Button type='submit' onClick={Enter}>enter</Button>
            {/* MyError1 */}
            {/* if enter ==true so show HOME 
            else null */}
            {enter && <Home/>}
            </div>
            <Link to="/login/SignUp">  <a ref={newUser}>
                new User?signUp
            </a>
            </Link>
            <Route path="/login/SignUp">
                <SignUp />
            </Route>
        </form>
        </>
    );
}
export default LogIn;