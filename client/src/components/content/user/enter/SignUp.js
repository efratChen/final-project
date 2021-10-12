import React, { useState } from 'react';
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'
import PasswordToMailMessage from './PasswordToMailMessage'
import { Link } from 'react-router-dom';
const SignUp = () => {
    const base_url = 'http://localhost:5000/api/sendMail';
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        if (e.target.id === "name") {
            setName(e.target.value)
        }
        else {
            setEmail(e.target.value)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const dataToSubmit = {
            name,
            email
        }
        //send req to server -send mail to user
        axios.post(base_url, dataToSubmit);
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="ui form">
                <div className="ui form">
                    <div className="two fields">
                        <div className="field">
                            <label>userName</label>
                            <input id="name" value={name} onChange={handleClick} placeholder="userName" type="text" />
                        </div></div>
                    <div className="two fields">
                        <div className="field">
                            <label>Email</label>
                            <input id="email" placeholder="Email" value={email} onChange={handleClick} type="text" placeholder="Email" />
                            <p>{email}</p>
                        </div></div>
                </div>
                <div>
                    <Button type="submit" onClick={handleSubmit}>send</Button>
                    {/*MyError1 = it show the component just a second - fix that it will show the component for time longer */}
                    {/* {showResults && <PasswordToMailMessage />} */}
                </div>
            </form>
        </>
    );
}
export default SignUp;