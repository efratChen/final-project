import React, { useState } from 'react';
import { Button } from 'semantic-ui-react'
import axios from 'axios';
import PasswordToMailMessage from './PasswordToMailMessage'
import { Link } from 'react-router-dom';
const SignUp = () => {
    const [showResults, setShowResults] = useState(false);

    // create user obj:
    const [userName, setuserName] = useState();
    const [email, setEmail] = useState();
    const base_url = 'http://localhost:5000/user/login';
    const handleFormSubmit = () => {
        const user = {
            'userName': userName,
            'email': email,
        }
        axios.post(base_url, user)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    const handleFName = (event) => {
        setuserName(event.target.value);
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const passwordToMailMessage = () => {
        // valid check! (email + name)
        setShowResults(true)
    }
    return (
        <>
            <form className="ui form">
                <div className="ui form">
                    <div className="two fields">
                        <div className="field">
                            <label>userName</label>
                            <input placeholder="userName" type="text" onChange={handleFName} />
                            <p>{userName}</p>
                        </div></div>
                    <div className="two fields">
                        <div className="field">
                            <label>Email</label>
                            <input type="text" placeholder="Email" onChange={handleEmail} />
                            <p>{email}</p>
                        </div></div>
                </div>
                <div>
                    <Button type="submit" onClick={passwordToMailMessage} >send</Button>
                    {/*MyError1 = it show the component just a second - fix that it will show the component for time longer */}
                    {showResults && <PasswordToMailMessage />}
                </div>
            </form>
        </>
    );
}
export default SignUp;
